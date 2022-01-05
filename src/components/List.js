import ListItem from "./ListItem";


export default function List(props){

    const {list}=props

    return <ul className="listCountries">
        {list.map(c=><ListItem  {...c}/>)}
    
    </ul>
}