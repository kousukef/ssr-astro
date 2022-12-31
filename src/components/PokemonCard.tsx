import type { FC } from "react";
import type { IPokemon } from "pokeapi-typescript";

export const cardBgList = [
  "light-blue",
  "blue",
  "purple",
  "pink",
  "yellow",
] as const;

type Props = {
  pokemon: IPokemon;
  bgColor: typeof cardBgList[number];
};

const PokemonCard: FC<Props> = ({ pokemon, bgColor }) => {
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
    case "yellow":
      bgColorStyle = "bg-gradient-to-r from-yellow-500 to-rose-500";
      break;
  }
  return (
    <a
      href={`/pokemons/${pokemon.id}`}
      className="w-48 rounded-md shadow-lg border bg-white border-gray-100 overflow-hidden cursor-pointer hover:scale-110 duration-300"
    >
      <div
        className={`w-full p-5 flex items-center justify-center ${bgColorStyle}`}
      >
        <img
          src={pokemon.sprites.front_default}
          alt=""
          width="96"
          height="96"
          loading="lazy"
        />
      </div>
      <h3 className="text-center p-1 bg-white rounded-md font-semibold text-2xl shadow-sm shadow-green-200">
        {pokemon.name}
      </h3>
    </a>
  );
};

export default PokemonCard;
