import React from "react";

export default function CallToAction() {
	return (
		<div className="mt-[100px] mb-[160px] w-[90%] max-w-5xl flex flex-col gap-3 text-center mx-auto  bg-slate-900  py-20 rounded-xl shadow-md text-white">
			<h4 className="text-3xl  font-sans tracking-tight  sm:text-4xl md:text-5xl md:leading-tight md:max-w-4xl md:mx-auto font-bold px-2">
				Enroll Now Into AF Academy
			</h4>
			<p className="max-w-2xl mx-auto font-serif mt-6 italic text-type-800sm:text-lg px-2">
				&ldquo;After completing the course, I became a Service Desk Analyst, and
				with Ahmed&apos;s guidance, I successfully negotiated a pay
				raise!&rdquo; - Khalid Hassan
			</p>
			<a
				href="https://docs.google.com/forms/d/1cDMrWzQDD5Pya_8ww0b9ua7aS3UP7oEIGbcQBk0NFBQ/edit"
				target="_blank"
				className="hover:scale-[102%] transition-transform bg-blue-800 text-lg text-white rounded-sm px-4 py-2 self-center mt-4"
			>
				Enroll Now
			</a>
		</div>
	);
}
