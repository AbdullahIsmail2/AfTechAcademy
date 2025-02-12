import React from "react";
import { blogs } from "../data/blogs";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="">
      <h1 className="text-4xl font-black font-sans text-balance tracking-tight sm:text-6xl xl:text-7xl text-center mt-20 mb-16">
        Blogs
      </h1>

      {blogs.map((blog) => (
        <Link href={blog.link} key={blog.id}>
          <div className="mb-10 border-solid border-2 p-10 border-black rounded-xl max-w-6xl mx-auto w-[90%] cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-sm">{blog.minutesToRead} minutes to read</p>
            </div>
            <p className="mt-1 italic text-lg text-gray-500">{blog.author}</p>
            <p className="mt-2">{blog.content}</p>
            <div></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
