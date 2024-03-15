import { Mulish, Black_Han_Sans, Balsamiq_Sans } from "next/font/google";

export const mulish = Mulish({ subsets: ["latin"] });

export const blackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--black-hans",
});

export const balsamiqSans = Balsamiq_Sans({
  subsets: ["latin"],
  weight: "400",
});
