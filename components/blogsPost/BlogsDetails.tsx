import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/blogs';

interface BlogsDetailsProps {
    blogPost: BlogPost;
}

const BlogsDetails: React.FC<BlogsDetailsProps> = ({ blogPost }) => {
    // Function to render content with interspersed images
    const renderContentWithImages = (content: string, images: string[]) => {
        // Split content by double newlines to get paragraphs
        const paragraphs = content.split('\n\n').filter(p => p.trim());

        const elements: React.ReactNode[] = [];
        let imageIndex = 0;

        paragraphs.forEach((paragraph, index) => {
            const trimmedParagraph = paragraph.trim();
            if (!trimmedParagraph) return;

            // Add text paragraph
            elements.push(
                <p key={`text-${index}`} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope mb-6">
                    {trimmedParagraph}
                </p>
            );

            // Add image after every 2-3 paragraphs (or when images are available)
            if (imageIndex < images.length && (index + 1) % 3 === 0) {
                const imageUrl = images[imageIndex];
                const isEvenImage = imageIndex % 2 === 0;

                elements.push(
                    <div key={`image-${imageIndex}`} className="flex flex-col lg:flex-row gap-8 my-8">
                        {isEvenImage ? (
                            // Left side content, right side image
                            <>
                                <div className="flex-1 lg:pr-8">
                                    <div className="space-y-6">
                                        {/* Add some placeholder content or next few paragraphs */}
                                        {paragraphs.slice(index + 1, index + 3).map((nextParagraph, nextIndex) => (
                                            <p key={`next-${nextIndex}`} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope">
                                                {nextParagraph.trim()}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:w-1/3 lg:flex-shrink-0">
                                    <div className="relative h-[250px] sm:h-[300px] lg:h-[300px] rounded-3xl overflow-hidden">
                                        <Image
                                            src={imageUrl}
                                            alt={`Blog image ${imageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            // Left side image, right side content
                            <>
                                <div className="lg:w-1/3 lg:flex-shrink-0">
                                    <div className="relative h-[250px] sm:h-[300px] lg:h-[300px] rounded-3xl overflow-hidden">
                                        <Image
                                            src={imageUrl}
                                            alt={`Blog image ${imageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 lg:pl-8">
                                    <div className="space-y-6">
                                        {/* Add some placeholder content or next few paragraphs */}
                                        {paragraphs.slice(index + 1, index + 3).map((nextParagraph, nextIndex) => (
                                            <p key={`next-${nextIndex}`} className="text-base sm:text-lg text-gray-700 leading-relaxed font-manrope">
                                                {nextParagraph.trim()}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                );

                imageIndex++;
            }
        });

        // Add remaining images at the end if any
        while (imageIndex < images.length) {
            const imageUrl = images[imageIndex];
            elements.push(
                <div key={`remaining-image-${imageIndex}`} className="my-8">
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={`Blog image ${imageIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        />
                    </div>
                </div>
            );
            imageIndex++;
        }

        return elements;
    };

    return (
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-7xl mx-auto">
                {/* Blog Post Header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4 font-['WorkSans']">
                        {blogPost.title}
                    </h1>
                    {blogPost.subtitle && (
                        <p className="text-lg sm:text-xl text-gray-600 mb-4 font-manrope font-semibold">
                            {blogPost.subtitle}
                        </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-['Manrope']">
                        {blogPost.author && (
                            <span>By {blogPost.author}</span>
                        )}
                        {blogPost.category && (
                            <span>• {blogPost.category}</span>
                        )}
                        {blogPost.createdAt && (
                            <span>• {new Date(blogPost.createdAt).toLocaleDateString()}</span>
                        )}
                    </div>
                </div>

                {/* Featured Image */}
                {blogPost.featuredImage && (
                    <div className="mb-8">
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src={blogPost.featuredImage}
                                alt={blogPost.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                )}

                {/* Render the blog post content with interspersed images */}
                <div className="prose prose-lg max-w-none">
                    {renderContentWithImages(blogPost.content, blogPost.images || [])}
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;
