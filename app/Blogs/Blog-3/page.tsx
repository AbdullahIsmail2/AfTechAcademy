import React from "react";
import Image from "next/image";
import table from "../../table.png";
export default function Page3() {
  return (
    <div className="w-[90%] max-w-6xl mx-auto ">
      <h1 className="text-3xl font-black font-sans text-balance tracking-tight sm:text-4xl xl:text-6xl text-center mt-20 mb-16">
        Why Choose an IT Bootcamp?
      </h1>
      <section className="flex flex-col gap-4">
        <h3 className="text-3xl">Accelerated Learning</h3>
        <p>
          Unlike traditional education paths that can take years, an IT bootcamp
          is designed to equip you with the skills you need in a matter of
          months. Here’s how bootcamps stack up against other education options:
        </p>
        <Image src={table} alt="table" className="self-center mt-5" />
      </section>

      <section className="mt-20 flex flex-col gap-3">
        <h3 className="text-3xl">Mentorship and Career Support</h3>
        <p>
          Bootcamps often provide mentorship from industry experts and career
          services, helping you navigate job searches, interviews, and
          networking.
        </p>
      </section>
    </div>
  );
}
