import Banner from "@/components/Banner";
import CarSection from "@/components/CarSection";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Search from "@/components/Search";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <CarSection/>
      <WhyChooseUs />
      <HowItWorks />
      <Footer/>
    </div>
  );
}
