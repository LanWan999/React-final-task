import React from 'react'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { API_URL } from "../../../config"
import axios from "axios"
import { useNavigate } from "react-router"
import NavigationBar from '../../components/NavigationBar'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 40px;
  color: #574631;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
    background-color: rgb(228, 194, 120);
    padding: 10px 10px;
    border-radius: 6px;
    font-size: 15px;
`;

const StyledLink = styled(Link)`
    background-color: rgb(228, 194, 120);
    padding: 10px 10px;
    border-radius: 6px;
    font-size: 15px;
    text-decoration: none;
    color: black;
    margin-left: 10px;
`;


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
            <Image src={capybara.image} alt={capybara.name} />
            <Title >{capybara.name}</Title>
            <Paragraph>{capybara.description}</Paragraph>
            <div className="controls">
                <Button onClick={deleteHandler}>Delete</Button>
                <StyledLink to={`/project/capybaras/edit/${id}`}>Edit</StyledLink>
            </div>
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