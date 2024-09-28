import React from "react";
import Image from "next/image";
import myImg from "../DALL·E 2024-09-28 12.09.56 - A sleek, professional background image for a website section, featuring an abstract technology theme with a dark color palette. It should include deep.webp";

export default function Hero() {
	return (
		<div className=" min-h-screen px-6 lg:px-8 flex flex-col justify-center relative text-white border-b-[1px] border-white ">
			<h1 className="absolute top-5 left-5 z-20">AF Tech Academy</h1>

			<Image
				src={myImg}
				alt="Hero Image"
				layout="fill"
				objectFit="cover"
				quality={100}
				className="absolute inset-0 brightness-50 "
			/>

			<section className="pb-10 sm:py-32 lg:py-48 flex flex-col items-start gap-5 z-20">
				<h1 className="text-4xl font-black font-sans text-balance tracking-tight sm:text-6xl xl:text-7xl">
					Learn The Fundamentals Of IT. Break Into Tech.
				</h1>
				<h3 className="text-balance sm:text-xl font-serif relative">
					Master the fundamentals of IT and launch your tech career with our
					comprehensive course.
				</h3>
				<a
					href="https://docs.google.com/forms/d/1cDMrWzQDD5Pya_8ww0b9ua7aS3UP7oEIGbcQBk0NFBQ/edit"
					target="_blank"
					className="hover:scale-[102%] transition-transform bg-blue-800 text-lg text-white rounded-sm px-4 py-2"
				>
					Enroll Now
				</a>

				<div className="text-sm">
					<span className="pr-4">⭐⭐⭐⭐⭐</span>
					<span className="border-l border-black px-4">Easy Learning</span>
					<span className="border-l border-black pl-4">Career Growth</span>
				</div>
				<span className="flex flex-col gap-2 text-md max-w-xl">
					<span className="italic ">
						&ldquo;This course helped me transition into a Service Delivery
						Manager role, where I now manage key IT projects.&rdquo;
					</span>
					<span>&mdash; Abdi Musa, AF Academy Graduate</span>
				</span>
			</section>
		</div>
	);
}
