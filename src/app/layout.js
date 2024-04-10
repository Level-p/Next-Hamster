import "./globals.css";
import Header from "@/components/Header";
import {Roboto} from 'next/font/google'
import Providers from "./Providers";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
