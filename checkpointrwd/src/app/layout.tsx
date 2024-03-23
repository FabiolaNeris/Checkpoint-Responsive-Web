import type { Metadata } from "next";
import Header from "./header/header";
import Footer from "./footer/footer";
import '../../public/css/style.css'
export const metadata: Metadata = {
  title: "Serviços Automotivos",
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
