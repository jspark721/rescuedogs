import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); // the default state, first state. This is a hook, all hooks begin with "use"
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" onChange={event => setLocation(event.target.value)}/>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams; 