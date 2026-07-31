import { Metadata, NextPage } from "next";
import FAQSection from "@/src/global/FAQSection";
import Testimonials from "@/src/global/Testimonials";
import { Packages } from "@/app/pricing/_components/Packages";
import { Overview } from "@/app/pricing/_components/Overview";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is a Pricing page",
};

const integration: NextPage = () => {
  return (
    <>
      <Packages/>
      <Overview/>
      <Testimonials/>  
      <FAQSection />
    </>
  );
};

export default  integration;
