import { NextPage } from "next";
import { Products }  from "./Products";
import { Features } from "../../global/Features";
import { Mastering } from "./Mastering";
import { Catalyzing } from "./Catalyzing";
import { Amazing } from "./Amazing";
import { Performance } from "./Performance"
import Testimonials from "../../global/Testimonials";
import { Success } from "../../global/Success";
import { HomeSection } from "./HereSection";
import { Blog } from "../../global/Blog";
import { About } from "../../../app/about/components/About";


function index() {
  return (
    <>
      <HomeSection />
      <About />
      <Products />
      <Features title="PRO TOOLS" heading="Powerful Features" para="Explore the power of nexto with these cutting-edge features designed for seamless collaboration, advanced analytics, and unmatched productivity." />
      <Mastering />
      <Catalyzing />
      <Amazing />
      <Performance />
      <Blog />
      <Testimonials />
      <Success />
    </>
  );
}

export default index;