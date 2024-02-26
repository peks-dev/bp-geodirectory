import Navbar from "@/ui/navbar/navbar";
import "@/ui/globals.css";
import styles from "./page.module.css";
import "@/ui/buttons.css";
import { mulish, blackHanSans } from "@/ui/fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Basket Places</title>
      </head>
      <body
        className={`${mulish.className} antialiased ${blackHanSans.variable}`}
      >
        <main className={styles.main}>{children}</main>

        <Navbar />
      </body>
    </html>
  );
}
