import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"

export const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([])
    useEffect(() =>{
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const fetchData = await fetch(MENU_URL + resId)
        const jsonData = await fetchData.json()
        setResInfo(jsonData.data.cards)
    }
    return resInfo
}