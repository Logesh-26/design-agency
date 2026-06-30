import { FaCode, FaPaintBrush, FaLaptopCode, FaBullhorn } from "react-icons/fa";

const services = [
	{
		id: 1,
		title: "UI/UX Design",
		icon: <FaPaintBrush size={38} />,
		desc: "Modern, user-centered interfaces that feel intuitive and premium.",
	},
	{
		id: 2,
		title: "Web Development",
		icon: <FaLaptopCode size={38} />,
		desc: "Responsive React experiences engineered for speed and clarity.",
	},
	{
		id: 3,
		title: "Branding",
		icon: <FaCode size={38} />,
		desc: "Cohesive visual systems that give your brand a memorable voice.",
	},
	{
		id: 4,
		title: "Digital Marketing",
		icon: <FaBullhorn size={38} />,
		desc: "Launch campaigns that connect your story to growing audiences.",
	},
];

function Services() {
	return (
		<section className="px-6 py-24 lg:px-8" id="services">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center">
					<h2 className="section-title text-4xl font-bold text-white sm:text-5xl">
						Our Services
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
						Every engagement is shaped around clarity, quality, and momentum.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
					{services.map((item) => (
						<div
							key={item.id}
							className="group rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:bg-slate-800/80"
						>
							<div className="inline-flex rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 p-4 text-cyan-300 transition group-hover:scale-110">
								{item.icon}
							</div>
							<h3 className="mt-6 text-2xl font-semibold text-white">
								{item.title}
							</h3>
							<p className="mt-3 leading-7 text-slate-400">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
