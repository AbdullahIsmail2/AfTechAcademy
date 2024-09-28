import React from "react";
import Image from "next/image";
import myImg from "../it4.webp";
import myImg2 from "../it5.webp";
import myImg3 from "../it6.webp";

export function Features() {
	return (
		<div className="min-h-screen mt-40">
			<h5 className="text-center text-4xl font-black font-sans sm:text-4xl lg:text-5xl px-2 ">
				IT Course For Beginners
			</h5>
			<h6 className="text-center mt-4 sm:mt-6 text-lg sm:text-xl leading-8 font-serif text-type-800 text-balance px-4 lg:px-0 mb-20 ">
				Master the basics, join IT helpdesk, and kickstart your tech journey.
			</h6>
			<section className="flex flex-col mt-10 px-10 gap-24 md:gap-8 lg:gap-4 xl:gap-0">
				<div className="flex flex-col gap-5 items-center md:flex-row md:gap-10 flex-1 ">
					<div className="flex flex-col lg:gap-1 xl:gap-6 text-center md:w-1/2 md:text-left md:pl-3 xl:pl-12 2xl:pl-16 triplexl:pl-24  ">
						<h6 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-type-90 relative">
							Master IT Fundementals
						</h6>
						<p className="mt-4 font-serif leading-relaxed text-type-700 text-base sm:text-lg max-w-[600px]">
							Our course covers the essential IT knowledge you need to excel in
							your tech career. From understanding how computer systems work to
							troubleshooting and cybersecurity, this course will give you the
							tools to succeed.
						</p>
						<ul className="hidden list-disc pl-5 mt-5 lg:flex flex-col gap-3">
							<li className="">
								<p className="font-semibold">
									Learn IT From Scratch{" "}
									<span className="font-normal inline">
										&mdash; No prior experience needed
									</span>
								</p>
							</li>
							<li className="">
								<p className="font-semibold">
									Real-World Skills{" "}
									<span className="font-normal inline">
										&mdash; Gain practical skills that are in high demand in the
										job market.
									</span>
								</p>
							</li>
							<li className="">
								<p className="font-semibold">
									Hands-On Training{" "}
									<span className="font-normal inline">
										&mdash; Our step-by-step approach helps you apply IT
										concepts to real-life scenarios.
									</span>
								</p>
							</li>
						</ul>
					</div>
					<div className="relative md:w-1/2 h-full xs:p-10 sm:p-20 md:p-6 lg:p-12 xl:p-16 2xl:p-20 triplexl:p-24 sm:mt-[-25px] md:mt-0">
						<Image
							src={myImg}
							alt="Image"
							// layout="responsive"
							objectFit="contain"
							quality={100}
							className="z-20 rounded-[30px]"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-5 items-center md:flex-row-reverse md:gap-10 flex-1 ">
					<div className="flex flex-col lg:gap-1 xl:gap-6 text-center md:w-1/2 md:text-left md:pl-3 xl:pl-12 2xl:pl-16 triplexl:pl-24  ">
						<h6 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-type-90">
							Why Choose AF Tech Academy
						</h6>
						<p className="mt-4 font-serif leading-relaxed text-type-700 text-base sm:text-lg max-w-[600px]">
							At AF-Tech Academy, we provide the skills and support needed to
							break into the IT industry. Our graduates have gone on to secure
							roles such as Network Engineers, IT Engineers, Service Delivery
							Managers, and Service Desk Analysts.
						</p>
						<ul className="hidden list-disc pl-5 mt-5 lg:flex flex-col gap-3">
							<li className="">
								<p className="font-semibold">
									Job-Ready Curriculum{" "}
									<span className="font-normal inline">
										&mdash;Learn the skills employers are looking for.
									</span>
								</p>
							</li>
							<li className="">
								<p className="font-semibold">
									Career Support{" "}
									<span className="font-normal inline">
										&mdash; Guidance on resume building, interview preparation,
										and negotiating job offers.
									</span>
								</p>
							</li>
							<li className="">
								<p className="font-semibold">
									Flexible Learning{" "}
									<span className="font-normal inline">
										&mdash; Study at your own pace with online sessions.
									</span>
								</p>
							</li>
						</ul>
					</div>
					<div className="relative md:w-1/2 h-full xs:p-10 sm:p-20 md:p-6 lg:p-12 xl:p-16 2xl:p-20 triplexl:p-24 sm:mt-[-25px] md:mt-0">
						<Image
							src={myImg2}
							alt="Image"
							// layout="responsive"
							objectFit="contain"
							quality={100}
							className="z-20 rounded-[30px]"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-5 items-center md:flex-row md:gap-10 flex-1 ">
					<div className="flex flex-col lg:gap-1 xl:gap-6 text-center md:w-1/2 md:text-left md:pl-3 xl:pl-12 2xl:pl-16 triplexl:pl-24  ">
						<h6 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-type-90 relative">
							What You’ll Learn
						</h6>
						<p className="mt-4 font-serif leading-relaxed text-type-700 text-base sm:text-lg max-w-[600px]">
							In this course, you&apos;ll acquire essential skills and knowledge
							that will set you up for success in the IT industry
						</p>
						<ul className="hidden list-disc pl-5 mt-5 lg:flex flex-col gap-3">
							<li className="">
								<p className="font-semibold">
									IT Fundamentals{" "}
									<span className="font-normal inline">
										&mdash;Grasp the core concepts of hardware, software, and
										networks.
									</span>
								</p>
							</li>
							<li className="">
								<p className="font-semibold">
									Cybersecurity Basics{" "}
									<span className="font-normal inline">
										&mdash; Learn how to protect systems and data in today’s
										digital age.
									</span>
								</p>
							</li>
							<li className="">
								<p className="font-semibold">
									Problem Solving{" "}
									<span className="font-normal inline">
										&mdash; Master troubleshooting techniques to resolve common
										IT issues.
									</span>
								</p>
							</li>
							<li className="">
								<p className="font-semibold">
									Career Development{" "}
									<span className="font-normal inline">
										&mdash; Gain the skills to confidently apply for roles and
										negotiate pay.
									</span>
								</p>
							</li>
						</ul>
					</div>
					<div className="relative md:w-1/2 h-full xs:p-10 sm:p-20 md:p-6 lg:p-12 xl:p-16 2xl:p-20 triplexl:p-24 sm:mt-[-25px] md:mt-0">
						<Image
							src={myImg3}
							alt="Image"
							// layout="responsive"
							objectFit="contain"
							quality={100}
							className="z-20 rounded-[30px]"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
