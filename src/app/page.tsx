import AboutUs from "@/components/ui/AboutUs";
import Certification from "@/components/ui/Certification";
import Faqs from "@/components/ui/Faqs";
import Hero from "@/components/ui/Hero";
import SuccessRate from "@/components/ui/SuccessRate";
import Testimonial from "@/components/ui/Testimonial";
import YcbSliderOrWeb from "@/components/ui/YcbSliderOrWeb";

export default function Home() {
  return (
   <>
   <Hero/>
   <YcbSliderOrWeb/>
   <AboutUs/>
   <Certification/>
   <SuccessRate/>
   <Faqs/>
   <Testimonial/>
   </>
  );
}
