import { SignIn } from "@clerk/nextjs";
import Image from "next/image"; // Import Next.js Image component for optimized image rendering
import RiseLogo from "/public/RiseLogo.svg"; // Import the logo from the public folder

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {/* Add the logo above the SignIn component */}
      <Image
        src={RiseLogo}
        alt="Rise Logo"
        width={200}
        height={200}
        className="mb-6"
      />

      {/* SignIn component with theme color */}
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#44b4f1", // Theme color for primary elements
          },
          elements: {
            card: "shadow-lg border border-gray-200 rounded-lg", // Add styling to the sign-in card
            formButtonPrimary: "bg-[#44b4f1] hover:bg-[#3aa1d8] text-white", // Style primary buttons
          },
        }}
      />
    </div>
  );
}