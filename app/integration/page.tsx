import { Metadata, NextPage } from "next";
import FAQSection from "@/src/global/FAQSection";
import { Success } from "@/src/global/Success";
import Integration from "@/app/integration/_components/Integration";

export const metadata: Metadata = {
  title: "Integration Page",
  description: "This is a Integration page",
};

const integration: NextPage = () => {
  return (
    <>
      <Integration />
      <FAQSection />
      <Success />
    </>
  );
};

export default  integration;
