import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from "../../config"

type Photo = {
    id: string
    image: string
    name: string
    description: string
}

const GalleryPhotosList = () => {

    const [ photos, setPhotos ] = useState<Photo[] | null>(null)

    useEffect(() => {
        const fetchPhotos = async () => {

            const { data } = await axios(`${API_URL}/photos`)
            setPhotos(data)
        }

        fetchPhotos()
    }, [])

    if (!photos) {
        return 'Loading...'
    }

    if (photos.length === 0) {
        return <div>No capybaras found</div>
    }

    return(
        <div>
            <h1>Meet our Capybaras</h1>
            <div>
                {photos.length > 0 && (
                    <ul className='photo-card'>
                        {photos.map(photo => (
                            <li key={photo.id}>
                                <img src={photo.image} alt={photo.name} />
                                <div>{photo.name}</div>
                                <div>{photo.description}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <h3>Visitor's comments:</h3>
        </div>
    )
}
export default GalleryPhotosList