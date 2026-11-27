import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Projects from "@/page/project/project";

export const metadata = {
  title: "Projetos | Geraldo",
  description: "Conheça os projetos desenvolvidos por Geraldo.",
};

export default function ProjetosPage() {
  return (
    <div className="page-shell">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}
