import { useState, useEffect, useCallback } from "react";
import './projects.css'


export default function Projects(props) {

    const [projects, setProjects] = useState(null);


    const getProjectsData = useCallback(async () => {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
    });

    useEffect(() => { getProjectsData() } , [] );

    const loaded = () => {
        return (
            <section className="project-list">
            {projects.map((project) => (
                <div className="project-card">
                    <h1>{project.name}</h1>
                    <img src={project.image} />
                    <a href={project.git}>
                        <button>Github</button>
                    </a>
                    <a href={project.live}>
                        <button>live site</button>
                    </a>
                </div>
            ))}
                </section>
            );
}

  return projects ? loaded() : "";
}