import { camilaData } from "@/data/data";
import "./camila.css";

export const metadata = {
  title: "About - EDE",
  description: "About - Estudio del Espacio",
};

export default function Camila() {
  return (
    <>
      <main className="camila-main">
        <section>
          <img src={camilaData[0].profile_pic} alt="camila_at_her_studio" />
        </section>
        <section>
          <div className="about-text-wrap">
            <h1>{camilaData[0].title}</h1>
            {camilaData[0].text.map((data) => (
              <p key={data.title}>{data}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
