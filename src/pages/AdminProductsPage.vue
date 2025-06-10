<template>
  <NavbarTwo />
  <div class="admin-bg">
    <div class="admin-container">
      <template v-if="!accessChecked || authLoading">
        <div class="admin-spinner">
          <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Checking admin access...</p>
          </div>
        </div>
      </template>

      <template v-else-if="accessDenied">
        <div class="admin-error">
          <div class="error-icon">
            <i class="ri-shield-cross-line"></i>
          </div>
          <h2>Access Denied</h2>
          <p>You don't have admin permissions to access this page.</p>
          <RouterLink to="/" class="admin-btn return-home">
            <i class="ri-home-line"></i> Return to Home
          </RouterLink>
        </div>
      </template>

      <template v-else>
        <div class="admin-dashboard">
          <!-- Admin Header with Stats -->
          <div class="admin-header">
            <div class="header-title">
              <h2><i class="ri-shopping-cart-line"></i> Product Management</h2>
              <p>Manage your subscription products and pricing plans</p>
            </div>
            <button class="admin-action-btn" @click="openForm()">
              <i class="ri-add-line"></i> Add Product
            </button>
          </div>

          <!-- Admin Stats Cards -->
          <div class="admin-stats">
            <div class="stat-card">
              <div class="stat-icon products">
                <i class="ri-shopping-bag-line"></i>
              </div>
              <div class="stat-info">
                <div class="stat-title">Total Products</div>
                <div class="stat-value">{{ products.length }}</div>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon active">
                <i class="ri-check-double-line"></i>
              </div>
              <div class="stat-info">
                <div class="stat-title">Active Products</div>
                <div class="stat-value">{{ activeProductsCount }}</div>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon lowest">
                <i class="ri-price-tag-3-line"></i>
              </div>
              <div class="stat-info">
                <div class="stat-title">Lowest Price</div>
                <div class="stat-value">${{ lowestPrice }}</div>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon highest">
                <i class="ri-money-dollar-circle-line"></i>
              </div>
              <div class="stat-info">
                <div class="stat-title">Highest Price</div>
                <div class="stat-value">${{ highestPrice }}</div>
              </div>
            </div>
          </div>

          <!-- Product Table -->
          <div class="admin-table-container">
            <AdminProductTable
              :products="products"
              @edit="openForm"
              @delete="deleteProduct"
              :loading="loading"
            />
          </div>
        </div>

        <!-- Product Form Modal -->
        <AdminProductForm
          v-if="showForm"
          :product="selectedProduct"
          @close="closeForm"
          @save="saveProduct"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, computed } from "vue";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import AdminProductTable from "@/components/Admin/AdminProductTable.vue";
import AdminProductForm from "@/components/Admin/AdminProductForm.vue";
import { useAuth } from "@/composables/useAuth";
import { useRouter } from "vue-router";

// Match the type in AdminProductForm
interface ProductFormData {
  name: string;
  price: number;
  duration: number;
  description: string;
  active: boolean;
}

interface Product extends ProductFormData {
  id?: string;
}

export default defineComponent({
  name: "AdminProductsPage",
  components: { NavbarTwo, AdminProductTable, AdminProductForm },
  setup() {
    const products = ref<Product[]>([]);
    const loading = ref(false);
    const showForm = ref(false);
    const selectedProduct = ref<(Partial<ProductFormData> & { id?: string }) | undefined>(undefined);
    const accessChecked = ref(false);
    const accessDenied = ref(false);

    const { userProfile, loading: authLoading, initialized, isAuthenticated } = useAuth();
    const router = useRouter();

    // Define fetchProducts function BEFORE it's used in the watch effect
    const fetchProducts = async () => {
      if (!userProfile.admin) {
        console.log("Not fetching products - user is not admin");
        return;
      }

      try {
        loading.value = true;
        console.log("Fetching products...");
        const querySnapshot = await getDocs(collection(db, "products"));
        products.value = querySnapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() })) as Product[];
        console.log(`Fetched ${products.value.length} products`);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        loading.value = false;
      }
    };

    // Admin access control with improved debugging
    watch(
      [initialized, () => userProfile.admin],
      ([init, isAdmin]) => {
        if (init) {
          accessChecked.value = true;
          console.log("Admin check:", {
            isAdmin: isAdmin,
            userProfile: { ...userProfile },
            initialized: init
          });

          if (isAdmin !== true) {
            accessDenied.value = true;
          } else {
            // If admin is true, ensure access is granted
            accessDenied.value = false;
            // Load products if not already loaded
            if (products.value.length === 0) {
              fetchProducts();
            }
          }
        }
      },
      { immediate: true }
    );

    // Computed stats for the dashboard
    const activeProductsCount = computed(() => {
      return products.value.filter(product => product.active).length;
    });

    const lowestPrice = computed(() => {
      if (products.value.length === 0) return "0.00";
      const min = Math.min(...products.value.map(p => p.price));
      return min.toFixed(2);
    });

    const highestPrice = computed(() => {
      if (products.value.length === 0) return "0.00";
      const max = Math.max(...products.value.map(p => p.price));
      return max.toFixed(2);
    });

    const openForm = (product: Product | null = null) => {
      selectedProduct.value = product || undefined;
      showForm.value = true;
    };

    const closeForm = () => {
      showForm.value = false;
      selectedProduct.value = undefined;
    };

    const saveProduct = async (product: Product) => {
      try {
        loading.value = true;
        if (product.id) {
          const { id, ...updateData } = product;
          await updateDoc(doc(db, "products", id), updateData as Omit<Product, "id">);
        } else {
          await addDoc(collection(db, "products"), (product as Omit<Product, "id">));
        }
        await fetchProducts();
        closeForm();
      } catch (error) {
        console.error("Error saving product:", error);
      } finally {
        loading.value = false;
      }
    };

    const deleteProduct = async (productId: string) => {
      try {
        loading.value = true;
        await deleteDoc(doc(db, "products", productId));
        await fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      } finally {
        loading.value = false;
      }
    };

    // Don't rely on onMounted - the watch handler will call fetchProducts when appropriate

    return {
      products,
      loading,
      showForm,
      selectedProduct,
      openForm,
      closeForm,
      saveProduct,
      deleteProduct,
      accessChecked,
      accessDenied,
      authLoading,
      activeProductsCount,
      lowestPrice,
      highestPrice
    };
  },
});
</script>

<style scoped>
/* Beautiful gradient background */
.admin-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--gondola) 0%, var(--secondary) 60%, var(--gondola2) 100%);
  padding: 180px 20px 40px;
}

.admin-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Admin Dashboard */
.admin-dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Header styles */
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
}

.header-title h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

.header-title p {
  margin: 8px 0 0;
  font-size: 1rem;
  opacity: 0.7;
  color: white;
}

.admin-action-btn {
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  background: var(--primary);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(201, 14, 14, 0.3);
}

.admin-action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(201, 14, 14, 0.4);
}

.admin-action-btn i {
  font-size: 1.2rem;
}

/* Stats cards */
.admin-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  background: var(--gondola2);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon i {
  font-size: 1.6rem;
  color: white;
}

.stat-icon.products {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.stat-icon.active {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
}

.stat-icon.lowest {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.stat-icon.highest {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
}

.stat-info {
  flex: 1;
}

.stat-title {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

/* Table Container */
.admin-table-container {
  background: transparent;
  border-radius: 12px;
  overflow: hidden;
}

/* Loading and Error States */
.admin-spinner, .admin-error {
  background: var(--gondola2);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(34, 21, 22, 0.18);
  margin-top: 40px;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(201, 14, 14, 0.2);
  border-left-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

.loading-spinner p {
  font-size: 1.2rem;
  color: var(--gray1);
  margin: 0;
}

.admin-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 60px 20px;
}

.error-icon {
  font-size: 3rem;
  color: #ff3b30;
  margin-bottom: 10px;
}

.admin-error h2 {
  color: #ff3b30;
  margin: 0;
  font-size: 1.8rem;
}

.admin-error p {
  color: var(--gray1);
  font-size: 1.1rem;
  margin: 0;
  max-width: 500px;
}

.admin-btn {
  padding: 12px 24px;
  border-radius: 8px;
  background: var(--primary);
  color: white;
  font-weight: 600;
  text-decoration: none;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.admin-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(201, 14, 14, 0.4);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive styles */
@media (max-width: 768px) {
  .admin-bg {
    padding: 170px 15px 30px;
  }

  .admin-stats {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }

  .stat-icon {
    width: 40px;
    height: 40px;
  }

  .stat-icon i {
    font-size: 1.3rem;
  }

  .stat-value {
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .admin-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .admin-action-btn {
    width: 100%;
    justify-content: center;
  }

  .admin-stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
