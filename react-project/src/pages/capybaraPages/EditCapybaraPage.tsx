import React from 'react'
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { API_URL } from "../../../config"
import axios, { AxiosError } from "axios"
import CapybaraForm from '../../components/capybarasGalleryComponents/CapybaraForm'
import NavigationBar from '../../components/NavigationBar'

type CapybaraFormProps = {
    image: string
    name: string
    description: string
    editCapybaraData?: { 
        id: number
        image: string
        name: string
        description: string
    }
}


function EditCapybaraPage() {

    const { id } = useParams()
    

    const [capybara, setCapybara] = useState<CapybaraFormProps["editCapybaraData"] | null>(null)
    const [error, setError] = useState('')
    

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const { data } = await axios(`${API_URL}/capybaras/${id}`)
                setCapybara(data)
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log(error)
                    setError(error.message)
                } else {
                    setError('Unexpected error')
                }
            }
        }
        fetchData()
    }, [id])

    if (error) {
        return <p>{error}</p>
    }

    if (!capybara) {
        return "Loading..."
    }

    const { image, name, description } = capybara || {}

    return(
        <div>
            <NavigationBar/>
            <h1>Edit Capybara id: {id}</h1>
            
            <CapybaraForm 
                image={image}
                name={name}
                description={description}
                editCapybaraData={capybara}
            />
        </div>
    )
}

export default EditCapybaraPage