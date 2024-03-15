import { useRouteError } from "react-router-dom"

export let Error = () =>{
    let arr = useRouteError()
    return(
        <div className="error-page">
            <h1>OOPS! SORRY </h1>
            <h1>{arr.status},{arr.statusText}</h1>
        </div>
    )
}

