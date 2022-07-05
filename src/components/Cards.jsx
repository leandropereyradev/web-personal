import React from "react";
import { ArrayCards } from "./ArrayCards";

const Cards = () => {
  return (
    <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10">
      {ArrayCards.map(({ title, image, url, github, id, skill }) => (
        <div
          key={id}
          className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href={url ? url : github} target="_blank" rel="noreferrer">
            <img className="rounded-t-lg" src={image} alt="" />
          </a>
          <div className="p-5">
            <a href={url ? url : github} target="_blank" rel="noreferrer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <div className="flex flex-row justify-around pt-5">
              {skill.length > 0 && skill.map((s, i) => <div key={i}>{s}</div>)}
            </div>
            <div className="flex flex-row gap-5 justify-center pt-5">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 text-sm font-medium text-center text-slate-50 bg-pink-500 rounded-lg hover:scale-125 transition"
                >
                  Ver Web
                </a>
              ) : (
                <></>
              )}
              {github ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 text-sm font-medium text-center text-slate-50 bg-pink-500 rounded-lg hover:scale-125 transition"
                >
                  Ver GitHub
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
