import { useEffect, useState } from "react"
import { ShimmerUI } from "./Shimmer"
import { MENU_URL } from "../utils/constants"
import { useParams } from "react-router-dom"

export const Menu = () => {
    const [resInfo, setResInfo] = useState([])
    useEffect(() => {
        fetchMenu()
    }, [])
    const {resId} = useParams()
    const fetchMenu = async () =>{
        const data = await fetch( MENU_URL + resId)
        const jsonData = await data.json() 
        console.log('json', jsonData.data.cards)
        setResInfo(jsonData.data.cards)
    }
    if(resInfo.length === 0) return <ShimmerUI/>
    const {name, costForTwoMessage, cuisines} = resInfo[0].card.card.info
    const resMenu = resInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    return (
        <div>
            <h1>{name}</h1>
            <h5>{cuisines.join(', ')}</h5>
            <p>{costForTwoMessage}</p>
            <br /><br />
            {
                resMenu !== undefined ? 
            <ul>
                {resMenu.map(res =>{
                    return (
                        <li key={res.card.info.id}><b>{res.card.info.name}</b> - <i><b>Rs:</b> {res.card.info.price/100}</i></li>
                    )
                })}
            </ul> : null
            }
        </div>
    )
}