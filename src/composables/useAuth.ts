import { ref, computed, onMounted } from "vue"
import { supabase } from "@/supabase/config"
import {
  signInUser,
  signOutUser,
  registerUser,
  resetPassword,
  getCurrentUser,
  getUserProfile,
  updateUserProfile,
  changePassword,
  type UserProfile,
} from "@/supabase/auth"
import type { User } from "@supabase/supabase-js"

// Global auth state
const user = ref<User | null>(null)
const userProfile = ref<UserProfile | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

export const useAuth = () => {
  // Computed properties
  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => userProfile.value?.admin || false)

  // Clear error helper
  const clearError = () => {
    error.value = null
  }

  // Set error helper
  const setError = (message: string) => {
    error.value = message
  }

  // Login function
  const login = async (email: string, password: string) => {
    try {
      loading.value = true
      clearError()

      const { user: authUser, error: authError } = await signInUser(email, password)

      if (authError) {
        setError(authError.message)
        return { success: false, error: authError.message }
      }

      if (authUser) {
        user.value = authUser
        await loadUserProfile(authUser.id)
      }

      return { success: true, error: null }
    } catch (err: any) {
      const errorMessage = err.message || "Login failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  // Register function
  const register = async (
    email: string,
    password: string,
    profile: Omit<UserProfile, "id" | "email" | "created_at">,
  ) => {
    try {
      loading.value = true
      clearError()

      const { user: authUser, error: authError } = await registerUser(email, password, profile)

      if (authError) {
        setError(authError.message)
        return { success: false, error: authError.message }
      }

      if (authUser) {
        user.value = authUser
        await loadUserProfile(authUser.id)
      }

      return { success: true, error: null }
    } catch (err: any) {
      const errorMessage = err.message || "Registration failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  // Logout function
  const logout = async () => {
    try {
      loading.value = true
      clearError()

      const { error: authError } = await signOutUser()

      if (authError) {
        setError(authError.message)
        return { success: false, error: authError.message }
      }

      user.value = null
      userProfile.value = null

      return { success: true, error: null }
    } catch (err: any) {
      const errorMessage = err.message || "Logout failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  // Reset password function
  const forgotPassword = async (email: string) => {
    try {
      loading.value = true
      clearError()

      const { error: authError } = await resetPassword(email)

      if (authError) {
        setError(authError.message)
        return { success: false, error: authError.message }
      }

      return { success: true, error: null }
    } catch (err: any) {
      const errorMessage = err.message || "Password reset failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  // Change password function
  const updatePassword = async (newPassword: string) => {
    try {
      loading.value = true
      clearError()

      const { error: authError } = await changePassword(newPassword)

      if (authError) {
        setError(authError.message)
        return { success: false, error: authError.message }
      }

      return { success: true, error: null }
    } catch (err: any) {
      const errorMessage = err.message || "Password update failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  // Load user profile
  const loadUserProfile = async (userId: string) => {
    try {
      const { profile, error: profileError } = await getUserProfile(userId)

      if (profileError) {
        console.error("Error loading user profile:", profileError)
        return
      }

      userProfile.value = profile
    } catch (err) {
      console.error("Error loading user profile:", err)
    }
  }

  // Update user profile
  const updateProfile = async (updates: Partial<UserProfile>) => {
    try {
      if (!user.value) {
        setError("No authenticated user")
        return { success: false, error: "No authenticated user" }
      }

      loading.value = true
      clearError()

      const { error: updateError } = await updateUserProfile(user.value.id, updates)

      if (updateError) {
        setError(updateError.message)
        return { success: false, error: updateError.message }
      }

      // Reload profile
      await loadUserProfile(user.value.id)

      return { success: true, error: null }
    } catch (err: any) {
      const errorMessage = err.message || "Profile update failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  // Initialize auth state
  const initializeAuth = async () => {
    try {
      loading.value = true

      const { user: authUser, error: authError } = await getCurrentUser()

      if (authError) {
        console.error("Error getting current user:", authError)
        return
      }

      if (authUser) {
        user.value = authUser
        await loadUserProfile(authUser.id)
      }
    } catch (err) {
      console.error("Error initializing auth:", err)
    } finally {
      loading.value = false
    }
  }

  // Listen to auth state changes
  const setupAuthListener = () => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        user.value = session.user
        await loadUserProfile(session.user.id)
      } else if (event === "SIGNED_OUT") {
        user.value = null
        userProfile.value = null
      }
      loading.value = false
    })
  }

  // Initialize on mount
  onMounted(() => {
    setupAuthListener()
    initializeAuth()
  })

  return {
    // State
    user: computed(() => user.value),
    userProfile: computed(() => userProfile.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    isAuthenticated,
    isAdmin,

    // Methods
    login,
    register,
    logout,
    forgotPassword,
    updatePassword,
    updateProfile,
    clearError,
    initializeAuth,
  }
}
