import CallToAction from "./Components/CallToAction";
import { Features } from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Testimonial from "./Components/Testimonial";

export default function Home() {
	return (
		<div className="relative pb-64">
			<Hero />
			<Features />
			<Testimonial />
			<CallToAction />
			<Footer />
		</div>
	);
}
