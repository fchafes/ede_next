import "./GalleryObject.css";
import Link from "next/link";

export default function GalleryObject({ onSrc, offSrc, title, number, path }) {
  return (
    <>
      <div className="gallery-object">
        <Link href={path}>
          <div
            className="object-media"
            style={{ backgroundImage: `url(${onSrc})` }}
          >
            <div
              className="hover-img"
              style={{ backgroundImage: `url(${offSrc})` }}
            ></div>
          </div>
        </Link>
        <div className="object-info">
          <p>{title}</p>
          <p>{number}</p>
        </div>
      </div>
    </>
  );
}
