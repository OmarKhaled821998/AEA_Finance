import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-tl from-[#94849a] via-[#8a619e] to-[#5e396d] text-[#2c4085]">
{/* Left Section (Form) */}
      <div className="h-full flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center space-y-6">
          <h1 className="font-extrabold text-4xl lg:text-5xl text-[#E6D8FA] drop-shadow-md">
            Welcome Back!
          </h1>
          <p className="text-lg text-[#C9B6F4]">
            Log in or create an account to access your dashboard.
          </p>
        </div>

        <div className="flex items-center justify-center mt-10 w-full max-w-md">
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-purple-300" />
          </ClerkLoading>
        </div>
      </div>

      {/* Right Section (Logo Display) */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10">
          <Image
            src="/logo.svg" // Ensure this path is correct
            alt="AEA New Finance Logo"
            width={200}
            height={200}
            className="rounded-lg drop-shadow-[0_0_20px_rgba(207,141,255,0.6)]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#6D3EFF33] to-transparent blur-3xl opacity-60 z-0"></div>
      </div>
    </div>
  );
}
