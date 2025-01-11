import React from "react";
import Image from "next/image";
import Profile from "../../public/suraj.webp";
import Link from "next/link";
import { navlinks } from "@/data/data";
// import { Button } from "@/components/ui/button";
// import { LucideSun } from "lucide-react";

const Header = () => {
	return (
		<header className=" py-8 ">
			<div className=" container flex justify-between items-center">
				{/* profile */}
				<div className="w-10 h-10 rounded-full relative overflow-hidden">
					<Link href="/">
						<Image src={Profile} alt="Suraj" fill className="object-cover" />
					</Link>
				</div>

				<div className="flex gap-8 items-center">
					{/* links */}
					<ul className="flex gap-4">
						{navlinks
							.filter((link) => link.label !== "Home")
							.map((link, i) => (
								<li key={i} className="font-semibold">
									<Link href={link.url}>{link.label}</Link>
								</li>
							))}
					</ul>
					{/* dark mode button */}
					{/* <div className="">
						<Button variant="outline" size="icon">
							<LucideSun />
						</Button>
					</div> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
