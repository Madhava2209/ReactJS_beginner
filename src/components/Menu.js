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
        console.log('json', jsonData.data.cards[0].card.card)
        setResInfo(jsonData.data.cards)
    }
    return (resInfo.length === 0) ? <ShimmerUI/> : (
        <div>
            <h1>{resInfo[0].card.card.info.name}</h1>
        </div>
    )
}