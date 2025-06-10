import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  User
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './config';

// Address interface
export interface Address {
  type?: string;
  street: string;
  city: string;
  state?: string;
  zip?: string;
  country: string;
}

// User profile interface
export interface UserProfile {
  fullName: string;
  email: string;
  addresses?: Address[];
  country?: string;
  phone?: string;
  createdAt: Date;
  admin?: boolean; // Indicates if the user is an admin
}

// Register a new user with email and password
export const registerUser = async (
  email: string,
  password: string,
  profile: Omit<UserProfile, 'email' | 'createdAt'>
): Promise<User> => {
  try {
    // Create auth user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile with full name
    await updateProfile(user, {
      displayName: profile.fullName
    });

    // Store additional user data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      fullName: profile.fullName,
      email: user.email,
      addresses: profile.addresses || [],
      country: profile.country || '',
      phone: profile.phone || '',
      createdAt: new Date(),
      ...(profile.admin !== undefined ? { admin: profile.admin } : {})
    });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign in an existing user
export const signInUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign out the current user
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Send password reset email
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get the current authenticated user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};