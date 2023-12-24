import { allProjects } from ".contentlayer/generated";
import ProjectContent from "./ProjectContent";

export async function generateStaticParams({ params }) {
  const projects = await allProjects;

  return projects.map((project) => ({ params: { slug: project.slug } }));
}

export const generateMetadata = async ({ params }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug
  );
  return { title: project?.title, excerpt: project?.excerpt };
};

const ProjectLayout = ({ params }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug
  );

  return (
    <>
      <ProjectContent project={project} />
    </>
  );
};

export default ProjectLayout;

