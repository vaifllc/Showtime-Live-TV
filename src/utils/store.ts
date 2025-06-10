import { reactive } from "vue";

interface StateStore {
  open: boolean;
  onChange: () => void;
  active: boolean;
  searchModal: () => void;
  show: boolean;
  cartModal: () => void;
  navbar: boolean;
  responsiveNavbar: () => void;
}

const stateStore: StateStore = reactive({
  open: false,
  onChange() {
    stateStore.open = !stateStore.open;
  },
  active: false,
  searchModal() {
    stateStore.active = !stateStore.active;
  },
  show: false,
  cartModal() {
    stateStore.show = !stateStore.show;
  },
  navbar: false,
  responsiveNavbar() {
    stateStore.navbar = !stateStore.navbar;
  },
});

export default stateStore;
