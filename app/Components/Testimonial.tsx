import React from "react";

type Props = {
	text: string;
	name: string;
}

export default function Testimonial({text, name} : Props) {
	return (
		<div className="flex flex-col bg-slate-900 w-[90%] max-w-7xl m-auto rounded-3xl text-white gap-6 py-16 mb-20 lg:py-32">
			<p className="mx-auto text-xl font-bold font-sans leading-7 text-center md:leading-10 md:text-3xl text-shadow-sm px-10">
      &ldquo;{text}&rdquo;
			</p>
			<span className="text-center md:text-lg">{name}</span>
		</div>
	);
}
