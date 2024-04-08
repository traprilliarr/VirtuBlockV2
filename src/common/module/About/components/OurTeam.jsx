import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import React from "react";

export default function OurTeam() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 lg:px-10 px-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <H1
              title="Meet the People Behind Our Success"
              className="!text-3xl font-bold tracking-tighter sm:!text-5xl text-[#EEEEEE]  !justify-center"
            />
            <H1
              title="Our team is composed of dedicated professionals who are passionate
            about their work."
              className="max-w-[900px] text-[#EEEEEE] md:!text-xl/relaxed lg:!text-base/relaxed xl:!text-xl/relaxed  !justify-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-center gap-6 mt-8">
          <div className="group">
            <Image
              alt="Team member"
              className="mx-auto max-w-full aspect-[1/1] h-auto overflow-hidden rounded-full object-cover object-center sm:w-full group-hover:scale-105 transition-transform"
              height={200}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={200}
              priority
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg text-[#EEEEEE] font-medium">John Doe</h3>
              <p className="text-neutral-300 ">CEO</p>
            </div>
          </div>
          <div className="group">
            <Image
              alt="Team member"
              className="mx-auto aspect-[1/1] h-auto overflow-hidden rounded-full object-cover object-center sm:w-full group-hover:scale-105 transition-transform"
              height={200}
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={200}
              priority
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg text-[#EEEEEE] font-medium">Jane Smith</h3>
              <p className="text-neutral-300">CTO</p>
            </div>
          </div>
          <div className="group ">
            <Image
              alt="Team member"
              className="mx-auto aspect-[1/1] max-w-full h-auto overflow-hidden rounded-full object-cover object-center sm:w-full group-hover:scale-105 transition-transform"
              height={200}
              src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={200}
              priority
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg text-[#EEEEEE] font-medium">Robert Johnson</h3>
              <p className="text-neutral-300">CFO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
