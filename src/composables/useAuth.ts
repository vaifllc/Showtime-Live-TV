import { onMounted, ref, reactive } from 'vue';
import { auth } from '@/firebase/config';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { UserProfile } from '@/firebase/auth';

// Global authentication state
const user = ref<User | null>(null);
const userProfile = reactive<Partial<UserProfile>>({});
const loading = ref(true);
const initialized = ref(false);
const authError = ref<string | null>(null);

// Clear sensitive data from userProfile
const clearUserProfile = () => {
  Object.keys(userProfile).forEach(key => {
    delete userProfile[key as keyof Partial<UserProfile>];
  });
};

// Initialize authentication system
let unsubscribe: (() => void) | null = null;

const initAuth = () => {
  if (unsubscribe) return; // Prevent duplicate initialization

  unsubscribe = onAuthStateChanged(auth, async (authUser) => {
    try {
      loading.value = true;
      authError.value = null;
      user.value = authUser;

      // Clear previous user data if logging out
      if (!authUser) {
        clearUserProfile();
        return;
      }

      // Fetch user profile from Firestore
      const userDocRef = doc(db, 'users', authUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data() as UserProfile;

        // Update reactive object properties individually to maintain reactivity
        Object.keys(userData).forEach(key => {
          // Use a type assertion to avoid TypeScript error
          (userProfile as any)[key] = userData[key as keyof UserProfile];
        });
      } else {
        console.warn('User document does not exist in Firestore');

        // Set minimal profile from auth data
        userProfile.fullName = authUser.displayName || '';
        userProfile.email = authUser.email || '';
        userProfile.createdAt = new Date();
      }
    } catch (error) {
      console.error('Error during auth state change:', error);
      authError.value = error instanceof Error ? error.message : 'Unknown authentication error';
    } finally {
      loading.value = false;
      initialized.value = true;
    }
  });
};

export function useAuth() {
  // Initialize auth listener on first usage
  onMounted(() => {
    if (!initialized.value && !unsubscribe) {
      initAuth();
    }
  });

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user.value;
  };

  // Get user display name
  const displayName = () => {
    return userProfile.fullName || user.value?.displayName || 'User';
  };

  // Check if user is admin
  const isAdmin = () => {
    return userProfile.admin === true;
  };

  // Check if a specific email is the current user
  const isCurrentUserEmail = (email: string) => {
    return user.value?.email === email;
  };

  // Get user email
  const userEmail = () => {
    return user.value?.email || userProfile.email || '';
  };

  return {
    user,
    userProfile,
    loading,
    initialized,
    authError,
    isAuthenticated,
    displayName,
    isAdmin,
    isCurrentUserEmail,
    userEmail
  };
}