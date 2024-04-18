import "./globals.css";
import Header from "@/components/design/Header";
import {Roboto} from 'next/font/google'
import Providers from "./Providers";
import Navbar from "@/components/design/Navbar";
import SearchBox from "@/components/SearchBox";

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto'
})

export const metadata = {
  title: "Hamster",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_init.variable}>
        <Providers>
          <Header/>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
