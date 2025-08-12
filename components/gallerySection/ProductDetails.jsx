import React from "react";
import Image from "next/image";
import InternalBanner from "@/components/internalbanner";
import { useRouter } from "next/navigation";

const ProductDetails = ({ project, remainingProjects }) => {
  const router = useRouter();

  if (!project) {
    return null;
  }

  return (
    <section>
      <InternalBanner
        title={project.title || ""}
        subtitle={project.description || ""}
        backgroundImages={project.slugBannerImages || []}
        autoSlideInterval={4000}
      />

      {/* Render content sections */}
      {project.content &&
        project.content.map((section, index) => (
          <section
            key={index}
            className="px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 pt-10 sm:py-8 md:py-10 lg:py-10"
          >
            <div className="max-w-[1400px] mx-auto">
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16`}
              >
                <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
                  <Image
                    src={
                      section.images && section.images.length > 0
                        ? section.images[0]
                        : "https://interiorwalaa.smepulse.in/Rectangle%2034626837.png"
                    }
                    alt={section.title}
                    fill
                    className="rounded-4xl object-cover shadow-lg"
                    style={{ boxShadow: "0 4px 20px rgba(143, 94, 61, 0.2)" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 sm:px-4 md:px-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['WorkSans'] text-[var(--primary-brown)] mb-4 sm:mb-6 leading-tight">
                    {section.title}
                  </h2>
                  {section.description &&
                    section.description.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-base sm:text-lg md:text-lg lg:text-lg text-black/80 font-['Manrope'] mb-4 sm:mb-6 leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </section>
        ))}

      {/* More Projects */}
      <section className="w-full py-8">
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center animate-scroll-x">
            {[...remainingProjects, ...remainingProjects].map(
              (project, idx) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  onClick={() => router.push(`/our-projects/${project.slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      router.push(`/our-projects/${project.slug}`);
                  }}
                  className="inline-block w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[170px] sm:h-[180px] md:h-[200px] lg:h-[280px] relative cursor-pointer focus:outline-none"
                  style={{ flex: "0 0 auto" }}
                  aria-label={`View project ${project.title}`}
                >
                  <Image
                    src={project.featuredImage || project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 280px, 300px"
                    priority={idx < 5}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll-x {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-x {
            animation: scroll-x 40s linear infinite;
            width: max-content;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </section>
  );
};

export default ProductDetails;
