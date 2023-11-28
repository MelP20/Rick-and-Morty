import React from 'react';


const Search = ({ setSearchTerm }) => { 

return (
    <div>
      <input
        type="text"
        placeholder="Search characters"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};


export default Search;