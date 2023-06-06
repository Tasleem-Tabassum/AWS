
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UploadImage() {
      const navigate = useNavigate()
  const [file, setFile] = useState({})
  const [images, setImages] = useState([])
      const handleSubmit = async(e) => {
        e.preventDefault()
    // if(fileSelected) {
      const formData = new FormData();
      formData.append('image', file);
    
    await  axios.post('http://localhost:8080/images/upload', formData, { headers: { 'Content-Type': 'multipart/form-data'}})
      .then((res) => {
        console.log('Image uploaded successfully:', res.data)
        alert('Image uploaded successfully...')
        navigate('/dashboard')
      }).catch(e => {
        console.log(e)
      })
      console.log('>>>',)
    // } else {
    //   console.log('No image selected');
    // } 
  }
  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='image' name='image'>Upload a file here: </label>
        <input type="file" name="image" accept="image/*"
        //  onChange={fileSelected}
         /><br/>
        <input type="submit" value="Upload"/>
      </form>
    </div>
    </div>
  )
}

export default UploadImage