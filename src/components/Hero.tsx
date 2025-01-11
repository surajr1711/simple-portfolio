// import Image from "next/image";
// import Profile from "../../public/suraj.webp";
// import { skills } from "@/data/data";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="py-16">
			<div className="container">
				{/* <div className="container flex flex-col gap-8 lg:flex-row lg:justify-between"> */}
				{/* text content */}
				<header className="lg:max-w-screen-sm lg:mx-auto">
					<h1 className="font-semibold text-4xl mb-2">Hi, I'm Suraj.</h1>

					<p className="text-2xl text-slate-500 mb-4 text-pretty">
						I’m a web development professional. I transform ideas into working digital products for the web.
					</p>
					<p className="text-xl text-pretty mb-6">
						If you want a website that you can be proud of or a web application that can deliver the features that you
						imagine offering your customers, I’ll help you make it happen.
					</p>
					<Button size="lg" asChild>
						<Link href="#contact">Let's talk</Link>
					</Button>
				</header>

				{/* photo */}
				{/* <div className="aspect-square relative max-w-80 rounded-md overflow-hidden">
					<Image src={Profile} alt="Suraj" fill className="object-cover object-center" />
				</div> */}
				{/* <div>
					{skills.web.join(", ")}
					<br />
					{skills.creative.join(", ")}
				</div> */}
			</div>
		</section>
	);
};

export default Hero;
