import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex w-max items-center justify-center rounded-md bg-gray-100 p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-[#ec2025] cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
 