import axios from "axios"
import { resData } from "../utils/mockData"
import { ResCard } from "./RestCard"
import { useState, useEffect } from "react"
import { ShimmerUI } from "./Shimmer"
export const ResContainer = () => {
    const [resList, setResList] = useState([])
    const [restaurantData, setRestaurantData] = useState([])
    const [searchText, setSearchText] = useState("")
    const displayTopRes = () => {
        const filteredData = resList.filter(res => res.info.avgRating > 4)
        setRestaurantData(filteredData)
    }
    const onSearch = (e) => {
        // searchText = e.target.value
        // setSearchText(e.target.value)
        onRestaurantSearch(searchText)
    }
    const onRestaurantSearch = (e) => {
        console.log(e, resList)
        const filteredData = resList.filter(res => res.info.name.toLowerCase().includes(e.toLowerCase()))
        setRestaurantData(filteredData)
    }
    const fetchAPIData = async () =>{
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063433&lng=77.5856825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then(({data}) => {
            setResList(data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
            setRestaurantData(data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
        })
        .catch(err => {
            console.log('err', err)
        })
    }
    useEffect(() => {
        fetchAPIData()
    }, [])
    return resList.length === 0 ? <ShimmerUI /> : (
        <>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn" onClick={() => onSearch()}>Search</button>
            </div>
            <div>
                <button
                    onClick={() => displayTopRes()}
                >Top rated Restaurants</button>
            </div>
            <div className="res-card-container">
                {
                    restaurantData.map(data => (
                        <ResCard key={data.info.id} resData={data.info}></ResCard>
                    ))
                }
            </div>
        </>
)}