import HeroSection from "@/components/HeroSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import CategoriesGrid from "@/components/CategoriesGrid";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedBooks />
      <CategoriesGrid />
      <NewArrivals />
    </main>
  );
}
