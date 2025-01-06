import { apiList } from "./apiList";
import { appCategories } from "./appCategories";
import { useState } from "react";

export default function Home() {
  const [api, setApi] = useState({});
  const [category, setCategory] = useState("");

  const getRandomApi = () => {
    const randomNum = Math.floor(Math.random() * 224) + 1;
    const randomApi = apiList.find((api) => api.id === randomNum);
    setApi(randomApi);
  };

  const getRandomCategory = () => {
    const randomNum = Math.floor(Math.random() * 25);
    const randomCategory = appCategories[randomNum];
    setCategory(randomCategory);
  };

  const getRandomProjectIdea = () => {
    getRandomApi();
    getRandomCategory();
  };

  return (
    <div>
      <h1>Random Project Idea Generator</h1>
      {category !== "" ? (
        <h2>
          Build a <span className="italic">{category}</span> app using the
          following API:
        </h2>
      ) : (
        <h2>Press the button to generate a random API and App Category</h2>
      )}
      <h3>
        <a href={api.link} target="_blank">
          {api.name}
        </a>
      </h3>
      <p>{api.description}</p>
      <button type="button" onClick={getRandomProjectIdea}>
        Get Random Project Idea
      </button>
    </div>
  );
}
