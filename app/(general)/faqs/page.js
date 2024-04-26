import { faqsData } from "@/data/data";
import "./faqs.css";

export const metadata = {
  title: "FAQS - EDE",
  description: "FAQS - Estudio del Espacio",
};

export default function FAQs() {
  return (
    <>
      <main className="faqs-main">
        <section>
          <img src={faqsData[0].profile_pic} />
        </section>
        <section>
          <div className="about-text-wrap">
            <h1>{faqsData[0].title}</h1>
            {faqsData[0].text.map((faq, index) => (
              <div key={index}>
                <h5>{faq.question}</h5>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
