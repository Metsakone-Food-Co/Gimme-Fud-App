import React from 'react';

const SearchCourses = ({searchQuery, setSearchQuery}) => (
<form action="/" method="get">
<label htmlFor="header-search">
    <span className="visually-hidden">Search courses</span>
</label>
<input
    value={searchQuery}
    onInput={e => setSearchQuery(e.target.value)}
    type="text"
    id="header-search"
    placeholder="Search course"
    name="s" 
/>

</form>
);
export default SearchCourses;