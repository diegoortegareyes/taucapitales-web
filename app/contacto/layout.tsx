import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Tau Servicios Empresas",
  description:
    "Completa el formulario y Pablo Alvarez te contactará a la brevedad. Asesoría en factoring, contabilidad y gestión financiera para tu pyme.",
  alternates: { canonical: "https://www.taucapitales.cl/contacto" },
  openGraph: {
    title: "Contacto | Tau Servicios Empresas",
    description:
      "Conversemos sobre las necesidades financieras y de gestión de tu empresa.",
    url: "https://www.taucapitales.cl/contacto",
    siteName: "Tau Servicios Empresas",
    locale: "es_CL",
    type: "website",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
