import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MenuCourseAnimation, { Course } from "@/components/MenuCourseAnimation";
import SignatureDishes from "@/components/SignatureDishes";
import UpcomingEvents from "@/components/UpcomingEvents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const courses: Course[] = [
  {
    kicker: "Appetizer",
    title: "Seared Scallops",
    description: "Diver scallops seared to perfection over oak coals, finished with a golden yuzu brown butter and micro-cilantro.",
    image: "/images/plate-appetizer.png",
  },
  {
    kicker: "Main Course",
    title: "Dry-Aged Ribeye",
    description: "45-day dry-aged bone-in ribeye, kissed by white oak embers and crowned with roasted garlic bone-marrow butter.",
    image: "/images/plate-main.png",
  },
  {
    kicker: "Side Dish",
    title: "Truffle Pommes Purée",
    description: "Silky, slow-churned potatoes folded with French butter, fresh chives, and shaved black winter truffle.",
    image: "/images/plate-side.png",
  },
  {
    kicker: "Dessert",
    title: "Dark Lava Cacao",
    description: "Warm single-origin dark chocolate center, Madagascan vanilla bean gelato, and 24k gold leaf.",
    image: "/images/plate-dessert.png",
  },
];

export default function Home() {
  return (
    <main className="w-full relative">
      <Navbar />
      <Hero />
      <OurStory />
      <MenuCourseAnimation courses={courses} />
      <SignatureDishes />
      <UpcomingEvents />
      <Contact />
      <Footer />
    </main>
  );
}
