import React from 'react';

const SearchRestaurant = ({searchQuery, setSearchQuery}) => (
<form action="/" method="get">
<label htmlFor="header-search">
    <span className="visually-hidden">Search restaurants</span>
</label>
<input
    value={searchQuery}
    onInput={e => setSearchQuery(e.target.value)}
    type="text"
    id="header-search"
    placeholder="Search restaurant"
    name="s" 
/>

</form>
);
export default SearchRestaurant;