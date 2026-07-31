import { Metadata, NextPage } from "next";
import { ContactUs } from "@/app/contact/_components/ContactUs";
import FAQSection from "@/src/global/FAQSection";
import { Success } from "@/src/global/Success";


export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is a Contact page",
};

const contact: NextPage = () => {
  return (
    <>
      <ContactUs/>
      <FAQSection />
      <Success />
    </>
  );
};

export default  contact;