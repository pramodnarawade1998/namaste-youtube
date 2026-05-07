import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    // Make an API Call after every Key Press
    // But, if the difference between two key strokes is < 200 ms Decline the API Call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {setSuggestions(searchCache[searchQuery]);} else {getSearchSuggestions();}}, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
  *
  * key - i
  * - Render the Component
  * - useEffect()
  * - Start Timer => Make API Call after 200 ms
  * 
  * key - i
  * - Destroy the Component (Run useEffect() return method)
  * - Re-render the Component
  * - useEffect()
  * - Start Timer => Make API Call after 200 ms
  * 
  */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    // console.log("API CALL" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // Update Cache
    dispatch(cacheResults({[searchQuery]: json[1]}));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb4+PiCgoIQEBCnp6fFxcXz8/OwsLB0dHTu7u76+vrd3d27u7uQkJB6enozMzPj4+NlZWUdHR2hoaHKyspeXl5vb28XFxc8PDxYWFiBgYHX19eStxeWAAACX0lEQVR4nO3dj04CMQzH8QmcggKK/BFF5f3fUi9okJi0O7akaff9PEF/uXGw0awpAQAAAAAAAAAAAAAAAEADZqvt2I/tajYs3uL5xp/nRX7AlXWxV1pl5uvW1pVebd1lBTxY11ngkBPR7xPsrfWAn9Y1FrrVAm6sKyy2URJurQsstpUD3lvXV8G9mPDBurwKHsSEc+vyKpiLCd+ty6vgXUxoXV0VjSfcWVdXwU5M+GFdXgUfYkKv+6a/5D3UyLq8CkZiwnRnXV+xOzlgmloXWGyqJEye97+9gxYwHa1LLHRUEzpfp+oa7b1YV1ngJSdgSjPrOq+WfSzc+dxEzbPOEn8sJt6O3NaTAUfeJ8vHkR+Py6HxAAAAAAAAAACAH91+OvFjuh/yv1PvaWz9X9Jg46cB+fY+m792SifN2a11qVdT29hPXq3rLPCaE/DNusoib3pA753ecpf3t866wmLa14bft8wv7W1jXV8FckC/zUJnctuQ/0WqLVN/P9b+G4sJ/bcIa03C1tVV0fgzjP85jP8ujf99GOFVIwcMsEy136Xx9xbx94cN7PEbOKfx/LbJPGtLaRT9vDTFP/PuRf/fAgAAAAAAAAAAOBL8nqjod32Fv6/Nb9tQ5p174e9NDH/3Zfz7S713mGrXCDtfoz1tnXp/hOpDjH+fd/w72ePfq++z3euSPBvBuroqGk8Yf86Mz23TJXlWkPcu757c6R1/Zlf8uWsNzM5z3MZ+ktHM7u2Q7VLGDMsG5pCmpd+v/bxZssnvHip3HnBqYKZzL/hcbgAAAAAAAAAAAAAAAADw6QtJMFO0DHiZNgAAAABJRU5ErkJggg=="
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border-gray-100">
          <ul>
            {suggestions.map(suggestion => <li key={suggestion} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {suggestion}</li>)}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dNYjy1R6m0kiKQH2cIQhkdeVHCECxvVJKw&s"
        />
      </div>
    </div>
  );
}

export default Head;
