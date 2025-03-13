import React from 'react'
import '../../CSS/galleryPage.css'
import NavigationBar from '../../components/NavigationBar'
import axios from 'axios'
import { API_URL } from "../../../config"
import { useState, useEffect } from 'react'
import { Link } from 'react-router'


type Capybara = {
    id: number,
    image: string,
    name: string,
    description: string
}

const CapybarasPage = () => {

    const [ capybaras, setCapybaras ] = useState<Capybara[] | null>(null)

    useEffect(() => {
        const fetchCapybaras = async () => {

            const { data } = await axios(`${API_URL}/capybaras`)
            setCapybaras(data)
        }

        fetchCapybaras()
    }, [])

    if (!capybaras) {
        return 'Loading...'
    }

    if (capybaras.length === 0) {
        return <div>No capybaras found</div>
    }

    return(
        <div>
            <NavigationBar/>
            <h1>Meet our Capybaras</h1>
            <div>
                {capybaras.length > 0 && (
                    <div className='photo-card'>
                        {capybaras.map(capybara => (
                            <div key={capybara.id}>
                                <img src={capybara.image} alt={capybara.name} />
                                <Link to={`/project/capybaras/${capybara.id}`}>{capybara.name}</Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Link to='/project/capybaras/create'>Add a Capybara</Link>
        </div>
    )
}
export default CapybarasPage