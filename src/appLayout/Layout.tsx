import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <section className="font-raleway font-medium text-sm max-w-[1440px] mx-auto w-full bg-layoutBg min-h-screen">
      <div className="bg-mainBg px-4 md:px-12 pt-5 max-w-full md:w-[80%] mx-auto text-white">
        <Navbar />
        <main className="py-3">
          {children}
        </main>
         <Footer /> 
      </div>
    </section>
  );
};

export default Layout;
