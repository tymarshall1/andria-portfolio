import { ReactNode } from "react";
import ProjectChanger from "./projectChanger";
type BaseProjectPageProps = {
  title: string;
  description: string;
  optionalExtraDescription?: ReactNode;
  optionalGridCustom?: string;
  children: ReactNode;
};

function BaseProjectPage(props: BaseProjectPageProps) {
  return (
    <div className="w-full px-2 pt-8 pb-2 mx-auto bg-white lg:pb-4 lg:px-4">
      <h1 className="mb-4 text-3xl font-extrabold text-center text-secondary font-inter">
        {props.title}
      </h1>
      <div className="max-w-3xl p-2 mx-auto mb-4 text-center">
        <p className="block text-xs font-normal text-primary font-inter">
          {props.description}
        </p>
        {props.optionalExtraDescription}
      </div>
      <div
        className={`grid grid-cols-2 gap-2 lg:gap-4 mx-auto lg:grid-cols-3 max-w-[1920px] ${props.optionalGridCustom}`}
      >
        {props.children}
      </div>
      <ProjectChanger />
    </div>
  );
}

export default BaseProjectPage;
