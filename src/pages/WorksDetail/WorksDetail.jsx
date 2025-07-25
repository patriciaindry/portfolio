import { useParams } from "react-router-dom";
import { projects } from "../Works/data"; // adjust path as needed

function WorksDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div className="works-detail-notfound">Project not found</div>;

  return (
    <div className="works-detail-container">
      <h1 className="works-detail-title">{project.title}</h1>

      {/* Conditional rendering based on type */}
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

        {project.images && (
        <div className="works-detail-images">
            {project.images.map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="works-detail-image"
            />
            ))}
        </div>
        )}

      <p className="works-detail-description">{project.description}</p>
    </div>
  );
}

export default WorksDetail;