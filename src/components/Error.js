import { useRouteError } from "react-router-dom"

export const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Oops!</h1>
            <h3>Something went wrong</h3>
            <p>{error.status}: {error.statusText}</p>
            <p>{error.data}</p>
        </div>
    )
}