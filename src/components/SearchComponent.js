const searchbar = <input type="text" placeholder="Search..." className="search-input" />
export const SearchComponent = () => (
    <div className="search-container">
        {searchbar}
        <button className="search-btn">Search</button>
    </div>
)