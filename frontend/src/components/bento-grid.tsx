import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  date,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    date?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2]  border  justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex flex-row items-center justify-start">
        {icon}
        <span className="ml-1 font-sans font-normal  text-xs text-neutral-300 inred">
            {date}
        </span>
        </div>
        <h3 className="font-sans text-neutral-200 mb-2 mt-2 inred">
          {title}
        </h3>
        <p className="font-sans  text-base text-neutral-300 qiukyu">
          {description}
        </p>
      </div>
    </div>
  );
};
