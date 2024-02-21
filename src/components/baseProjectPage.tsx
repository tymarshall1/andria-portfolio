import { ReactNode } from "react";

type BaseProjectPageProps = {
  title: string;
  description: string;
  optionalExtraDescription?: ReactNode;
  children: ReactNode;
};

function BaseProjectPage(props: BaseProjectPageProps) {
  return (
    <div className="w-full p-8 mx-auto bg-white">
      <h1 className="mb-4 text-3xl font-extrabold text-center text-secondary font-inter">
        {props.title}
      </h1>
      <div className="max-w-3xl p-2 mx-auto mb-4 text-center">
        <p className="block text-xs font-normal text-primary font-inter">
          {props.description}
        </p>
        {props.optionalExtraDescription}
      </div>
      <div className="grid grid-cols-2 gap-4 mx-auto max-w-fit">
        {props.children}
      </div>
    </div>
  );
}

export default BaseProjectPage;
