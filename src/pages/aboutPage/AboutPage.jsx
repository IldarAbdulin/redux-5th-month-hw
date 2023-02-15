import { useNavigate } from "react-router-dom"

export const AboutPage = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return <>
        <button onClick={goBack}>Back</button>
        <h1>About Page</h1>
    </>
}