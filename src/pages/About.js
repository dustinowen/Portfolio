import './about.css'
import { useEffect, useState } from "react"

export default function About(props) {

    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch('./about.json')
        const data = await response.json()
        setAbout(data)
    }

    useEffect(() => { getAboutData() }, [])

    const loaded = () => (
        <div className='flex-container'>
            <div><h2 style={{textAlign: "center"}}>{about.name}</h2></div>
            {/* <div><h3>{about.email}</h3></div> */}
            <div><p>{about.bio}</p></div>
            <div><p>{about.bio2}</p></div>
        </div>
    )

    return about ? loaded() : <h1>Loading...</h1>
}
