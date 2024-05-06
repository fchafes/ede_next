import { bioData } from "@/data/data";
import "./bio.css";

export const metadata = {
  title: "Bio - EDE",
  description: "About - Estudio del Espacio",
};

export default function Bio() {
  return (
    <>
      <main className="camila-main">
        <section>
          <img src={bioData[0].profile_pic} alt="camila_at_her_studio" />
        </section>
        <section>
          <div className="about-text-wrap">
            <h1>{bioData[0].title}</h1>
            {bioData[0].text.map((data) => (
              <p key={data.title}>{data}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
