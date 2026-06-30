import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function App() {
	return (
		<div className="min-h-screen bg-transparent text-slate-100">
			<Navbar />
			<Hero />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}
