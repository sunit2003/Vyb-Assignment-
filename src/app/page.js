import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OptionNav from "./components/OptionNav";
// import StackedCards from "./components/StackedCards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OptionNav />
      {/* <StackedCards /> */}
    </div>
  );
}
