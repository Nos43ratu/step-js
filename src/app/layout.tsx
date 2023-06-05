import classNames from "classnames";
import { Inter, Roboto } from "next/font/google";
import { Header } from "@/feature/header";
import "./styles/globals.css";

const inter = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic-ext"],
});

const robot = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic-ext"],
});

export const metadata = {
  title: "STEP - JS course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={classNames(
          robot.className,
          "flex flex-col w-full h-full bg-grid bg-lg font-inter"
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
