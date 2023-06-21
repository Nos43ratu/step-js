import classNames from "classnames";
import { Header } from "@/feature/header";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={classNames(
          "flex font-sans flex-col w-full h-full bg-grid bg-lg space-y-2"
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
