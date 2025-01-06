import { apiList } from "./apiList";
import { useState } from "react";

export default function Home() {
  const [api, setApi] = useState({});

  const getRandomApi = () => {
    const randomNum = Math.floor(Math.random() * 224) + 1;
    const randomApi = apiList.find((api) => api.id === randomNum);
    console.log(randomApi);
    setApi(randomApi);
  };

  return (
    <div>
      <button type="button" onClick={getRandomApi}>
        Get Random API
      </button>

      <h2>
        <a href={api.link} target="_blank">
          {api.name}
        </a>
      </h2>
      <p>{api.description}</p>
    </div>
  );
}
