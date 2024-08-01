
import { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./Provider";
import { ThemeProvider } from "next-themes";

const league_spartan = League_Spartan({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Learning Home | RS LMS",
  description: "E-Learning is platform for student to learn and get help form teachers",
  keywords: "Programming, Redux, Next js, Javascript"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={league_spartan.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className={`flex flex-col min-h-[calc(100vh-3.5rem-1px)] bg-gradient-to-r from-green-50 to-green-300`}>
              <div className='flex-1 flex flex-col h-full'>
                {children}
              </div>
              <Footer />
              <Toaster />
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
