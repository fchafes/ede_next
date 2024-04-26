import "./Navbar.css";
import Link from "next/link";
import { AnchorBox } from "../a_box/AnchorBox";

const navItems = [
  { path: "/objects", text: "Objects" },
  { path: "/collections", text: "Collections" },
  { path: "/projects", text: "Projects" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="main-nav">
      <div>
        <Link href="/">
          <span>Estudio del Espacio</span>
        </Link>
      </div>
      <ul>
        {navItems.map((navItem) => (
          <li>
            <AnchorBox
              key={navItem.path}
              href={navItem.path}
              text={navItem.text}
              diffMode={true}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
