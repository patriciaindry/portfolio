import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories, projects } from "./data";
import "./Works.css"; 

const Works = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.categories.includes(activeCategory));

    return (
        <div className="works-page">
            <h1></h1>
            <div className="category-tabs">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={activeCategory === cat ? "active" : " "}
                        style={{
                            transition: '0.1s ease-out'
                        }
                        }
                    >
                        <span className="scroll-text">
                            <span>{cat}</span>
                            <span>{cat}</span>
                        </span>
                    </button>
                ))}
            </div>
            <div className="project-grid">
                {filteredProjects.map(project => (
                    <Link to={`/works/${project.id}`} className="project-card" key={project.id}>
                        <img src={project.thumbnail} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.categories.join(", ")}</p>
                    </Link>
                ))}
            </div>
        </div>
        
    );
}

export default Works;