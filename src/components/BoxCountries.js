import { useEffect, useState,createContext } from "react"
import axios from "axios"
import List from "./List"
import Header from './Header';

export const SearchContext=createContext();

export default function BoxCountries()
{

    const 
        [countriesList,setContriesList]=useState([]),
        [searchValue,setSearchValue]=useState('')


    useEffect(getCountries,[])//only one read

    function  getCountries(){
        axios.get('https://restcountries.com/v3.1/all')
          .then(result=>setContriesList(result.data))
    }

    if(!countriesList) return 'loading'

    const filteredList= countriesList.filter(c=>c.name.common
        .toLowerCase()
        .startsWith(searchValue.toLowerCase()))


    return <main >
        <SearchContext.Provider value={setSearchValue}>
        <Header countriesNum={filteredList.length}/>
        </SearchContext.Provider>
        <List list={filteredList} refreshView={getCountries}/>
        
    </main>
}