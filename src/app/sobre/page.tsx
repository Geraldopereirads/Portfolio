import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Sobre from "@/page/sobre/sobre";

export const metadata: Metadata = {
  title: "Sobre | Geraldo",
  description: "Conheça a trajetória e os conhecimentos de Geraldo.",
};

export default function SobrePage() {
  return (
    <div className="page-shell">
      <Header />
      <Sobre />
      <Footer />
    </div>
  );
}
