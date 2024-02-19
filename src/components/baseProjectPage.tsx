import { ReactNode } from "react";

type BaseProjectPageProps = {
  title: string;
  description: string;
  optionalExtraDescription?: ReactNode;
  children: ReactNode;
};

function BaseProjectPage(props: BaseProjectPageProps) {
  return (
    <div className="p-8 bg-white">
      <h1 className="mb-4 text-3xl font-extrabold text-center text-primary font-inter">
        {props.title}
      </h1>
      <div className="p-2 mb-4 text-center">
        <p className="text-xs font-normal text-primary font-inter">
          {props.description}
        </p>
        {props.optionalExtraDescription}
      </div>
      <div className="grid grid-cols-2 gap-4">{props.children}</div>
    </div>
  );
}

export default BaseProjectPage;
