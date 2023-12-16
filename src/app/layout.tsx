import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GameContextProvider from "./context/game-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Who wants to be millionaire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameContextProvider>{children}</GameContextProvider>
      </body>
    </html>
  );
}
