import React, { useState } from 'react';
import './searchbar.scss';

const types = ["Buy", "rent"];

function Searchbar() {
    const [query, setQuery] = useState({
        type: "Buy",
        location: "",
        minprice: "0",
        maxprice: "0",
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className="searchbar">
            <div className="type">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input
                    type="text"
                    name="location"
                    placeholder="City location"
                />
                <input
                    type="number"
                    name="minprice"
                    min={0}
                    max={2000000}
                    placeholder="Min price"
                    
                />
                <input
                    type="number"
                    name="maxprice"
                    min={0}
                    max={2000000}
                    placeholder="Max price"
                    
                />
                <button >
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    );
}

export default Searchbar;
