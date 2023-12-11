import React from 'react';
import InputCity from './InputCity/InputCity';
import SearchButton from './SearchButton/SearchButton';
import CityAsDefault from './CityAsDefault/CityAsDefault';
import './search.css';

const Search = ({ onFetched }) => {
    return (
        <div className='search mt-5 d-flex flex-column align-items-center' >
            <div className='d-flex flex-row justify-content-between' style={{width: "100%"}}>
                <InputCity />
                <SearchButton onFetched={onFetched} />
            </div>
            <CityAsDefault />
        </div>
    );
}

export default Search;
