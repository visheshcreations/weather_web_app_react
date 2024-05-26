import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchContainer = ({ handleSearchSubmit,setIsError }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current?.focus?.();
  }, []);

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="search w-full flex justify-between items-center"
    >
      <input
        className="bg-green-100 text py-2 px-5 h-12 rounded-full flex-1 mr-2 text-lg text-gray-700"
        type="search"
        ref={inputRef}
        name="searchInp"
        onChange={()=>setIsError(false)}
        placeholder="Enter city name..."
        spellCheck="false"
      />
      <button
        type="submit"
        className="searchBtn bg-green-100 rounded-3xl w-12 h-12 cursor-pointer text-gray-700 text-xl flex justify-center items-center"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchContainer;
