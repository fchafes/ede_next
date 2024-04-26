import "./CollectionsCover.css";
import { collectionsData } from "@/data/data";

export const CollectionsCover = ({ cover }) => {
  return (
    <>
      <section className="collection-cover">
        {collectionsData.map((collection) => (
          <div className="cover-box" key={collection.id}>
            <img
              src={collection.cover_img}
              alt={collection.title}
              className={cover === collection.id ? "show-cover" : ""}
            />
          </div>
        ))}
      </section>
    </>
  );
};
