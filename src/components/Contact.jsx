import { contact } from "@/data/data";
import Link from "next/link";

const Contact = () => {
	return (
		<section>
			<h2>Let's Connect</h2>
			<ul>
				{Object.entries(contact).map(([key, value], i) => (
					<li key={i}>
						<Link href={value}>{key}</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Contact;
