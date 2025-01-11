import { ProjectType, projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LucideArrowRight } from "lucide-react";

const Projects = () => {
	return (
		<section id="projects" className="mb-20">
			<div className="container">
				{/* header */}
				<header className="lg:max-w-screen-sm lg:mx-auto border-t border-slate-300 pt-12 pb-8">
					<h2 className="font-semibold text-3xl mb-2">Projects</h2>
				</header>

				{/* content */}
				<div className="grid gap-8 md:grid-cols-2">
					{projects.map((project, i) => (
						<Project key={i} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;

interface ProjectProps {
	project: ProjectType;
}
const Project = ({ project }: ProjectProps) => {
	return (
		<div className="p-4 bg-slate-100 rounded-lg lg:p-6 flex flex-col justify-between gap-6">
			<div className="">
				<Link
					href={project.view}
					target="_blank"
					rel="noopener noreferrer"
					className="aspect-video overflow-hidden rounded-lg block relative mb-4"
				>
					<Image src={project.image} alt="Suraj" fill className="object-cover" />
				</Link>
				<h3 className="font-semibold text-xl mb-2">{project.title}</h3>
				<p className="text-md text-slate-600 text-pretty">{project.desc}</p>
			</div>

			<div className="flex justify-between">
				<Button asChild size="sm" variant="secondary" className="bg-slate-300">
					<Link href={project.view} target="_blank" rel="noopener noreferrer">
						View project <LucideArrowRight />
					</Link>
				</Button>
				<Button asChild size="sm" variant="ghost">
					<Link href={project.github} target="_blank" rel="noopener noreferrer">
						Github
					</Link>
				</Button>
			</div>
		</div>
	);
};
