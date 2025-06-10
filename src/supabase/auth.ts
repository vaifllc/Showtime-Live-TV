import { supabase } from "./config"
import type { User, AuthError } from "@supabase/supabase-js"

// Address interface
export interface Address {
  type?: string
  street: string
  city: string
  state?: string
  zip?: string
  country: string
}

// User profile interface
export interface UserProfile {
  id: string
  full_name: string
  email: string
  addresses?: Address[]
  country?: string
  phone?: string
  created_at: string
  admin?: boolean
}

// Register a new user with email and password
export const registerUser = async (
  email: string,
  password: string,
  profile: Omit<UserProfile, "id" | "email" | "created_at">,
): Promise<{ user: User | null; error: AuthError | null }> => {
  try {
    // Create auth user with email and password
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: profile.full_name,
        },
      },
    })

    if (authError) {
      return { user: null, error: authError }
    }

    if (authData.user) {
      // Store additional user data in profiles table
      const { error: profileError } = await supabase.from("profiles").insert({
        id: authData.user.id,
        full_name: profile.full_name,
        email: authData.user.email,
        addresses: profile.addresses || [],
        country: profile.country || "",
        phone: profile.phone || "",
        admin: profile.admin || false,
      })

      if (profileError) {
        console.error("Error creating user profile:", profileError)
      }
    }

    return { user: authData.user, error: null }
  } catch (error: any) {
    return { user: null, error: error as AuthError }
  }
}

// Sign in an existing user
export const signInUser = async (
  email: string,
  password: string,
): Promise<{ user: User | null; error: AuthError | null }> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return { user: data.user, error }
}

// Sign out the current user
export const signOutUser = async (): Promise<{ error: AuthError | null }> => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Send password reset email
export const resetPassword = async (email: string): Promise<{ error: AuthError | null }> => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })
  return { error }
}

// Get the current authenticated user
export const getCurrentUser = async (): Promise<{ user: User | null; error: AuthError | null }> => {
  const { data, error } = await supabase.auth.getUser()
  return { user: data.user, error }
}

// Get user profile from database - EXPLICITLY EXPORTED
export const getUserProfile = async (userId: string): Promise<{ profile: UserProfile | null; error: any }> => {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  return { profile: data, error }
}

// Update user profile
export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>): Promise<{ error: any }> => {
  const { error } = await supabase.from("profiles").update(updates).eq("id", userId)

  return { error }
}

// Change user password
export const changePassword = async (newPassword: string): Promise<{ error: AuthError | null }> => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  })
  return { error }
}

// Update user email
export const updateUserEmail = async (newEmail: string): Promise<{ error: AuthError | null }> => {
  const { error } = await supabase.auth.updateUser({
    email: newEmail,
  })
  return { error }
}

// Delete user account
export const deleteUserAccount = async (): Promise<{ error: any }> => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: new Error("No authenticated user found") }
  }

  // Delete user profile first
  const { error: profileError } = await supabase.from("profiles").delete().eq("id", user.id)

  if (profileError) {
    return { error: profileError }
  }

  // Note: Supabase doesn't allow deleting auth users from client-side
  // This would need to be handled via a server function or admin API
  return { error: null }
}

// Check if user is admin
export const isUserAdmin = async (userId: string): Promise<{ isAdmin: boolean; error: any }> => {
  const { data, error } = await supabase.from("profiles").select("admin").eq("id", userId).single()

  if (error) {
    return { isAdmin: false, error }
  }

  return { isAdmin: data?.admin || false, error: null }
}

// Export all functions as a default object as well for compatibility
export default {
  registerUser,
  signInUser,
  signOutUser,
  resetPassword,
  getCurrentUser,
  getUserProfile,
  updateUserProfile,
  changePassword,
  updateUserEmail,
  deleteUserAccount,
  isUserAdmin,
}
