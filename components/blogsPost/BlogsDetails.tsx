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
        let hasFirstImage = false;
        let firstImageElement: React.ReactNode | null = null;
        const contentBeforeImage: React.ReactNode[] = [];
        const contentAfterImage: React.ReactNode[] = [];

        // First pass: collect all elements and identify the first image
        const allElements: React.ReactNode[] = [];

        Array.from(tempDiv.children).forEach((element, index) => {
            const tagName = element.tagName.toLowerCase();
            const textContent = element.textContent || '';

            const createElement = (elementIndex: number): React.ReactNode => {
                switch (tagName) {
                    case 'p':
                        return (
                            <p key={elementIndex} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope mb-6">
                                {textContent}
                            </p>
                        );
                    case 'h2':
                        return (
                            <h2 key={elementIndex} className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black font-['WorkSans'] leading-tight mb-6">
                                → {textContent}
                            </h2>
                        );
                    case 'h3':
                        return (
                            <h3 key={elementIndex} className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black font-['WorkSans'] leading-tight mb-4 mt-8">
                                → {textContent}
                            </h3>
                        );
                    case 'ul':
                        const listItems = Array.from(element.children).map((li, liIndex) => (
                            <li key={liIndex} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope mb-2 ml-4">
                                {li.textContent}
                            </li>
                        ));
                        return (
                            <ul key={elementIndex} className="list-disc mb-6">
                                {listItems}
                            </ul>
                        );
                    case 'img':
                        const imgSrc = element.getAttribute('src');
                        const imgAlt = element.getAttribute('alt') || '';
                        if (imgSrc) {
                            const isBannerImage = imgSrc.includes('blogpostbanner');

                            if (isBannerImage) {
                                return (
                                    <div key={elementIndex} className="my-8 -mx-4 sm:-mx-6 lg:-mx-8">
                                        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                                            <Image
                                                src={imgSrc}
                                                alt={imgAlt}
                                                fill
                                                className="object-cover"
                                                sizes="100vw"
                                            />
                                        </div>
                                    </div>
                                );
                            } else if (!hasFirstImage) {
                                // First regular image - create the image element for the right side
                                hasFirstImage = true;
                                return (
                                    <div key={elementIndex} className="lg:w-1/3 lg:flex-shrink-0">
                                        <div className="relative h-[250px] sm:h-[300px] lg:h-[300px] rounded-3xl overflow-hidden">
                                            <Image
                                                src={imgSrc}
                                                alt={imgAlt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 100vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                );
                            } else {
                                // Subsequent regular images
                                return (
                                    <div key={elementIndex} className="my-8">
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
                        }
                        return null;
                    default:
                        return (
                            <div key={elementIndex} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope mb-6">
                                {textContent}
                            </div>
                        );
                }
            };

            const reactElement = createElement(index);
            if (reactElement) {
                allElements.push(reactElement);
            }
        });

        // Second pass: organize elements based on first image position
        let foundFirstImage = false;
        allElements.forEach((element) => {
            // Check if this is the first regular image
            if (React.isValidElement(element) &&
                element.type === 'div' &&
                element.props &&
                typeof element.props === 'object' &&
                'className' in element.props &&
                typeof element.props.className === 'string' &&
                element.props.className.includes('lg:w-1/3') &&
                !foundFirstImage) {
                foundFirstImage = true;
                firstImageElement = element;
            } else if (foundFirstImage) {
                contentAfterImage.push(element);
            } else {
                contentBeforeImage.push(element);
            }
        });

        // Build the final layout
        if (firstImageElement) {
            // Add content before image
            elements.push(...contentBeforeImage);

            // Add the flex layout with image on right and content on left
            elements.push(
                <div key="first-image-layout" className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 lg:pr-8">
                        {/* Content on the left side - use the content that comes after the image */}
                        <div className="space-y-6">
                            {contentAfterImage.slice(0, 4).map((content, index) => (
                                <div key={`left-content-${index}`}>
                                    {content}
                                </div>
                            ))}
                        </div>
                    </div>
                    {firstImageElement}
                </div>
            );

            // Add remaining content after the flex layout
            elements.push(...contentAfterImage.slice(4));
        } else {
            // No first image found, render normally
            elements.push(...contentBeforeImage);
        }

        return elements;
    };

    return (
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-7xl mx-auto">
                {/* Render the blog post content */}
                <div className="prose prose-lg max-w-none">
                    {renderContent(blogPost.content)}
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;
