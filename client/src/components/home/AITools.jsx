import React from 'react';
import {
    Pencil,
    MessageSquareText,
    Image,
    ScanEye,
    Eraser,
    FileText
} from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const tools = [
    {
        icon: <Pencil className="h-6 w-6" />,
        title: "AI Article Writer",
        description: "Generate high-quality, engaging articles on any topic with our advanced AI writing technology.",
        link: "/ai-article-writer"
    },
    {
        icon: <MessageSquareText className="h-6 w-6" />,
        title: "Blog Title Generator",
        description: "Create catchy, SEO-optimized blog titles that attract more readers and improve engagement.",
        link: "/blog-title-generator"
    },
    {
        icon: <Image className="h-6 w-6" />,
        title: "AI Image Generation",
        description: "Create stunning visuals from text descriptions with our state-of-the-art image generation AI.",
        link: "/ai-image-generation"
    },
    {
        icon: <ScanEye className="h-6 w-6" />,
        title: "Background Removal",
        description: "Instantly remove backgrounds from images with perfect precision using AI technology.",
        link: "/background-removal"
    },
    {
        icon: <Eraser className="h-6 w-6" />,
        title: "Object Removal",
        description: "Effortlessly remove unwanted objects from your photos while maintaining image quality.",
        link: "/object-removal"
    },
    {
        icon: <FileText className="h-6 w-6" />,
        title: "Resume Review",
        description: "Get AI-powered feedback on your resume to improve your chances of landing interviews.",
        link: "/resume-review"
    }
];

const AITools = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Powerful AI Tools
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        onClick={() => user && navigate(tool.link)}
                        className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                    >
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    {tool.icon}
                                </div>
                                <h3 className="ml-4 text-lg font-medium text-gray-900">{tool.title}</h3>
                            </div>
                            <p className="mt-2 text-gray-600">{tool.description}</p>
                            <div className="mt-6">
                                <span className="text-primary hover:text-indigo-500 font-medium inline-flex items-center">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a
                    href="/all-features"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Explore All Features
                </a>
            </div>
        </div>
    );
};

export default AITools;