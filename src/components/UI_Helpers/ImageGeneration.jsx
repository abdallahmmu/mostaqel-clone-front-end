import React from 'react'
import { generateNames } from '../../helpers/generateNames'


function ImageGeneration() {
  return (
    <div className='image-generation'>
        <span>{generateNames('Abdallah','Muhammed')}</span>
    </div>
  )
}

export default ImageGeneration