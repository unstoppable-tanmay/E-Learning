import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SessionWrapper from "@/providers/NextAuthProvider";
import Sidebar from "@/components/common/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AuthChecker from "@/providers/AuthCheckers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <AuthChecker>
            <main className="w-screen h-screen bg-white flex items-center">
              <Sidebar />
              {children}
            </main>
          </AuthChecker>
        </SessionWrapper>
      </body>
    </html>
  );
}
