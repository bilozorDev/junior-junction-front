import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PeopleFeed from "./components/PeopleFeed";
import SectionHeading from "./components/SectionHeading";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SectionHeading
        headline="Talented Developers, Ready to Help — For Free"
        desc="These skilled junior developers are excited to offer their services at
          no cost. Explore their profiles to find the perfect fit for your tech
          needs — and support the next generation of digital experts."
      />
      <PeopleFeed />
    </>
  );
}
