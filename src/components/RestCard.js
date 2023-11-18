export const ResCard = ({resData}) => (
    <div className="res-card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9b36413c755d072ec34619ee585bef4" alt="" className="res-logo" />
        <h2>{resData.resName}</h2>
        <h5>{resData.resType}</h5>
        <h6>{resData.avgRating.toFixed(1)}</h6>
        <h6>{resData.avgTime}</h6>
    </div>
)