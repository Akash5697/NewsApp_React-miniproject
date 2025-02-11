import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {data.map((currItem) => {
        if (!currItem.urlToImage) {
          return null;
        }
        return (
          <div
            key={currItem.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-auto"
          >
            <img
              className="w-full h-48 object-cover"
              src={currItem.urlToImage}
              alt={currItem.title}
            />
            <div className="px-6 py-4">
              <a
                href={currItem.url}
                className="font-bold text-xl mb-2 text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(currItem.url);
                }}
              >
                {currItem.title}
              </a>
              <p className="text-gray-700 text-base mt-2">
                {currItem.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.open(currItem.url)}
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
