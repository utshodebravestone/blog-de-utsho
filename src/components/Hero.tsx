import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src={"/utsho-de-bravestone.png"}
        width={200}
        height={200}
        alt={"utsho de bravestone"}
        priority={true}
        className="mb-3 border-4 border-slate-800 rounded-full"
      />
      <h1 className="text-3xl font-medium">👋 hello there 👋</h1>
      <h3 className="text-xl font-light">
        this is <span className="font-bold">utsho</span> and i welcome you all
        to my blog
      </h3>
    </section>
  );
}
