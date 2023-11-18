import React from "react"
import ReactDOM from "react-dom/client"

const resData = [
    {
        resName: 'Meghana Foods',
        id: 'r1',
        resType: 'South Indian',
        avgRating: 4.3,
        avgTime: '24 mins'
    },
    {
        resName: 'KFC',
        id: 'r2',
        resType: 'Burger',
        avgRating: 4.1,
        avgTime: '34 mins'
    },
    {
        resName: 'Chineese corner',
        id: 'r3',
        resType: 'Chineese',
        avgRating: 4.5,
        avgTime: '20 mins'
    },
    {
        resName: 'Dominos',
        id: 'r4',
        resType: 'Pizza',
        avgRating: 4.0,
        avgTime: '26 mins'
    }
]
const title = (
    <div id="heading" tabIndex="1">OrderIt</div>
)
const userIcon = 
    (<div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>)
const Heading = () => (
    <div className="main-header">
        {title}
        {userIcon}
    </div>
)
const ResCard = ({resData}) => (
    <div className="res-card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9b36413c755d072ec34619ee585bef4" alt="" className="res-logo" />
        <h2>{resData.resName}</h2>
        <h5>{resData.resType}</h5>
        <h6>{resData.avgRating.toFixed(1)}</h6>
        <h6>{resData.avgTime}</h6>
    </div>
)
const ResContainer = () => (
    <div className="res-card-container">
        {
            resData.map(data => (
                <ResCard key={data.id} resData={data}></ResCard>
            ))
        }
    </div>
)
const searchbar = <input type="text" placeholder="Search..." className="search-input" />
const SearchComponent = () => (
    <div className="search-container">
        {searchbar}
        <button className="search-btn">Search</button>
    </div>
)
const MainBody = () => (
    <div>
        <SearchComponent />
        <ResContainer />
    </div>
)
const AppLayout = () => (
    <div>
        <Heading/>
        <MainBody />
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(AppLayout())