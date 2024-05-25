import { Footer } from "./footer";
import { Header } from "./header";
import { ClerkProvider } from "@clerk/nextjs";
type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </ClerkProvider>
  );
};
export default MarketingLayout;
