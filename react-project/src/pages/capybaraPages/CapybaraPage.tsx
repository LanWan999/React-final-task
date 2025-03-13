import React from 'react'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { API_URL } from "../../../config"
import axios from "axios"
import { useNavigate } from "react-router"
import NavigationBar from '../../components/NavigationBar'

type Comment = {
    id: string,
    username: string
    body: string
    date: string
}

type Capybara = {
    id: number,
    image: string,
    name: string,
    description: string
    comments: Comment[]
}


function CapybaraPage() {
    const { id } = useParams()

    const [capybara, setCapybara] = useState<Capybara | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchCapybara = async () => {
            const res = await fetch(`${API_URL}/capybaras/${id}/?_embed=comments`)
            const capybaraData = await res.json()
            setCapybara(capybaraData)
        }
        fetchCapybara()
    }, [id])


    if (!capybara) {
        return <p>Loading...</p>
    }

    const deleteHandler = () => {
        axios.delete(`${API_URL}/capybaras/${id}/?_embed=comments`)
        navigate('/project/capybaras')
    }

    return(
        <div>
            <NavigationBar/>
            <div className="controls">
                <button onClick={deleteHandler}>Delete</button>
                <Link to={`/project/capybaras/edit/${id}`}>Edit</Link>
            </div>
            <img src={capybara.image} alt={capybara.name} />
            <p>{capybara.name}</p>
            <p>{capybara.description}</p>
            {capybara.comments.map(comment => (
                <p key={comment.id}>
                    <div>{comment.username}</div>
                    <div>{comment.body}</div>
                    <p>{comment.date}</p>
                </p>
            ))}
        </div>
    )
}
export default CapybaraPage