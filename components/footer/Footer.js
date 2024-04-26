import "./Footer.css";
import { AnchorBox } from "../a_box/AnchorBox";

const footLinks = [
  { path: "/#", text: "Find us" },
  { path: "/#", text: "FAQS" },
  { path: "/contact", text: "Contact" },
  { path: "#", text: "Newsletter" },
];

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="f-left">
        <div className="f-text-box">
          <p>© Estudio del Espacio</p>
          <p>Barcelona, 2024</p>
        </div>
      </div>
      <div className="f-right">
        <div className="f-text-box">
          <ul>
            {footLinks.map((footLink) => (
              <li>
                <AnchorBox
                  key={footLink.path}
                  href={footLink.path}
                  text={footLink.text}
                  noShrink={true}
                />
              </li>
            ))}
            <li>
              <AnchorBox
                href="https://instagram.com/estudiodelespacio"
                text="Instagram"
                noShrink={true}
                isBlank={true}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
