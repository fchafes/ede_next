import "./AnchorBox.css";
import Link from "next/link";

export const AnchorBox = ({ href, text, noShrink, isBlank, biggerFont, isCollection, smallFont, diffMode }) => {
  return (
    <div className={`a-box ${noShrink ? "noShrink-a-box" : ""} ${biggerFont ? "biggerFont-a-box" : ""} ${isCollection ? "collection-a-box" : ""} ${smallFont ? "smallFont-a-box" : ""} ${diffMode ? "diffMode-a-box" : ""} `}>
      {isBlank ? (
        <a href={href} target="_blank">
          {text}
        </a>
      ) : (
        <Link href={href}>{text}</Link>
      )}
      <div className="underline"></div>
    </div>
  );
};
