import { Link } from "react-router-dom";
import { routes } from "../../routes";

function ProjectChanger() {
  const projectLinkIndex = routes.findIndex(
    (element) => element.path === window.location.pathname
  );
  //will need to change these numbers around depending on if links are added.
  const prevProjectIndex = projectLinkIndex <= 2 ? null : projectLinkIndex - 1;
  const nextProjectIndex = projectLinkIndex >= 13 ? null : projectLinkIndex + 1;

  return (
    <div className="flex justify-between mt-2 md:mt-4 max-w-[1920px] mx-auto">
      <Link
        aria-hidden={prevProjectIndex ? false : true}
        className={`w-40 p-2 text-base font-black text-center bg-tertiaryOne font-inter text-primary ${
          prevProjectIndex ? "" : "opacity-40 pointer-events-none"
        }`}
        to={prevProjectIndex ? routes[prevProjectIndex].path : "/"}
      >
        Previous
      </Link>

      <Link
        aria-hidden={nextProjectIndex ? false : true}
        className={`w-40 p-2 text-base font-black text-center bg-tertiaryOne font-inter text-primary ${
          nextProjectIndex ? "" : "opacity-40 pointer-events-none"
        }`}
        to={nextProjectIndex ? routes[nextProjectIndex].path : "/"}
      >
        Next
      </Link>
    </div>
  );
}

export default ProjectChanger;
