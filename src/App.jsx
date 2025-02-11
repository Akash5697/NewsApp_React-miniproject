import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const API_KEY = '8314a6a4e3824fe288974321dd32f68c';
  const [search, setSearch] = useState('india');
  const [newsData, setNewsData] = useState(null);

  const getData = async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`
    );
    const jsondata = await response.json();
    setNewsData(jsondata.articles);
  };

  useEffect(() => {
    getData(search);
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
    getData(category);
  };

  const categories = ['sports', 'politics', 'entertainment', 'health', 'fitness'];

  return (
    <>
      <div>
        <nav className="flex justify-center items-center gap-20 p-4 bg-amber-200 shadow-md">
          <h2 className="text-red-600 font-bold text-xl">NewsApp</h2>
          <h1 className="text-black font-bold text-base">Trending News</h1>
          <div className="flex gap-0.5">
            <input
              type="text"
              placeholder="Search News..."
              className="border border-black shadow-sm rounded-xl p-1 outline-none"
              value={search}
              onChange={handleInput}
            />
            <button
              className="bg-blue-600 text-white p-1 pl-4 pr-4 rounded-xl hover:bg-blue-700"
              onClick={() => getData(search)}
            >
              Search
            </button>
          </div>
        </nav>
        <h1 className="flex justify-center items-center text-black font-bold text-base m-2">
          Stay Updated With Trending News
        </h1>
        <div className="flex justify-center items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-orange-500 text-white p-1 pl-3 pr-3 m-1 rounded-full hover:bg-orange-700"
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div>{newsData ? <Card data={newsData} /> : null}</div>
      </div>
    </>
  );
}

export default App;
