import './about.css'
import Dustin from "../assets/imgs/Dustin.png"
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
            
            <div>
                <h2>Who is Dustin? <img className="about-img" src={Dustin} />
                    {/* I'm glad you asked!</h2> */}
                    Glad you asked!</h2>



                <br />{about.bio}<br />
            <br />{about.bio2}</div>
        </div>
    )

    return about ? loaded() : <h1></h1>
}
