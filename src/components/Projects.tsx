import { ProjectType, projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
	return (
		<section>
			<h2>Projects</h2>
			<div>
				{projects.map((project, i) => (
					<Project key={i} project={project} />
				))}
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
		<div>
			<Link href={project.view} className="aspect-video overflow-hidden block relative">
				<Image src={project.image} alt="Suraj" fill className="object-cover" />
			</Link>
			<h3>{project.title}</h3>
			<p>{project.desc}</p>
			<Link href={project.github}>Github</Link>
		</div>
	);
};
