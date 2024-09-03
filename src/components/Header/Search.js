import React, { useRef, useState, useContext } from 'react';
import "./Search.css";
import { ScrollContext } from '../context/ScrollProvider';
import { products as productsComp } from '../data/ProductsData';

const Search = () => {

    const scrollRef = useContext(ScrollContext);
    const [products, setProducts] = useState(productsComp);


    const searchAniRef = useRef();
    const searchSuggestions = ["mobile", "laptop", "موبایل", "لپ تاپ"];
    const [suggestItems, setSuggestItems] = useState([])
    const [searchSuggestionsFlag, setSearchSuggestionsFlag] = useState(false);

    const searchOpration = (e) => {
        setSuggestItems([])
        searchAniRef.current.style.display = "block";
        searchAniRef.current.className = "search-animation";
        e.target.style.backgroundColor = "#c3c3c3";
        setSearchSuggestionsFlag(true);
        if (!searchSuggestionsFlag) {
            e.target.value = ""
        }
    }

    const searchBlur = (e) => {
        e.target.style.backgroundColor = "#D6D6DC"
        searchAniRef.current.style.display = "none";
        e.target.value = ""
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

    const scrollToTarget = (e) => {

        const value = e.target.innerHTML;

        let filterProduct = productsComp.filter(product => {
            if (value.startsWith("لپ")) {
                return product.pType === "laptop"
            }
        });

        console.log(filterProduct);


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