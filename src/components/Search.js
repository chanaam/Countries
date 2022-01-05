import { useContext } from "react"
import { SearchContext } from "./BoxCountries"


export default function Search()
{
    const v=useContext(SearchContext)
    return <input 
            onChange={e=>v(e.target.value)}
            placeholder='search'
             type='search'>

    </input>
}