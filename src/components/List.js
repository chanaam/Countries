import ListItem from "./ListItem";


export default function List(props){

    const list=props.list
    return <ul>
        {list.map(c=>
        <ListItem 


        refreshView={props.refreshView}
        name={c.name.common}
        region={c.region}


        />)}
        
        
    </ul>
}