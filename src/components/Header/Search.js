import React, { useRef, useState, useContext } from 'react';
import "./Search.css";
import { ScrollContext } from '../context/ScrollProvider';

const Search = () => {

    const scrollRef = useContext(ScrollContext);



    const searchAniRef = useRef();
    const searchSuggestions = ["mobile", "laptop", "موبایل", "لپ تاپ"];
    const [suggestItems, setSuggestItems] = useState([])
    const [searchSuggestionsFlag, setSearchSuggestionsFlag] = useState(false);

    const searchOpration = (e) => {
        searchAniRef.current.style.display = "block";
        searchAniRef.current.className = "search-animation";
        e.target.style.backgroundColor = "#c3c3c3";
        setSearchSuggestionsFlag(true);
    }

    const searchBlur = (e) => {
        e.target.style.backgroundColor = "#D6D6DC"
        searchAniRef.current.style.display = "none";
    }


    const suggestionHandler = (e) => {

        const value = e.target.value;

        const fillteringSuggestion = searchSuggestions.filter(suggest => {
            return suggest.toLowerCase().startsWith(value.toLowerCase());
        });
        if (value) {
            setSuggestItems(fillteringSuggestion);
        } else {
            setSuggestItems([]);
        }


    }

    const scrollToTarget = () => {
        console.log(scrollRef);
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
        setSearchSuggestionsFlag(false);
    }

    return (
        <>
            <input type="search" placeholder=' 🔍 جستو جو' onBlur={searchBlur} onFocus={searchOpration} onKeyUp={suggestionHandler} />
            <div ref={searchAniRef} ></div>
            {
                searchSuggestionsFlag && (
                    <ul id="search-suggestions">
                        {suggestItems.map((item, key) => <li key={key} id="search-suggestions-item" onClick={scrollToTarget}>{item}</li>)}
                    </ul>
                )
            }
        </>
    )
}

export default Search;