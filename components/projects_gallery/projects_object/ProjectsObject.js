import "./ProjectsObject.css";

export default function ProjectsObject({ src, text }) {
  return (
    <>
      <div className="po-box">
        <div className="po-img">
          <img src={src} />
        </div>
        <div className="po-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
