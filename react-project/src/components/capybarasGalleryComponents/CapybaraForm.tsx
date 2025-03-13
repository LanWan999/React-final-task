import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../../config"
import axios from "axios"
import { useNavigate } from "react-router"

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

function CapybaraForm(props: CapybaraFormProps) {
    const { editCapybaraData } = props

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [capybaraId, setCapybaraId] =useState<number | null>(null)

    const [capybaras, setCapybaras] = useState<{ id: string; name: string }[] | null>(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCapybaras = async () => {
            const res = await fetch(`${API_URL}/capybaras`)
            const capybarasData = await res.json()

            setCapybaras(capybarasData)

            if (editCapybaraData) {
                console.log('editing')

                setCapybaraId(editCapybaraData.id)
                setImage(editCapybaraData.image)
                setName(editCapybaraData.name)
                setDescription(editCapybaraData.description)
            } else {
                setDescription(capybarasData[0].id)
            }

        }

        fetchCapybaras()
    }, [editCapybaraData])
    
    const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setImage(event.target.value)
    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    const descriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!name || !description) {
            setError('Title and body is required')
            return
        }

        const newCapybara = {
            image,
            name,
            description
        }

        

        if (editCapybaraData) {
            const { data } = await axios.put(`${API_URL}/capybaras/${capybaraId}`, newCapybara)
            navigate('/project/capybaras/' + data.id)
        } else {
            const { data } = await axios.post(`${API_URL}/capybaras`, newCapybara)
            navigate('/project/capybaras/' + data.id)
        }
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" id="image"  value={image} onChange={imageHandler}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"  value={name} onChange={nameHandler}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description"  value={description} onChange={descriptionHandler}/>
                </div>
                <button type='submit'>
                    {editCapybaraData ? 'Edit Capybara' : 'Add a Capybara'}
                </button>

                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
export default CapybaraForm