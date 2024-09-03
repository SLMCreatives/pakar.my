import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TrainerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 z-30 h-fit w-full bg-black ring-2">
        <div className="flex flex-row items-center justify-center">
          <Header />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
}
