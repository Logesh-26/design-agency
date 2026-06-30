function Navbar() {
	const links = ["Home", "Services", "Portfolio", "Contact"];

	return (
		<nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
				<a href="#hero" className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30 animate-float">
						<span className="text-lg font-black text-white">P</span>
					</div>
					<span className="text-xl font-semibold tracking-wide text-white">
						PixelCraft
					</span>
				</a>

				<ul className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
					{links.map((link) => {
						const href = `#${link.toLowerCase()}`;
						return (
							<li key={link}>
								<a href={href} className="nav-link transition hover:text-white focus-visible:text-white">
									{link}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
