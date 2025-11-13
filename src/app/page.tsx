import AboutUs from "@/components/ui/AboutUs";
import Blog from "@/components/ui/Blog";
import Certification from "@/components/ui/Certification";
import ContactForm from "@/components/ui/ContactForm";
import Faqs from "@/components/ui/Faqs";
import Hero from "@/components/ui/Hero";
import SuccessRate from "@/components/ui/SuccessRate";
import Testimonial from "@/components/ui/Testimonial";
import YcbSliderOrWeb from "@/components/ui/YcbSliderOrWeb";

export default function Home() {
  return (
   <div className="overflow-hidden">
   <Hero/>
   <YcbSliderOrWeb/>
   <AboutUs/>
   <Certification/>
   <SuccessRate/>
   <Faqs/>
   <Testimonial/>
   <ContactForm/>
   <Blog/>
   </div>
  );
}
