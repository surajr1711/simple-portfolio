import Image from "next/image";
import Profile from "../../public/suraj.webp";
import { skills } from "@/data/data";

const Hero = () => {
	return (
		<section>
			<h1 className="font-bold ">Hi, I'm Suraj.</h1>
			<p>
				I’m a web development professional. I transform ideas into a working digital product that is ready for your
				customers.
			</p>
			<p>
				If you want a website that you can be proud of or a web application that can deliver the features that you
				imagine offering your customers, I’ll help you make it happen.
			</p>
			<button>Contact</button>
			<div className="aspect-square relative">
				<Image src={Profile} alt="Suraj" fill className="object-cover object-center" />
			</div>
			<div>
				{skills.web.join(", ")}
				<br />
				{skills.creative.join(", ")}
			</div>
		</section>
	);
};

export default Hero;
