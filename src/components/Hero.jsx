function Hero() {
	return (
		<section
			id="hero"
			className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
		>
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(217,70,239,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.25),_transparent_28%)]" />
			<div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
			<div className="absolute bottom-16 right-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl animate-float-delay" />

			<div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="text-center lg:text-left">
					<span className="inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 shadow-lg shadow-fuchsia-500/10">
						✦ Creative Digital Studio
					</span>
					<h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
						Designing bold digital experiences.
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:mx-0 lg:text-xl">
						We blend strategy, storytelling, and cutting-edge UI to launch
						brands that feel premium from the first click.
					</p>

					<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
						<a
							href="#portfolio"
							className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02]"
						>
							Explore Our Work
						</a>
						<a
							href="#contact"
							className="rounded-full border border-white/15 bg-white/10 px-7 py-3 text-center font-semibold text-slate-100 backdrop-blur transition hover:border-cyan-400/50 hover:bg-white/15"
						>
							Book a Call
						</a>
					</div>

					<div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 lg:justify-start">
						<span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2">
							⚡ Fast launches
						</span>
						<span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2">
							🎨 Modern visuals
						</span>
						<span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2">
							📈 Conversion-first
						</span>
					</div>
				</div>

				<div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
					<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
							Launch-ready
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-white">
							A polished experience from concept to code.
						</h2>
						<div className="mt-6 space-y-4">
							{[
								[
									"Strategy & branding",
									"We shape a memorable identity that stands out.",
								],
								[
									"Responsive design",
									"Every screen feels seamless and premium.",
								],
								["Performance tuned", "Fast, elegant, and built to convert."],
							].map(([title, desc]) => (
								<div
									key={title}
									className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:scale-105 transition-transform duation-500 ease-in"
								>
									<h3 className="font-semibold text-white">{title}</h3>
									<p className="mt-1 text-sm text-slate-400">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
