export const ResCard = ({resData}) => (
    <div className="res-card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9b36413c755d072ec34619ee585bef4" alt="" className="res-logo" />
        <h2>{resData.name}</h2>
        <h5>{resData.cuisines.join(', ')}</h5>
        <p>{resData.avgRating}</p>
        <p>{resData.costForTwo}</p>
        <p>{resData.areaName}</p>
    </div>
)