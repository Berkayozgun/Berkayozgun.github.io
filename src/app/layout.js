import { Inter } from "next/font/google";
import "./globals.css";
import { data } from "./data/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: data.windowTitle,
  description: data.windowDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
