<template>
  <transition-group name="alert-fade" tag="div" class="global-alert-container">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      :class="['alert', `alert-${alert.type}`]"
      role="alert"
    >
      <div class="alert-content">
        <div class="alert-icon">
          <i :class="getAlertIcon(alert.type)"></i>
        </div>
        <div class="alert-message">
          <div v-if="alert.title" class="alert-title">{{ alert.title }}</div>
          <div class="alert-body">{{ alert.message }}</div>
        </div>
      </div>
      <button
        type="button"
        class="alert-close"
        @click="closeAlert(alert.id)"
        aria-label="Close"
      >
        <i class="ri-close-line"></i>
      </button>
      <div
        class="alert-progress"
        :style="{ width: `${alert.progress}%`, 'background-color': getProgressColor(alert.type) }"
      ></div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted } from 'vue';

export interface Alert {
  id: number;
  message: string;
  title?: string;
  type: 'success' | 'error' | 'warning' | 'info';
  timeout: number;
  progress: number;
}

const alertStore = reactive<{
  alerts: Alert[];
  nextId: number;
}>({
  alerts: [],
  nextId: 1
});

export function useAlerts() {
  const showAlert = (options: {
    message: string;
    title?: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    timeout?: number;
  }) => {
    const id = alertStore.nextId++;
    const alert: Alert = {
      id,
      message: options.message,
      title: options.title,
      type: options.type || 'info',
      timeout: options.timeout || 5000,
      progress: 100
    };

    alertStore.alerts.push(alert);

    return id;
  };

  const closeAlert = (id: number) => {
    const index = alertStore.alerts.findIndex(alert => alert.id === id);
    if (index !== -1) {
      alertStore.alerts.splice(index, 1);
    }
  };

  return {
    showAlert,
    closeAlert
  };
}

export default defineComponent({
  name: 'AlertSystem',
  setup() {
    const progressIntervals = ref<Record<number, number>>({});

    const getAlertIcon = (type: string) => {
      switch(type) {
        case 'success': return 'ri-check-line';
        case 'error': return 'ri-error-warning-line';
        case 'warning': return 'ri-alert-line';
        case 'info': return 'ri-information-line';
        default: return 'ri-information-line';
      }
    };

    const getProgressColor = (type: string) => {
      switch(type) {
        case 'success': return 'rgba(76, 217, 100, 0.8)';
        case 'error': return 'rgba(255, 59, 48, 0.8)';
        case 'warning': return 'rgba(255, 204, 0, 0.8)';
        case 'info': return 'rgba(90, 200, 250, 0.8)';
        default: return 'rgba(90, 200, 250, 0.8)';
      }
    };

    const closeAlert = (id: number) => {
      const index = alertStore.alerts.findIndex(alert => alert.id === id);
      if (index !== -1) {
        // Clear the interval for this alert
        if (progressIntervals.value[id]) {
          clearInterval(progressIntervals.value[id]);
          delete progressIntervals.value[id];
        }

        // Remove the alert
        alertStore.alerts.splice(index, 1);
      }
    };

    const startAlertTimers = () => {
      // Start a timer for each alert to update its progress
      alertStore.alerts.forEach(alert => {
        if (!progressIntervals.value[alert.id]) {
          const updateFrequency = 100; // Update every 100ms
          const totalSteps = alert.timeout / updateFrequency;
          const stepSize = 100 / totalSteps;

          progressIntervals.value[alert.id] = setInterval(() => {
            alert.progress -= stepSize;

            if (alert.progress <= 0) {
              closeAlert(alert.id);
            }
          }, updateFrequency);
        }
      });
    };

    onMounted(() => {
      startAlertTimers();
    });

    onUnmounted(() => {
      // Clear all intervals when component is unmounted
      Object.values(progressIntervals.value).forEach(interval => {
        clearInterval(interval);
      });
    });

    return {
      alerts: alertStore.alerts,
      getAlertIcon,
      getProgressColor,
      closeAlert
    };
  }
});
</script>

<style scoped>
.global-alert-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  width: 100%;
}

.alert {
  position: relative;
  padding: 18px 20px;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: slide-in 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.alert-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

.alert-icon {
  font-size: 20px;
  margin-top: 3px;
}

.alert-message {
  flex: 1;
}

.alert-title {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;
}

.alert-body {
  font-size: 14px;
  line-height: 1.5;
}

.alert-close {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.alert-close:hover {
  color: white;
}

.alert-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  border-radius: 0;
  transition: width 0.1s linear;
}

.alert-success {
  background-color: rgba(46, 204, 113, 0.95);
}

.alert-error {
  background-color: rgba(231, 76, 60, 0.95);
}

.alert-warning {
  background-color: rgba(241, 196, 15, 0.95);
}

.alert-info {
  background-color: rgba(52, 152, 219, 0.95);
}

.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: all 0.3s ease;
}

.alert-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.alert-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@keyframes slide-in {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 576px) {
  .global-alert-container {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
}
</style>
