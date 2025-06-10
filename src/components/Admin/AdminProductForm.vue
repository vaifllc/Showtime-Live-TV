<template>
  <div class="admin-form-modal">
    <div class="admin-form-overlay" @click="$emit('close')"></div>
    <div class="admin-form-card">
      <div class="modal-header">
        <h3>{{ product && product.id ? "Edit Product" : "Add New Product" }}</h3>
        <button type="button" class="close-btn" @click="$emit('close')">
          <i class="ri-close-line"></i>
        </button>
      </div>

      <form @submit.prevent="submit" class="product-form">
        <div class="form-group">
          <label for="product-name">Product Name</label>
          <div class="input-with-icon">
            <i class="ri-shopping-bag-line"></i>
            <input
              id="product-name"
              class="form-control"
              v-model="form.name"
              placeholder="Enter product name"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label for="product-price">Price ($)</label>
            <div class="input-with-icon">
              <i class="ri-money-dollar-circle-line"></i>
              <input
                id="product-price"
                class="form-control"
                v-model.number="form.price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div class="form-group half">
            <label for="product-duration">Duration (months)</label>
            <div class="input-with-icon">
              <i class="ri-calendar-line"></i>
              <input
                id="product-duration"
                class="form-control"
                v-model.number="form.duration"
                type="number"
                min="1"
                max="36"
                placeholder="1"
                required
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="product-description">Description</label>
          <div class="input-with-icon textarea-container">
            <i class="ri-file-text-line"></i>
            <textarea
              id="product-description"
              class="form-control textarea"
              v-model="form.description"
              placeholder="Enter product description"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div class="form-group status-group">
          <div class="toggle-label">Product Status</div>
          <label class="toggle-switch">
            <input type="checkbox" v-model="form.active" />
            <span class="toggle-slider"></span>
            <span class="toggle-text">{{ form.active ? 'Active' : 'Inactive' }}</span>
          </label>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Cancel</button>
          <button type="submit" class="btn-save">
            <i class="ri-save-line"></i> Save Product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from "vue";

interface ProductForm {
  name: string;
  price: number;
  duration: number;
  description: string;
  active: boolean;
}

export default defineComponent({
  name: "AdminProductForm",
  props: {
    product: Object as PropType<Partial<ProductForm> & { id?: string }>,
  },
  emits: ["save", "close"],
  setup(props, { emit }) {
    const defaultForm: ProductForm = {
      name: "",
      price: 0,
      duration: 1,
      description: "",
      active: true,
    };
    const form = ref<ProductForm>({ ...defaultForm });

    watch(
      () => props.product,
      (val) => {
        if (val) {
          form.value = {
            name: val.name ?? "",
            price: val.price ?? 0,
            duration: val.duration ?? 1,
            description: val.description ?? "",
            active: val.active ?? true,
          };
        } else {
          form.value = { ...defaultForm };
        }
      },
      { immediate: true }
    );

    const submit = () => {
      emit("save", { ...form.value, id: (props.product as any)?.id });
    };

    return { form, submit };
  },
});
</script>

<style scoped>
.admin-form-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.admin-form-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  animation: fadeIn 0.3s ease;
}

.admin-form-card {
  position: relative;
  background: var(--gondola2);
  border-radius: 16px;
  padding: 0;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  z-index: 1051;
  animation: slideUpIn 0.4s ease;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(90deg, rgba(201, 14, 14, 0.5) 0%, rgba(var(--primarydiv-rgb), 0.3) 100%);
}

.modal-header h3 {
  margin: 0;
  font-size: 1.4rem;
  color: white;
  font-weight: 600;
}

.close-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.product-form {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group.half {
  flex: 1;
  min-width: 0; /* Prevents flex items from overflowing */
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--gray1);
  font-size: 0.95rem;
}

.input-with-icon {
  position: relative;
}

.input-with-icon i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 1.1rem;
}

.textarea-container i {
  top: 20px;
  transform: none;
}

.form-control {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--gondola);
  color: white;
  font-size: 1rem;
  transition: all 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(201, 14, 14, 0.2);
}

.form-control.textarea {
  resize: vertical;
  min-height: 100px;
  padding-top: 12px;
}

.status-group {
  margin-top: 2rem;
}

.toggle-label {
  font-weight: 500;
  color: var(--gray1);
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.toggle-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  background-color: #374151;
  border-radius: 34px;
  transition: 0.4s;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .toggle-slider {
  background-color: var(--primary);
}

input:checked + .toggle-slider:before {
  transform: translateX(24px);
}

.toggle-text {
  margin-left: 12px;
  font-weight: 500;
  color: white;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 2.5rem;
}

.btn-cancel {
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-save {
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  background: var(--primary);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-save:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.btn-save i {
  font-size: 1.1rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUpIn {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 576px) {
  .form-row {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 0;
  }

  .form-group.half {
    margin-bottom: 0;
  }
}
</style>