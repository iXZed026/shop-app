import React ,{useRef}from 'react';
import "./Search.css";

const Search = () => {

    const searchAniRef = useRef();

    const searchOpration = (e)=>{
            searchAniRef.current.style.display = "block";
            searchAniRef.current.className = "search-animation";
            e.target.style.backgroundColor = "#c3c3c3";
        }
        
        const searchBlur = (e)=>{
            e.target.style.backgroundColor = "#D6D6DC"
            searchAniRef.current.style.display = "none";
    }

    return (
        <>
            <input type="search" placeholder=' 🔍 جستو جو در الدیجیتال' onBlur={searchBlur} onFocus={searchOpration}/>
            <div ref={searchAniRef} ></div>
            <ul id="suggestion-search">
                
            </ul>
        </>
    )
}

export default Search