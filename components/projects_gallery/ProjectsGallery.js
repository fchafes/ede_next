"use client";
import "./ProjectsGallery.css";
import ProjectsObject from "./projects_object/ProjectsObject";
import { projectsData } from "@/data/data";
import { mobileProjectsData } from "@/data/data";
import { useState, useEffect } from "react";

export const ProjectsGallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <div className="projects-container">
        {isMobile ? (
          <section className="projects-column">
            {mobileProjectsData.map((project, index) => (
              <ProjectsObject
                key={index}
                src={project.src}
                text={project.text}
              />
            ))}
          </section>
        ) : (
          projectsData.map((columnGroup, index) => (
            <section className="projects-column" key={index}>
              {columnGroup.column.map((item, i) => (
                <ProjectsObject key={i} src={item.src} text={item.text} />
              ))}
            </section>
          ))
        )}
      </div>
    </>
  );
};
