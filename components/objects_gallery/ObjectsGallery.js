import "./ObjectsGallery.css";
import GalleryObject from "./gallery_object/GalleryObject";
import { objectsData } from "@/data/data";

export default function ObjectsGallery() {
  return (
    <>
      <main className="gallery-container">
        {objectsData.map((galleryItem) => (
          <GalleryObject
            onSrc={galleryItem.onSrc}
            offSrc={galleryItem.offSrc}
            title={galleryItem.title}
            number={galleryItem.number}
            path={galleryItem.path}
          />
        ))}
      </main>
    </>
  );
}
