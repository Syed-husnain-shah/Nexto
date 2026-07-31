import { Metadata } from "next";
import HomePage from "@/src/components/home";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is a home page",
};

const page = () => (
  <>
    <HomePage/>
  </>
);

export default page;