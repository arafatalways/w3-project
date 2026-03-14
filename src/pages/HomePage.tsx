import ContactSection from "@/components/modules/contact";
import Course from "@/components/modules/course";
import FAQSection from "@/components/modules/faqSection";
import Hero from "@/components/modules/hero";
import VideoSection from "@/components/modules/videoSection";
import ArticleSection from "@/components/modules/articleSection";
import Academy from "@/components/modules/academy";
import Special from "@/components/modules/special";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Course />
      <Academy />
      <Special />
      <ArticleSection />
      <VideoSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
