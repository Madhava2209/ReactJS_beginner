import { SearchComponent } from "./SearchComponent"
import { ResContainer } from "./ResContainer"
import { useOnlineStatus } from "../utils/useOnlineStatus"
export const MainBody = () => {

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) return <h1>Looks like you are offline, please check your internet connection.</h1>
    return (
        <div>
        {/* <SearchComponent /> */}
        <ResContainer />
        </div>
    )
}