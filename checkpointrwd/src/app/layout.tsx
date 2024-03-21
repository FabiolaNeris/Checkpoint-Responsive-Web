import type { Metadata } from "next";
import Header from "./header/header";
import Footer from "./footer/footer";

export const metadata: Metadata = {
  title: "Thaidi Racing | Automecânica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
