<template>
  <NavbarTwo />
  <div class="auth-bg">
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h2>Welcome to ShowTime Live TV</h2>
          <p class="auth-tagline">Unlimited Entertainment, One Login</p>
        </div>
        <LoginRegister />
      </div>
    </div>
  </div>
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import LoginRegister from "@/components/LoginRegister/index.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "LoginRegisterPage",
  components: {
    NavbarTwo,
    LoginRegister,
    MainFooter,
    CopyRight,
  },
});
</script>

<style scoped>
.auth-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--gondola) 0%, var(--secondary) 60%, var(--gondola2) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 110px; /* Offset for fixed navbar */
  box-sizing: border-box;
}
.auth-container {
  width: 100%;
  max-width: 440px;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.auth-card {
  background: var(--gondola2);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(34, 21, 22, 0.18);
  padding: 2.5rem 2rem 2rem 2rem;
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px solid var(--primary);
}
.auth-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.auth-header h2 {
  font-size: 2rem;
  color: var(--white);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}
.auth-tagline {
  color: var(--primarydiv);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.2px;
}
@media (max-width: 600px) {
  .auth-bg {
    padding-top: 80px;
  }
  .auth-container, .auth-card {
    max-width: 100%;
    padding: 1.2rem;
  }
  .auth-card {
    padding: 1.2rem 0.5rem;
  }
}
</style>
