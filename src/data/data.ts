import { StaticImport } from "next/dist/shared/lib/get-img-props";
import qitchen from "../../public/qitchen.webp";
import bottle from "../../public/bottle.webp";

export const navlinks = [
	{
		label: "Home",
		url: "/",
	},
	{
		label: "Projects",
		url: "#projects",
	},
	{
		label: "Contact",
		url: "#contact",
	},
];

export const skills = {
	web: ["React/Next", "Node", "MongoDB", "Tailwind", "Styled Components", "Sass", "React-Three-Fibre", "GSAP"],
	creative: ["Figma", "Illustrator", "Blender", "Webflow", "Wordpress"],
};

export type ProjectType = {
	title: string;
	image: StaticImport;
	desc: string;
	view: string;
	github: string;
};
export const projects: ProjectType[] = [
	{
		title: "Qitchen Sushi",
		image: qitchen,
		desc: "Qitchen is a restaurant website built to demonstrate front-end development and production optimization capabilities.",
		view: "https://qitchen-restaurant.vercel.app",
		github: "https://github.com/surajr1711/qitchen-restaurant",
	},
	{
		title: "3D Waterbottle Demo",
		image: bottle,
		desc: "A demonstration of the ability to create 3d models in Blender and provide interactions with it on the web.",
		view: "https://nextjs-r3f-bottle.vercel.app/",
		github: "https://github.com/surajr1711/nextjs-r3f-bottle",
	},
];

export const contact = [
	{ label: "Email", prefix: "mailto:", url: "surajr1711@gmail.com" },
	{ label: "Linkedin", prefix: "https://www.linkedin.com/", url: "in/surajr1711" },
	{ label: "Github", prefix: "https://github.com/", url: "surajr1711" },
];
