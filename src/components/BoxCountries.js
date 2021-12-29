import { useEffect, useState } from "react"
import axios from "axios"
import List from "./List"

export default function ListCountries()
{

    const [countriesList,setContriesList]=useState([])

    useEffect(getCountries,[])//only one read

    function  getCountries(){
        axios.get('https://restcountries.com/v3.1/all')
          .then(result=>setContriesList(result.data))
    }

    
    console.log(countriesList);


    return <div className="listCountries">
        <List list={countriesList.filter(c=>c.name)} refreshView={getCountries}/>
        
    </div>
}