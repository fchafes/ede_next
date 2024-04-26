import "./ObjectsNavbar.css";
import { AnchorBox } from "../a_box/AnchorBox";

export default function ObjectsNavbar() {
  return (
    <>
      <nav className="objects-nav">
        <ul>
          <li>
            <AnchorBox href="#" text="Lamps" />
          </li>
          <li>
            <AnchorBox href="#" text="Clothing" />
          </li>
          <li>
            <AnchorBox href="#" text="Sofas" />
          </li>
        </ul>
      </nav>
    </>
  );
}
