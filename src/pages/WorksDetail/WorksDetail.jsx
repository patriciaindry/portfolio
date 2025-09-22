import { useParams } from "react-router-dom";
import { projects } from "../Works/data";
import "./WorksDetail.css";

function WorksDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = projects[currentIndex - 1] || null;
  const nextProject = projects[currentIndex + 1] || null;

  if (!project) return <div className="works-detail-notfound">Project not found</div>;

  return (
    <div className="works-detail-container">
      {/* Title */}
      <h1 className="works-detail-title">{project.title}</h1>

      {/* Images */}
      <div className="works-detail-images">
        {project.images && project.images.length > 0 &&
          project.images.map((img, index) => (
            <div className="image-wrapper" key={index}>
              <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
            </div>
          ))
        }
      </div>

      {/* Description */}
      <div className="works-detail-description">
        {project.description.summary && <p className="summary">{project.description.summary}</p>}
        {project.description.details && <p className="details">{project.description.details}</p>}
        {project.description.challenges && <p className="challenges">{project.description.challenges}</p>}
      </div>

      {/* Duration & Tech */}
      <div className="works-detail-meta">
        {project.duration && <span className="works-detail-duration">{project.duration}</span>}
        {project.tech && (
          <ul className="works-detail-tech">
            {project.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        )}
      </div>

      {/* YouTube Video */}
      {project.youtubeId && (
        <div className="works-detail-video">
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <div className="works-detail-navigation">
        {prevProject && (
          <a href={`#/works/${prevProject.slug}`} className="nav-button prev">
            ← {prevProject.title}
          </a>
        )}
        {nextProject && (
          <a href={`#/works/${nextProject.slug}`} className="nav-button next">
            {nextProject.title} →
          </a>
        )}
      </div>
    </div>
  );
}

export default WorksDetail;
