import type { FC } from "react";

type Props = {
  title: string;
  body: string | JSX.Element;
  bgColor: "light-blue" | "blue" | "purple" | "pink";
  href?: string;
};

const Card: FC<Props> = ({ title, body, bgColor, href }) => {
  let bgColorStyle: string;
  switch (bgColor) {
    case "light-blue":
      bgColorStyle = "bg-gradient-to-r from-cyan-500 to-blue-500";
      break;
    case "blue":
      bgColorStyle = "bg-gradient-to-r from-sky-500 to-indigo-500";
      break;
    case "purple":
      bgColorStyle = "bg-gradient-to-r from-violet-500 to-fuchsia-500";
      break;
    case "pink":
      bgColorStyle = "bg-gradient-to-r from-purple-500 to-pink-500";
      break;
  }

  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="w-72 rounded-md shadow-lg border bg-white border-gray-100 overflow-hidden cursor-pointer hover:scale-110 duration-300"
    >
      <div className={`w-full p-5 ${bgColorStyle}`}>
        <h3 className="text-center p-1 bg-white rounded-md font-semibold text-2xl shadow-sm shadow-green-200">
          {title}
        </h3>
      </div>
      <p className="text-base p-5">{body}</p>
    </Wrapper>
  );
};

export default Card;
