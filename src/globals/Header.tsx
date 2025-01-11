import React from "react";
import Image from "next/image";
import Profile from "../../public/suraj.webp";
import Link from "next/link";

const Header = () => {
	return (
		<header className="p-4 flex justify-between items-center w-full outline">
			{/* profile */}
			<div className="w-8 h-8 rounded-full relative overflow-hidden outline">
				<Link href="/">
					<Image src={Profile} alt="Suraj" fill className="object-cover" />
				</Link>
			</div>
			<div className="flex gap-4 outline">
				{/* links */}
				<ul className="flex gap-4">
					<li>
						<Link href="#projects">Projects</Link>
					</li>
					<li>
						<Link href="#contact">Contact</Link>
					</li>
				</ul>
				{/* dark mode button */}
				<div className="outline">
					<button>Theme</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
