import { FC } from "react";
import React from "react";
import { Metadata, NextPage } from "next";
import { Resources } from "./_components/Resources";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is a Blog page",
};

const blog: NextPage = () => {
  return (
    <>
    <Resources/>
    </>
  );
};

export default blog;
