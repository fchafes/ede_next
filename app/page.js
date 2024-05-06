import HomeCarousel from "@/components/home_carousel/HomeCarousel";
import { carouselImages } from "@/data/data";

export default function Home() {
  return (
    <>
      <HomeCarousel data={carouselImages} />
    </>
  );
}
