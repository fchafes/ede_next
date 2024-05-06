import "./ObjectsNavbar.css";
import { AnchorBox } from "../a_box/AnchorBox";

export default function ObjectsNavbar() {
  return (
    <>
      <nav className="objects-nav">
        <ul>
          <li>
            <AnchorBox href="#" text="Lamps" 
                diffMode={true}/>
          </li>
          <li>
            <AnchorBox href="#" text="Textile" 
                diffMode={true}/>
          </li>
        </ul>
      </nav>
    </>
  );
}
