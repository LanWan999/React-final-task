import React from 'react'
import CapybaraForm from "../../components/capybarasGalleryComponents/CapybaraForm"

function CreateCapybaraPage() {
    return(
        <div>
            <h1>Add a Capybara</h1>

            <CapybaraForm
                image= ""
                name= ""
                description= ""
            />
        </div>
    )
}
export default CreateCapybaraPage