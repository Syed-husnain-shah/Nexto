import { FC } from "react";
import React from "react";
import { Metadata, NextPage } from "next";
import { Resources } from "./_components/Resources";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is a About page",
};

const blog: NextPage = () => {
  return (
    <>
    <Resources/>
    </>
  );
};

export default blog;
