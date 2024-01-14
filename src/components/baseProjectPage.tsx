import { ReactNode } from "react";

type BaseProjectPageProps = {
  title: string;
  description: string;
  optionalExtraDescription?: ReactNode;
  children: ReactNode;
};

function BaseProjectPage(props: BaseProjectPageProps) {
  return (
    <div className="p-4 ">
      <h1 className="mb-4 text-2xl font-normal text-center text-black font-alexBrush">
        {props.title}
      </h1>
      <div className="p-2 mb-4 border-[1px] border-gray-400">
        <p className="mb-4 text-xs font-normal text-black font-manjari">
          {props.description}
        </p>
        {props.optionalExtraDescription}
      </div>
      <div className="grid grid-cols-2 gap-4">{props.children}</div>
    </div>
  );
}

export default BaseProjectPage;
