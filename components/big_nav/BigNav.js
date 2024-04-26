import "./BigNav.css";
import { AnchorBox } from "@/components/a_box/AnchorBox";

export const BigNav = ({ setCover, navData, smallFont, collabs }) => {
  const handleCoverChange = (id) => {
    setCover && setCover(id);
  };
  const handleCoverNull = () => {
    setCover && setCover(null);
  };

  return (
    <>
      <nav className="big-nav">
        {collabs ? (
          navData.map((data) => (
            <section className="big-item" key={data.id}>
              <p>{data.nav_text}</p>
              <div
                className="bn-anchor"
                onMouseOver={() => handleCoverChange(data.id)}
                onMouseOut={handleCoverNull}
              >
                <AnchorBox
                  href={data.path}
                  text={data.title}
                  noShrink={true}
                  isCollection={true}
                  smallFont={smallFont}
                />
              </div>
            </section>
          ))
        ) : (
          navData.map((data) => (
            <section className="big-item" key={data.id}>
              <p>{data.nav_text}</p>
              <div
                className="bn-anchor"
                onMouseOver={() => handleCoverChange(data.id)}
                onMouseOut={handleCoverNull}
              >
                <AnchorBox
                  href={data.path}
                  text={data.title}
                  noShrink={true}
                  isCollection={true}
                  smallFont={smallFont}
                />
              </div>
            </section>
          ))
        )}
      </nav>
    </>
  );
};
