import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import ISPProviderPage from "../pages/ISPProviderPage.vue";
import IPTVServicePage from "../pages/IPTVServicePage.vue";
import ISPBroadbandPage from "../pages/ISPBroadbandPage.vue";
import OTTPlatformPage from "../pages/OTTPlatformPage.vue";
import MovieHomePage from "../pages/MovieHomePage.vue";
import SatelliteInternetPage from "../pages/SatelliteInternetPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ServicesDetailsPage from "../pages/ServicesDetailsPage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import TestimonialsPage from "../pages/TestimonialsPage.vue";
import PricingPage from "../pages/PricingPage.vue";
import ChannelListPage from "../pages/ChannelListPage.vue";
import FAQPage from "../pages/FAQPage.vue";
import LoginRegisterPage from "../pages/LoginRegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import ChangePasswordPage from "../pages/ChangePasswordPage.vue";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.vue";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage.vue";
import TermsConditionsPage from "../pages/TermsConditionsPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import BlogDetailsPage from "../pages/BlogDetailsPage.vue";
import TagsPage from "../pages/TagsPage.vue";
import CategoriesPage from "../pages/CategoriesPage.vue";
import AuthorPage from "../pages/AuthorPage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import ProductsPage from "../pages/ProductsPage.vue";
import ProductDetailsPage from "../pages/ProductDetailsPage.vue";
import CartPage from "../pages/CartPage.vue";
import CheckoutPage from "../pages/CheckoutPage.vue";
import PayBillPage from "../pages/PayBillPage.vue";
import PayBillPinPage from "../pages/PayBillPinPage.vue";
import SetupGuidePage from "../pages/SetupGuidePage.vue";
import ResellerPage from "../pages/ResellerPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import AdminProductsPage from "../pages/AdminProductsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "IPTVServicePage",
    component: IPTVServicePage,
  },
  {
    path: "/isp-provider",
    name: "ISPProviderPage",
    component: ISPProviderPage,
  },
  {
    path: "/isp-broadband",
    name: "ISPBroadbandPage",
    component: ISPBroadbandPage,
  },
  {
    path: "/ott-platform",
    name: "OTTPlatformPage",
    component: OTTPlatformPage,
  },
  {
    path: "/movie-home",
    name: "MovieHomePage",
    component: MovieHomePage,
  },
  {
    path: "/satellite-internet",
    name: "SatelliteInternetPage",
    component: SatelliteInternetPage,
  },
  {
    path: "/services",
    name: "ServicesPage",
    component: ServicesPage,
  },
  {
    path: "/services-details",
    name: "ServicesDetailsPage",
    component: ServicesDetailsPage,
  },
  {
    path: "/about-us",
    name: "AboutUsPage",
    component: AboutUsPage,
  },
  {
    path: "/testimonials",
    name: "TestimonialsPage",
    component: TestimonialsPage,
  },
  {
    path: "/pricing-plan",
    name: "PricingPage",
    component: PricingPage,
  },
  {
    path: "/channel-list",
    name: "ChannelListPage",
    component: ChannelListPage,
  },
  {
    path: "/faq",
    name: "FAQPage",
    component: FAQPage,
  },
  {
    path: "/login-register",
    name: "LoginRegisterPage",
    component: LoginRegisterPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/change-password",
    name: "ChangePasswordPage",
    component: ChangePasswordPage,
  },
  {
    path: "/forgot-password",
    name: "ForgotPasswordPage",
    component: ForgotPasswordPage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/terms-conditions",
    name: "TermsConditionsPage",
    component: TermsConditionsPage,
  },
  {
    path: "/blog",
    name: "BlogPage",
    component: BlogPage,
  },
  {
    path: "/blog-details",
    name: "BlogDetailsPage",
    component: BlogDetailsPage,
  },
  {
    path: "/tags",
    name: "TagsPage",
    component: TagsPage,
  },
  {
    path: "/categories",
    name: "CategoriesPage",
    component: CategoriesPage,
  },
  {
    path: "/author",
    name: "AuthorPage",
    component: AuthorPage,
  },
  {
    path: "/contact-us",
    name: "ContactUsPage",
    component: ContactUsPage,
  },
  {
    path: "/products",
    name: "ProductsPage",
    component: ProductsPage,
  },
  {
    path: "/product-details",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/pay-bill",
    name: "PayBillPage",
    component: PayBillPage,
  },
  {
    path: "/pay-bill-pin",
    name: "PayBillPinPage",
    component: PayBillPinPage,
  },
  {
    path: "/setup-guide",
    name: "SetupGuidePage",
    component: SetupGuidePage,
  },
  {
    path: "/reseller",
    name: "ResellerPage",
    component: ResellerPage,
  },
  {
    path: "/admin/products",
    name: "AdminProductsPage",
    component: AdminProductsPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
