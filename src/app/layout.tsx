import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/globals/Header";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Suraj's Portfolio",
	description:
		"Suraj is a Fullstack Web Developer who can transform your ideas into a working website or webapp that is ready for your customers.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
