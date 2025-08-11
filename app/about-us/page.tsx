import InternalBanner from "@/components/internalbanner";
import OurGallery from "@/components/OurGallery";
import WelcomeSection from "@/components/AboutUsWelcome/Welcome";
import { getAboutUsBanner, getAboutUsMain, getAboutUsGallery } from "@/api/aboutus";

export default async function AboutUsPage() {
  let bannerData = null;
  let mainData = null;
  let galleryData = null;

  try {
    bannerData = await getAboutUsBanner();
  } catch (error) {
    console.error("Failed to fetch banner data:", error);
  }

  try {
    mainData = await getAboutUsMain();
  } catch (error) {
    console.error("Failed to fetch main data:", error);
  }

  try {
    galleryData = await getAboutUsGallery();
  } catch (error) {
    console.error("Failed to fetch gallery data:", error);
  }

  return (
    <div>
      <InternalBanner
        title={bannerData?.data?.title || ""}
        subtitle={bannerData?.data?.description || ""}
        backgroundImages={bannerData?.data?.backgroundImage || ["", "", ""]}
        autoSlideInterval={4000}
      />
      <WelcomeSection
        backgroundImage={mainData?.data?.content?.rightPanel?.backgroundImage || ""}
        mainTitle={mainData?.data?.content?.leftPanel?.title || ""}
        mainDescription={mainData?.data?.content?.leftPanel?.description || [""]}
        cards={mainData?.data?.content?.rightPanel?.contentCards || []}
      />
      <OurGallery
        title={galleryData?.data?.title || ""}
        subtitle={galleryData?.data?.subtitle || ""}
        isLoading={!galleryData?.data}
      />
    </div>
  );
}
