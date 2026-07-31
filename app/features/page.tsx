import { FC } from "react";
import { Metadata, NextPage } from "next";
import { Features } from "@/src/global/Features";
import { Explore } from "@/app/features/_components/Explore";
import { Insight } from "@/app/features/_components/Insight";
import { Connectivity } from "@/app/features/_components/Connectivity";
import Testimonials from "@/src/global/Testimonials";
import FAQSection from "@/src/global/FAQSection";
import { Discover } from "@/app/features/_components/Discover";

export const metadata: Metadata = {
  title: "Features Page",
  description: "This is a Features page",
};

const features: NextPage = () => {
  return (
    <>
      <Features title="Features" heading="Main Features" />
      <Explore />
      <Insight
        name=" Analyze your data insights through comprehensive"
        dis="    Unlock the power of data analysis with our comprehensive platform,
        designed to empower you in dissecting and making sense of your data.
        Dive deep into the sea of information, where our advanced tools and
        intuitive features."
        btn="Explore More"
        imgSrc="/image/insight.jpg"
        Smallimg="/image/insight2.svg"
      />
      <Insight
        name="Fortify your defenses unveiling the power of secure shield"
        dis="Discover unparalleled protection with Secure Shield. This robust defense solution empowers your security infrastructure, fortifying against threats and ensuring a resilient shield for your digital assets"
        btn="Discover More"
        imgSrc="/image/insight2.jpg"
        Smallimg="/image/insight4.svg"
      />
      <Insight
        name=" Elevate your vision expanding horizons with insight reach"
        dis="Open new vistas of understanding with Insight Reach. Elevate your strategic vision as this powerful tool expands your horizons, delivering profound insights that drive informed decisions and propel your goals to new heights"
        btn="
        Get Started"
        imgSrc="/image/insight3.jpg"
        Smallimg="/image/insight4.svg"
      />
      <Connectivity />
      <Testimonials />
      <FAQSection />
      <Discover/>
    </>
  );
};

export default features;
