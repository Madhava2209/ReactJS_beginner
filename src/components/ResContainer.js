import { resData } from "../utils/mockData"
import { ResCard } from "./RestCard"
import { useState } from "react"
export const ResContainer = () => {
    const [restaurantData, setRestaurantData] = useState(resData)
    let [searchText, setSearchText] = useState("")
    const displayTopRes = () => {
        const filteredData = restaurantData.filter(res => res.avgRating > 4)
        setRestaurantData(filteredData)
    }
    const onSearch = (e) => {
        searchText = e.target.value
        onRestaurantSearch(searchText)
    }
    const onRestaurantSearch = (e) => {
        const filteredData = resData.filter(res => res.resName.toLowerCase().includes(e.toLowerCase()))
        setRestaurantData(filteredData)
    }
    return (
        <>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" onChange={(e) => onSearch(e)} />
                <button className="search-btn">Search</button>
            </div>
            <div>
                <button
                    onClick={() => displayTopRes()}
                >Top rated Restaurants</button>
            </div>
            <div className="res-card-container">
                {
                    restaurantData.map(data => (
                        <ResCard key={data.id} resData={data}></ResCard>
                    ))
                }
            </div>
        </>
)}