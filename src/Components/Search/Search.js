import React from 'react';
import InputCity from './InputCity/InputCity';
import SearchButton from './SearchButton/SearchButton';
import CityAsDefault from './CityAsDefault/CityAsDefault';

const Search = ({ onFetched }) => {
    return (
        <div className='mt-5 d-flex flex-column align-items-center' style={{width: "500px"}}>
            <div className='d-flex flex-row justify-content-between' style={{width: "100%"}}>
                <InputCity />
                <SearchButton onFetched={onFetched} />
            </div>
            <CityAsDefault />
        </div>
    );
}

export default Search;
