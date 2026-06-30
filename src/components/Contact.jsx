import { useState } from "react";

function Contact() {
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Message Submitted Successfully");
		setData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<section className="px-6 py-24 lg:px-8" id="contact">
			<div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
						Let’s create
					</p>
					<h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
						Ready to build something remarkable?
					</h2>
					<p className="mt-4 text-lg leading-8 text-slate-400">
						Share your idea and we’ll turn it into a polished experience that
						helps your brand grow.
					</p>
					<div className="mt-8 space-y-3 text-slate-300">
						<p className="transition hover:text-white">✉ hello@pixelcraftstudio.com</p>
						<p className="transition hover:text-white">📍 Based worldwide, available remotely</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					className="space-y-5 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6"
				>
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={data.name}
						onChange={handleChange}
						required
						className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
					/>
					<input
						type="email"
						name="email"
						placeholder="Enter Email"
						value={data.email}
						onChange={handleChange}
						required
						className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
					/>
					<textarea
						name="message"
						rows="5"
						placeholder="Tell us about your project"
						value={data.message}
						onChange={handleChange}
						required
						className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
					/>
					<button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02]">
						Submit Request
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
