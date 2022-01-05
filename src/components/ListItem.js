

export default function ListItem(props)
{
    const{flags,name,capital,region}=props

    return <li>

       <div>
           <img src={flags.png} className="flag"/>
       </div>

       <div className="flex">
           <lable><strong>{name.common}</strong>-{capital}</lable>
           <lable>{region}</lable>
       </div>
    </li>
}