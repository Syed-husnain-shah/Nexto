import { FC } from "react";
import React from "react";
import { Metadata, NextPage } from "next";
import { About } from "./components/About";
import { OurTeam } from "./components/OurTeam";
import { Statistical } from "./components/Statistical";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is a About page",
};

const blog: NextPage = () => {
  return (
    <>
    <About/>
    <OurTeam/>
    <Statistical/>
    </>
  );
};

export default blog;
