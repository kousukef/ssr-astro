import { FC, useEffect, useState } from "react";
import type { IPokemon } from "pokeapi-typescript";

export const cardBgList = [
  "light-blue",
  "blue",
  "purple",
  "pink",
  "yellow",
] as const;

type Props = {
  pokemonId: number;
  bgColor: typeof cardBgList[number];
};

type Pokemon = {
  name: string;
  img: string;
};

const PokemonCard: FC<Props> = ({ pokemonId, bgColor }) => {
  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const pokemonData = (await data.json()) as unknown as IPokemon;

      setPokemon({
        name: pokemonData.name,
        img: pokemonData.sprites.front_default,
      });
    })();
  }, []);

  const [pokemon, setPokemon] = useState<Pokemon>({
    name: "",
    img: "",
  });

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
      href={`/pokemons/${pokemonId}`}
      className="w-48 rounded-md shadow-lg border bg-white border-gray-100 overflow-hidden cursor-pointer hover:scale-110 duration-300"
    >
      <div
        className={`w-full p-5 flex items-center justify-center ${bgColorStyle}`}
      >
        {pokemon.img ? (
          <img src={pokemon.img} alt="" width="96" height="96" />
        ) : (
          <svg
            className="animate-spin fill-sky-100"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 32.707 32.707"
          >
            <g>
              <path
                d="M21.477,4.511c0,2.487-2.021,4.508-4.508,4.508c-2.49,0-4.509-2.021-4.509-4.508c0-2.49,2.02-4.511,4.509-4.511
C19.458,0,21.477,2.021,21.477,4.511z M16.972,27.68c-1.386-0.002-2.513,1.119-2.517,2.508c-0.003,1.391,1.117,2.518,2.505,2.52
c1.39,0.004,2.517-1.117,2.519-2.506C19.484,28.811,18.361,27.684,16.972,27.68z M31.451,17.352c0-0.906-0.734-1.641-1.641-1.641
c-0.908,0-1.644,0.732-1.644,1.641c0,0.904,0.733,1.643,1.644,1.643C30.716,18.994,31.451,18.258,31.451,17.352z M6.995,17.352
c0-1.585-1.284-2.87-2.87-2.87s-2.869,1.285-2.869,2.87c0,1.584,1.283,2.869,2.869,2.869S6.995,18.936,6.995,17.352z M26.962,7.354
c-0.504-0.506-1.319-0.504-1.825,0c-0.505,0.506-0.505,1.328,0,1.832c0.506,0.506,1.321,0.506,1.825,0S27.466,7.86,26.962,7.354z
M9.973,24.354c-1.152-1.146-3.019-1.146-4.17-0.002c-1.151,1.146-1.152,3.012,0,4.16c1.152,1.148,3.018,1.15,4.168,0
C11.125,27.367,11.125,25.502,9.973,24.354z M27.251,27.631c0.658-0.662,0.658-1.734-0.002-2.396
c-0.658-0.658-1.726-0.658-2.385,0.004c-0.658,0.66-0.658,1.732,0,2.395C25.525,28.293,26.591,28.293,27.251,27.631z
M10.047,10.427c1.188-1.189,1.188-3.119,0-4.311c-1.188-1.189-3.115-1.189-4.305,0c-1.188,1.189-1.188,3.119,0.001,4.311
S8.858,11.618,10.047,10.427z"
              />
            </g>
          </svg>
        )}
      </div>
      <h3 className="text-center p-1 bg-white rounded-md font-semibold text-2xl shadow-sm shadow-green-200">
        {pokemon.name || "読み込み中..."}
      </h3>
    </a>
  );
};

export default PokemonCard;
