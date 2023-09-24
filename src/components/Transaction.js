import Item from "./Item"
import "./Transaction.css"

const Transaction =(props)=>{
    const {items} = props   
    return(
        <div>
            <ui className="item-list">
                {items.map((e)=>{        /*Loop*/
                /*use prop-types*/
                    return <Item title={e.title} amount={e.amo4unt} key={e.id}/>
                })}
            
            
            </ui>
        </div>
        
    )
}

export default Transaction