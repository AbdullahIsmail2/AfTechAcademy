import React from "react";

export default function page() {
  return (
    <div className="w-[90%] max-w-6xl mx-auto ">
      <h1 className="text-3xl font-black font-sans text-balance tracking-tight sm:text-4xl xl:text-6xl text-center mt-20 mb-16">
        IT Market In 2025
      </h1>
      <section className="flex flex-col gap-4">
        <h3 className="text-3xl">Steady Growth in Tech Jobs</h3>
        <p>
          The tech industry remains one of the fastest-growing sectors.
          According to the Bureau of Labor Statistics, employment in computer
          and information technology occupations is projected to grow 13% from
          2020 to 2030, faster than the average for all occupations. This growth
          translates to about 667,600 new jobs, highlighting the critical need
          for trained IT professionals.
        </p>
      </section>
      <section className="mt-10 flex flex-col gap-4">
        <h3 className="text-3xl">Emerging Technologies</h3>
        <p>Stay ahead of the curve by understanding trends like:</p>
        <ul className="flex flex-col gap-4 list-disc pl-10">
          <li>
            <p className="font-bold">
              Artificial Intelligence and Machine Learning:{" "}
              <span className="font-normal">
                These technologies are reshaping how businesses operate and
                require skilled professionals to implement and manage them.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Cloud Computing:{" "}
              <span className="font-normal">
                As more companies move to cloud solutions, skills in cloud
                infrastructure and security are increasingly valuable.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Cybersecurity: {" "}
              <span className="font-normal">
                With cyber threats on the rise, there is a significant demand
                for cybersecurity experts to safeguard company data.
              </span>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
