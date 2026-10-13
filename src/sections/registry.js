import HeroOrbit from "./HeroOrbit";
import About from "./About";
import CardGrid from "./CardGrid";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Schedule from "./Schedule";
import Pricing from "./Pricing";
import Gallery from "./Gallery";
import Contact from "./Contact";

// data te "type" -> component. Notun section type add korte ekhane ekta line add korun.
export const registry = {
  heroOrbit: HeroOrbit, about: About, cards: CardGrid, testimonials: Testimonials,
  faq: Faq, schedule: Schedule, pricing: Pricing, gallery: Gallery, contact: Contact,
};
