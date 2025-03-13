import React from 'react'
import GalleryPhotosList from '../components/GalleryPhotosList'
import '../CSS/galleryPage.css'
import NavigationBar from '../components/NavigationBar'

const GalleryPage = () => {
    return(
        <div>
            <NavigationBar/>
            <GalleryPhotosList/>
        </div>
    )
}
export default GalleryPage