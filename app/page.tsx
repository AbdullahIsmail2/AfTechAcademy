import CallToAction from "./Components/CallToAction";
import { Features } from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

export default function Home() {
	return (
		<div className="relative pb-64">
			<Hero />
			<Features />
			<CallToAction />
			<Footer />
		</div>
	);
}
