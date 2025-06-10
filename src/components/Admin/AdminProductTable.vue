<template>
  <div class="admin-table-container">
    <div class="table-search-bar">
      <div class="search-input">
        <i class="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search products..."
          v-model="searchTerm"
          @input="filterProducts"
        />
      </div>
      <div class="filter-options">
        <select v-model="filterStatus" @change="filterProducts">
          <option value="all">All Products</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>
      </div>
    </div>

    <table class="admin-table">
      <thead>
        <tr>
          <th @click="sortBy('name')" class="sortable">
            Name <i :class="getSortIcon('name')"></i>
          </th>
          <th @click="sortBy('price')" class="sortable">
            Price <i :class="getSortIcon('price')"></i>
          </th>
          <th @click="sortBy('duration')" class="sortable">
            Duration <i :class="getSortIcon('duration')"></i>
          </th>
          <th @click="sortBy('active')" class="sortable">
            Status <i :class="getSortIcon('active')"></i>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id" class="product-row">
          <td class="product-name">{{ product.name }}</td>
          <td class="product-price">${{ product.price.toFixed(2) }}</td>
          <td class="product-duration">{{ product.duration }} {{ product.duration === 1 ? 'month' : 'months' }}</td>
          <td>
            <span class="status-badge" :class="product.active ? 'status-active' : 'status-inactive'">
              {{ product.active ? "Active" : "Inactive" }}
            </span>
          </td>
          <td class="action-buttons">
            <button class="admin-btn edit" @click="$emit('edit', product)" title="Edit">
              <i class="ri-edit-line"></i>
            </button>
            <button class="admin-btn delete" @click="confirmDelete(product.id)" title="Delete">
              <i class="ri-delete-bin-line"></i>
            </button>
          </td>
        </tr>
        <tr v-if="filteredProducts.length === 0 && !loading" class="empty-row">
          <td colspan="5">
            <div class="empty-state">
              <i class="ri-inbox-line"></i>
              <p>{{ searchTerm ? 'No products match your search.' : 'No products found.' }}</p>
              <button class="admin-btn" @click="resetFilters">Reset Filters</button>
            </div>
          </td>
        </tr>
        <tr v-if="loading" class="loading-row">
          <td colspan="5">
            <div class="loading-spinner">
              <div class="spinner"></div>
              <p>Loading products...</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="delete-modal">
      <div class="delete-modal-content">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this product? This action cannot be undone.</p>
        <div class="modal-actions">
          <button class="admin-btn cancel" @click="showDeleteModal = false">Cancel</button>
          <button class="admin-btn delete" @click="handleDelete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, watch } from "vue";

interface Product {
  id?: string;
  name: string;
  price: number;
  duration: number;
  description: string;
  active: boolean;
}

export default defineComponent({
  name: "AdminProductTable",
  props: {
    products: {
      type: Array as PropType<Product[]>,
      default: () => []
    },
    loading: Boolean,
  },
  emits: ["edit", "delete"],
  setup(props, { emit }) {
    const searchTerm = ref("");
    const filterStatus = ref("all");
    const sortField = ref("name");
    const sortDirection = ref("asc");
    const showDeleteModal = ref(false);
    const pendingDeleteId = ref<string | undefined>(undefined);

    // Create a filtered and sorted list of products
    const filteredProducts = computed(() => {
      let result = [...(props.products || [])];

      // Apply search filter
      if (searchTerm.value) {
        const term = searchTerm.value.toLowerCase();
        result = result.filter(product =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
        );
      }

      // Apply status filter
      if (filterStatus.value !== "all") {
        const isActive = filterStatus.value === "active";
        result = result.filter(product => product.active === isActive);
      }

      // Apply sorting
      result.sort((a, b) => {
        let comparison = 0;

        if (sortField.value === "name") {
          comparison = a.name.localeCompare(b.name);
        } else if (sortField.value === "price") {
          comparison = a.price - b.price;
        } else if (sortField.value === "duration") {
          comparison = a.duration - b.duration;
        } else if (sortField.value === "active") {
          comparison = (a.active === b.active) ? 0 : a.active ? -1 : 1;
        }

        return sortDirection.value === "asc" ? comparison : -comparison;
      });

      return result;
    });

    // Sorting functions
    const sortBy = (field: string) => {
      if (sortField.value === field) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
      } else {
        sortField.value = field;
        sortDirection.value = "asc";
      }
    };

    const getSortIcon = (field: string) => {
      if (sortField.value !== field) return "ri-arrow-up-down-line";
      return sortDirection.value === "asc" ? "ri-arrow-up-line" : "ri-arrow-down-line";
    };

    // Filter functions
    const filterProducts = () => {
      // This function is just a placeholder to trigger the computed property
    };

    const resetFilters = () => {
      searchTerm.value = "";
      filterStatus.value = "all";
    };

    // Delete confirmation
    const confirmDelete = (id?: string) => {
      pendingDeleteId.value = id;
      showDeleteModal.value = true;
    };

    const handleDelete = () => {
      emit("delete", pendingDeleteId.value);
      showDeleteModal.value = false;
      pendingDeleteId.value = undefined;
    };

    return {
      searchTerm,
      filterStatus,
      sortField,
      sortDirection,
      filteredProducts,
      showDeleteModal,
      pendingDeleteId,
      sortBy,
      getSortIcon,
      filterProducts,
      resetFilters,
      confirmDelete,
      handleDelete
    };
  }
});
</script>

<style scoped>
.admin-table-container {
  position: relative;
  background: var(--gondola2);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 2rem;
}

.table-search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.search-input {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-input i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray1);
}

.search-input input {
  width: 100%;
  padding: 10px 12px 10px 40px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--gondola);
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s;
}

.search-input input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(201, 14, 14, 0.2);
}

.filter-options select {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--gondola);
  color: white;
  font-size: 0.95rem;
  min-width: 150px;
  cursor: pointer;
}

.filter-options select:focus {
  outline: none;
  border-color: var(--primary);
}

.admin-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--gondola);
  color: var(--white);
  border-radius: 10px;
  overflow: hidden;
}

.admin-table th, .admin-table td {
  padding: 1rem;
  text-align: left;
}

.admin-table th {
  background: rgba(201, 14, 14, 0.9);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.admin-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.admin-table th.sortable:hover {
  background: rgba(201, 14, 14, 1);
}

.admin-table th i {
  margin-left: 5px;
  font-size: 1rem;
  vertical-align: middle;
}

.admin-table tbody tr {
  transition: background-color 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.admin-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

.admin-table tbody tr:last-child {
  border-bottom: none;
}

.product-name {
  font-weight: 600;
  color: white;
}

.product-price {
  font-family: monospace;
  font-size: 1.1rem;
  color: #4cd964;
}

.product-duration {
  font-weight: 500;
  color: #5ac8fa;
}

.status-badge {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  min-width: 80px;
}

.status-active {
  background: rgba(76, 217, 100, 0.15);
  color: #4cd964;
  border: 1px solid rgba(76, 217, 100, 0.3);
}

.status-inactive {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
  border: 1px solid rgba(255, 59, 48, 0.3);
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.admin-btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: var(--primary);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.admin-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.admin-btn i {
  font-size: 1rem;
}

.admin-btn.edit {
  background: #5ac8fa;
  padding: 8px;
}

.admin-btn.delete {
  background: #ff3b30;
  padding: 8px;
}

.admin-btn.cancel {
  background: #8e8e93;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  color: var(--gray1);
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(201, 14, 14, 0.2);
  border-left-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

.delete-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  animation: fadeIn 0.3s ease;
}

.delete-modal-content {
  background: var(--gondola2);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  animation: slideIn 0.3s ease;
}

.delete-modal-content h3 {
  margin-top: 0;
  color: #ff3b30;
  margin-bottom: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 2rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 768px) {
  .admin-table th:nth-child(3),
  .admin-table td:nth-child(3) {
    display: none;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>