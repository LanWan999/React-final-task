import React from 'react'
import '../../CSS/capybarasPage.css'
import NavigationBar from '../../components/NavigationBar'
import axios from 'axios'
import { API_URL } from "../../../config"
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Footer from '../../components/Footer'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 40px;
  color: #574631;
`;

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
            <Title>Meet our Capybaras</Title>
            <div>
                {capybaras.length > 0 && (
                    <div className='photo-card'>
                        {capybaras.map(capybara => (
                            <div key={capybara.id}>
                                <img src={capybara.image} alt={capybara.name} />
                                <Link className='capybara-name' to={`/project/capybaras/${capybara.id}`}>
                                    <div>{capybara.name}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <button className='capybara-button'><Link className='add-capybara-link' to='/project/capybaras/create'>Add a Capybara</Link></button>
            <Footer />
        </div>
    )
}
export default CapybarasPage