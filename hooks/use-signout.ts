"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import router from "next/router";
import { toast } from "sonner";

export function useSignOut() {
    const router = useRouter();
    const handleSignout = async function signOut() {
          await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
          toast.success("Successfully logged out");
        },
        onError: () => {
            toast.error("Faild logging out");
        }
      },
    });
}

return handleSignout;
}