import type { FC, ReactNode } from "react";

interface props {
  title: string;
  description: string;
  children: ReactNode;
  footer?: string;
}
const InformationCard: FC<props> = ({
  title,
  description,
  children,
  footer,
}) => {  
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black select-none">
      <div className="border-2 bg-white rounded-xl px-24 py-16 text-center border-detail custom-box-shadow on-hover">
        <h1 className="text-2xl font-bold mb-5">{title}</h1>
        <h2>{description}</h2>
        {children}
        {footer != null ? (
          <h3 className="mt-2 text-sm text-slate-600">{footer}</h3>
        ) : null}
      </div>
    </div>
  );
};

export default InformationCard;
