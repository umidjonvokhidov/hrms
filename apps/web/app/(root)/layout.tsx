import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@workspace/ui/components/sonner";

const RootPageLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Providers>
      <Navbar />
      <main className="w-full pt-[100px]">{children}</main>
      <Footer />
      <Toaster />
    </Providers>
  );
};
export default RootPageLayout;
