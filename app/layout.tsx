import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
    title: "Daniel Aguila",
    description: "Embedded and systems software projects by Daniel Aguila",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${archivo.variable} ${plexMono.variable} h-full font-sans antialiased`}>
        <body className="flex min-h-full flex-col">
        <nav className="mx-auto flex w-full max-w-3xl items-baseline justify-between px-6 py-8">
            <Link href="/" className="text-lg font-semibold font-stretch-expanded hover:text-copper">
                Daniel Aguila
            </Link>
            <div className="flex gap-6 text-tin">
                <Link href="/projects" className="hover:text-silk">Projects</Link>
                <Link href="/about" className="hover:text-silk">About</Link>
                <Link href="/contact" className="hover:text-silk">Contact</Link>
            </div>
        </nav>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24">{children}</main>
        </body>
        </html>
    );
}