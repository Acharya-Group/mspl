"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useBlogs, Blog } from "@/hooks/blogs";
import CommonHero from "@/components/common/CommonHero";

const BlogDetailsPage: React.FC = () => {
  const { allBlogs } = useBlogs();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (allBlogs.isSuccess && allBlogs.data) {
      setBlogs(allBlogs.data);
    }
  }, [allBlogs.isSuccess, allBlogs.data]);

  return (
    <>
      <CommonHero currentPage="All Blogs" />

      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* ✅ Unified message handling */}
          {allBlogs.isLoading && (
            <p className="text-center text-gray-500 animate-pulse text-lg font-medium">
              Loading blogs...
            </p>
          )}

          {allBlogs.isError && (
            <p className="text-center text-red-500 text-lg font-medium">
              Failed to load blogs. Please try again later.
            </p>
          )}

          {!allBlogs.isLoading && blogs.length === 0 && (
            <p className="text-center text-gray-400 text-lg font-medium">
              No blogs found.
            </p>
          )}

          {/* ✅ Blog Grid */}
          {blogs.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="p-[2px] rounded-xl bg-gradient-to-r from-green via-sky-500 to-primary animate-borderSpin hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden h-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={300}
                      className="w-full h-auto !max-h-48 object-contain"
                    />

                    <div className="p-4 flex flex-col items-center text-center mt-auto">
                      <h3 className="text-lg font-semibold mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm text-center mb-2 line-clamp-2">
                        {blog.shortDescription}
                      </p>
                      <Link
                        href={`/blog/${blog._id}`}
                        className="font-semibold text-primary hover:underline hover:!text-green"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
