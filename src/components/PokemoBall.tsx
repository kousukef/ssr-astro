import type { FC } from "react";

export const ballBgList = ["red", "blue", "purple", "green"] as const;

type Props = {
  title: string;
  bgColor: typeof ballBgList[number];
  href?: string;
};
const PokemonBall: FC<Props> = ({ title, bgColor, href }) => {
  let bgColorStyle: string;
  switch (bgColor) {
    case "red":
      bgColorStyle = "bg-gradient-to-r from-red-200 to-red-500";
      break;
    case "blue":
      bgColorStyle = "bg-gradient-to-r from-sky-500 to-indigo-500";
      break;
    case "purple":
      bgColorStyle = "bg-gradient-to-r from-violet-500 to-fuchsia-500";
      break;
    case "green":
      bgColorStyle = "bg-gradient-to-r from-green-200 to-green-500";
      break;
  }

  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={
        "hover:scale-110 duration-300 drop-shadow-lg" +
        (href ? " cursor-pointer" : "")
      }
    >
      <div
        className={`rounded-tl-full  rounded-tr-full h-28 w-56 ${bgColorStyle}`}
      ></div>
      <div className="border-4 border-black relative">
        <div className="absolute border-4 border-black p-3 text-xl left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full whitespace-pre-wrap bg-white font-semibold text-center">
          {title.replace("\n", "\n")}
        </div>
      </div>
      <div className="rounded-bl-full rounded-br-full bg-white h-28 w-56"></div>
    </Wrapper>
  );
};

export default PokemonBall;
