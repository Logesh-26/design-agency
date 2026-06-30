const projects = [
	{
		id: 1,
		title: "E-Commerce Website",
		image: "/e-commerce-image.png",
		desc: "Seamless shopping, intuitive navigation, and conversion-focused design.",
	},
	{
		id: 2,
		title: "Restaurant Website",
		image: "/restaurant-image.png",
		desc: "Elegant menus, effortless reservations, and memorable dining experiences.",
	},
	{
		id: 3,
		title: "Travel Landing Page",
		image: "/travel-landing-page-image.png",
		desc: "Stunning visuals, effortless booking, and wanderlust-driven design.",
	},
	{
		id: 4,
		title: "Fitness App",
		image: "/fitness-image.png",
		desc: "Smart tracking, energetic visuals, and seamless user engagement.",
	},
	{
		id: 5,
		title: "Hotel Booking Platform",
		image: "/hotel-booking-image.png",
		desc: "Premium hospitality, intuitive search, and effortless travel planning.",
	},
	{
		id: 6,
		title: "Interior Design Website",
		image: "/interior-design-image.png",
		desc: "Minimal elegance, curated spaces, and immersive visual experiences.",
	},
];

function Portfolio() {
	return (
		<section className="px-6 py-24 lg:px-8" id="portfolio">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 text-center">
					<h2 className="nav-link text-4xl font-bold text-white sm:text-5xl">
						Selected Work
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
						A few recent launches built to feel elevated, fast, and
						unforgettable.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
						>
							<div className="relative overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="h-64 w-full object-fit lg:object-content transition duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-white">
									{project.title}
								</h3>
								<p className="mt-2 text-sm text-slate-400">
									{project.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
