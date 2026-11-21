"use client";

import Link from "next/link";

export const navigationItems = [
  "Início",
  "Projetos",
  "Sobre",
  "Contato",
  "Blog",
] as const;

const navigationRoutes: Record<(typeof navigationItems)[number], string> = {
  "Início": "/inicio",
  Projetos: "/projetos",
  Sobre: "/sobre",
  Contato: "/contato",
  Blog: "/blog",
};

interface NavigationLinksProps {
  onNavigate?: () => void;
}

export function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  return navigationItems.map((item) => {
    return (
      <Link
        key={item}
        href={navigationRoutes[item]}
        onClick={onNavigate}
      >
        {item}
      </Link>
    );
  });
}
