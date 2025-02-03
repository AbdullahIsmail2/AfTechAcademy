import React from "react";
import Testimonial from "../Components/Testimonial";

export default function Reviews() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl font-black font-sans text-balance tracking-tight sm:text-6xl xl:text-7xl text-center mt-20 mb-10">
        Reviews
      </h1>
      <Testimonial text={`Aftech Academy transformed my career! The hands-on approach and real-world projects gave me the confidence to apply for jobs immediately. Thanks to Ahmed's mentorship, I secured a tech role faster than I ever expected.`} name= {'Musa Farah'} />
      <Testimonial text={`Before joining Aftech Academy, I struggled to break into IT. The structured curriculum, job-focused training, and mock interviews prepared me perfectly. I landed my first IT role just weeks after completing the program!`} name= {'Abdullah Yusuf'} />
      <Testimonial text={`Ahmed and the team at Aftech Academy go above and beyond. Not only did I gain the technical skills needed to succeed, but I also learned how to present myself professionally. With their guidance, I negotiated a salary beyond my expectations!`} name= {'Mo Yaseen'}/>
      <Testimonial text={`With the skills I gained, I secured a job as an IT Engineer and, with Ahmed's help, negotiated a significant pay rise`} name= {'Douale Ahmed'} />
    </div>
  );
}
