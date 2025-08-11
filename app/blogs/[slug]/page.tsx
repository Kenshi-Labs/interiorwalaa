import InternalBanner from "@/components/internalbanner";
import ServicesPortfolio from "@/components/servicesPortfolio";
import NewsletterSection from "@/components/projectContact";
import BlogsDetails from "@/components/blogsPost/BlogsDetails";
import { getBlogsMain, getBlogById } from "@/api/blogs";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    let blogPost = null;

    try {
      // First try to get the blog from the main list
      const mainResponse = await getBlogsMain();
      blogPost = mainResponse.data.blogs.find((blog) => blog.slug === slug);

      if (!blogPost) {
        // If not found in main list, try to get by ID (assuming slug might be the ID)
        try {
          const blogResponse = await getBlogById(slug);
          blogPost = blogResponse.data;
        } catch (blogError) {
          console.error('Blog not found by ID either:', blogError);
          notFound();
        }
      }
    } catch (err) {
      console.error('Failed to fetch blog post:', err);
      notFound();
    }

    if (!blogPost) {
      notFound();
    }

    return (
      <>
        <InternalBanner
          title={blogPost.title || ""}
          subtitle={blogPost.excerpt || ""}
          backgroundImages={blogPost.images || []}
          autoSlideInterval={4000}
        />

        <BlogsDetails blogPost={blogPost} />

        <ServicesPortfolio />
        <NewsletterSection
          title="Looking to Redesign Your Restaurant? Let's Talk."
          placeholder="Email ID"
          submitText="Submit"
          loadingText="Submitting..."
          loadingTextMobile="..."
          successMessage="Thanks for submitting! Check your inbox for confirmation."
          errorMessage="Something went wrong. Please try again."
          invalidEmailMessage="Please enter a valid email address"
        />
      </>
    );
  } catch (error) {
    console.error('Error resolving params:', error);
    notFound();
  }
}