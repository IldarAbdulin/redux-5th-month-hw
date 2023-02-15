import { useLocation } from "react-router-dom"

export const MainPage = () => {
    const location = useLocation()
    console.log(location);
    return <>
        <h1>Main Page</h1>
        <p>UserName: {location.state}</p>
    </>
}