import React, { FC } from "react";

type Props = {
  name?: string;
};

export const OurTeam: FC<Props> = ({ name }) => (
  <section className="mx-auto max-w-334">
    <div className="flex flex-col items-center justify-center text-center mt-20 ">
      <p className="uppercase border border-gray-700 text-[12px] font-normal w-30 text-center rounded-full">
        members
      </p>
      <h1 className="text-[38px] font-medium leading-14">Meet Our Team</h1>
      <p className="text-sm font-medium leading-5.25">
        Discover the brilliance behind Nexto. Our expert team is a fusion of
        innovators, creators, <br /> and strategists, dedicated to shaping your
        digital success.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-10 mt-20">
      <div className="rounded-2xl overflow-hidden"> 
        <img
          src="/image/member-1.jpg"
          alt="Team member 1"
          className="rounded-sm object-cover"
        />
        <h3 className="text-lg font-medium mt-4 text-center">Ronald Richard</h3>
        <p className="text-gray-400 text-sm text-center">Founder & CEO</p>
      </div>

      <div className="rounded-2xl overflow-hidden">
        <img
          src="/image/member-2.jpg"
          alt="Team member 2"
          className="rounded-sm object-cover cursor-pointer"
        />
        <h3 className="text-lg font-medium mt-4 text-center">Esther Howards </h3>
        <p className="text-gray-400 text-sm text-center">Marketing Manager</p>
      </div>

      <div className="rounded-2xl overflow-hidden">
        <img
          src="/image/member-3.jpg"
          alt="Team member 3"
          className="rounded-sm object-cover"
        />
        <h3 className="text-lg font-medium mt-4 text-center">Cameron Williamson</h3>
        <p className="text-gray-400 text-sm text-center">Team Leader</p>
      </div>

      <div className="rounded-2xl overflow-hidden">
        <img
          src="/image/member-4.jpg"
          alt="Team member 4"
          className="rounded-sm object-cover"
        />
        <h3 className="text-lg font-medium mt-4 text-center">Bessie Cooper</h3>
        <p className="text-gray-400 text-sm text-center">Sales Executive</p>
      </div>
    </div>
  </section>
);
