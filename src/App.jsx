import React, { useState } from "react";
import SearchContainer from "./components/SearchContainer";
import ResultContainer from "./components/ResultContainer";
import { API_BASE_URL, API_KEY } from "./config";

const App = () => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `${API_BASE_URL}${event.target.searchInp.value}&appid=${API_KEY}`
    );
    const data = await response.json();

    if (response.status == 404) {
      setIsError(true);
      setData(null);
    } else {
      setData(data);
      setIsError(false);
    }
  };

  return (
    <div className="container bg-slate-950 h-screen flex justify-center items-center">
      <div className="cardContainer card w-11/12 max-w-md text-slate-50 m-24 rounded-2xl py-9 md:px-8 px-4 text-center">
        <SearchContainer handleSearchSubmit={handleSearchSubmit} setIsError={setIsError} />
        {isError ? (
          <div>
            <span class="error font-medium text-red-500 text-lg">
              Invalid City Name
            </span>
          </div>
        ) : (
          <ResultContainer data={data} />
        )}
      </div>
    </div>
  );
};

export default App;
