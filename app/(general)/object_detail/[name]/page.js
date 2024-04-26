import "./ObjectDetail.css";
import { AnchorBox } from "@/components/a_box/AnchorBox";
import { objectsData } from "@/data/data";

export default function ObjectDetail({ params }) {
  const name = params.name;
  const object = objectsData.find((item) => item.title === name);
  return (
    <>
      <main className="od-main">
        <div className="od-left">
          {object.detail_images.map((objectImage) => (
            <div className="o-image-box">
              <img src={objectImage} />
            </div>
          ))}
        </div>
        <div className="od-right">
          <div className="o-info-box">
            <div className="title-text">
              <h2>{object.title}</h2>
              <h4>{object.number}</h4>
            </div>
            <div className="intro-text">
              <p>{object.detail_text}</p>
            </div>
            <div className="info-text">
              <div className="i-title">
                <p>SIZE</p>
                <p>PRICE</p>
              </div>
              <div className="i-item">
                <p>40 × 40 × 10 cm</p>
                <p>440 €</p>
              </div>
              <div className="i-item">
                <p>60 × 60 × 10 cm</p>
                <p>620 €</p>
              </div>
              <div className="i-item">
                <p>80 × 80 × 10 cm</p>
                <p>750 €</p>
              </div>
            </div>
            <div className="description-text">
              <p>PRODUCT DESCRIPTION</p>
              <p>Pink, red and dark red Methacrylate / PETG.</p>
              <p>Wall-mounted lamp.</p>
              <p>Weight: 3 kg.</p>
              <p>Costumization available upon request.</p>
            </div>
            <AnchorBox
              href="#"
              text="Download spec sheet"
              noShrink={true}
              isBlank={true}
              biggerFont={true}
            />
            <div className="link-inquire">
              <AnchorBox
                href="/inquire"
                text="INQUIRE"
                noShrink={true}
                biggerFont={true}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
