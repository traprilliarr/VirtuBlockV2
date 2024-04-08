import { Sora } from "next/font/google";
import "../common/style/globals.css";
import Navbar from "@/common/component/navbar/Navbar";
import { LenisProvider } from "@/common/component/element/LenisProvider";
import Footer from "@/common/module/Footer/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "VirtuBlock",
  description: "Intuitive Crypto Asset Management",
  icons: "/Aset/Logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className}`}>
        
        {/* <LenisProvider> */}
          <div className="flex justify-center items-center">
            <Navbar />
          </div>
          {children}
          <div className="flex justify-center items-center">
            <Footer />
          </div>
        {/* </LenisProvider> */}
      </body>
    </html>
  );
}
