import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/data/blogPosts';

interface BlogsDetailsProps {
    blogPost: BlogPost;
}

const BlogsDetails: React.FC<BlogsDetailsProps> = ({ blogPost }) => {
    // Function to render HTML content with custom styling
    const renderContent = (content: string) => {
        // Create a temporary div to parse the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;

        // Convert the HTML to React elements with proper styling
        const elements: React.ReactNode[] = [];

        Array.from(tempDiv.children).forEach((element, index) => {
            const tagName = element.tagName.toLowerCase();
            const textContent = element.textContent || '';

            switch (tagName) {
                case 'p':
                    elements.push(
                        <p key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope mb-6">
                            {textContent}
                        </p>
                    );
                    break;
                case 'h2':
                    elements.push(
                        <h2 key={index} className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black font-['WorkSans'] leading-tight mb-6 mt-12">
                            → {textContent}
                        </h2>
                    );
                    break;
                case 'h3':
                    elements.push(
                        <h3 key={index} className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black font-['WorkSans'] leading-tight mb-4 mt-8">
                            → {textContent}
                        </h3>
                    );
                    break;
                case 'ul':
                    const listItems = Array.from(element.children).map((li, liIndex) => (
                        <li key={liIndex} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope mb-2 ml-4">
                            {li.textContent}
                        </li>
                    ));
                    elements.push(
                        <ul key={index} className="list-disc mb-6">
                            {listItems}
                        </ul>
                    );
                    break;
                case 'img':
                    const imgSrc = element.getAttribute('src');
                    const imgAlt = element.getAttribute('alt') || '';
                    if (imgSrc) {
                        elements.push(
                            <div key={index} className="my-8">
                                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={imgSrc}
                                        alt={imgAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                    />
                                </div>
                            </div>
                        );
                    }
                    break;
                default:
                    elements.push(
                        <div key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope mb-6">
                            {textContent}
                        </div>
                    );
            }
        });

        return elements;
    };

    return (
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Render the blog post content */}
                <div className="prose prose-lg max-w-none">
                    {renderContent(blogPost.content)}
                </div>

                {/* Category badge */}
                <div className="text-center mt-12">
                    <span className="inline-block px-6 py-3 bg-[var(--primary-brown)] text-white rounded-full text-sm font-medium font-manrope">
                        {blogPost.category}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;
