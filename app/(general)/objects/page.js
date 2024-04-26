import ObjectsNavbar from "@/components/objects_navbar/ObjectsNavbar";
import ObjectsGallery from "@/components/objects_gallery/ObjectsGallery";

export const metadata = {
  title: "Objects - EDE",
  description: "Objects - Estudio del Espacio",
};

export default function Objects() {
  return (
    <>
      <ObjectsNavbar/>
      <ObjectsGallery/>
    </>
  );
}
