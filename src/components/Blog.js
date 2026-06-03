import React from 'react';
import { blogs } from '../data/data';

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-gradient-to-b from-[#0a0c10] to-[#030507]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
                    <span className="text-purple-400 font-semibold">INSIGHTS & TRENDS</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Latest from <span className="gradient-text">Tech Blog</span>
                    </h2>
                    <p className="text-gray-400 mt-3">Expert opinions, case studies & future-proof strategies.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div
                            key={blog.title}
                            className="bg-[#11151e] rounded-2xl overflow-hidden border border-gray-800 transition-all hover:scale-[1.02] group"
                            data-aos="flip-left"
                            data-aos-delay={100 + idx * 100}
                        >
                            <div className={`h-48 ${blog.gradient} flex items-center justify-center`}>
                                <i className={`${blog.icon} text-6xl text-white/60`}></i>
                            </div>
                            <div className="p-6">
                                <p className={`${blog.dateColor} text-sm`}>{blog.date}</p>
                                <h3 className={`text-xl font-bold mt-2 ${blog.hoverColor} transition`}>{blog.title}</h3>
                                <p className="text-gray-400 mt-3">{blog.excerpt}</p>
                                <div className={`mt-5 flex items-center text-sm font-semibold ${blog.linkColor}`}>
                                    Read article →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;