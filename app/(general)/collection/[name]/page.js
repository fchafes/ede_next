import "./CollectionDetail.css";
import { collectionsData } from "@/data/data";

export default function CollectionDetail({ params }) {
  const collection = collectionsData.find((item) => item.title === params.name);

  return (
    <>
      <section className="c-detail-gallery">
        {collection.detail_imgs.map((imageSrc) => (
          <div className="c-gallery-box">
            <img src={imageSrc} alt="" />
          </div>
        ))}
      </section>
      <section className="c-detail-info">
        <div className="head-info">
          <h1>{collection.title}</h1>
          <h2>{collection.sub_title}</h2>
        </div>
        <h3>{collection.detail_text}</h3>
      </section>
    </>
  );
}
