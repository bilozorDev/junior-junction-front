'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";

 // This is a client-side component

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if user is not authenticated
    }
  }, [user, router]);

  // If the user is authenticated, render the children (protected content)
  return user ? children : null;
}
