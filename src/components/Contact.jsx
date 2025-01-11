import { contact } from "@/data/data";
import Link from "next/link";

const Contact = () => {
	return (
		<section id="contact" className="pb-8">
			<div className="container">
				<div className="lg:max-w-screen-sm lg:mx-auto ">
					{/* header */}
					<header className="border-t border-slate-300 pt-12 pb-8">
						<h2 className="font-semibold text-3xl mb-2">Let's connect</h2>
					</header>

					{/* content */}
					<ul className="grid grid-cols-2 gap-4">
						{contact.map((item, i) => (
							<li key={i}>
								<h3 className="font-semibold text-xl mb-1">{item.label}</h3>
								<Link
									href={`${item.prefix}${item.url}`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-slate-600"
								>
									{item.url}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Contact;
