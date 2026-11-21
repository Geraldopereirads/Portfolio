import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HomePage from "@/page/home/home";

export default function InicioPage() {
  return (
    <div className="page-shell">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
