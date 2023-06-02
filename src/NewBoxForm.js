import React, { useState } from "react";
import {v4 as uuid} from 'uuid';

const NewBoxForm = ({addBox}) => {
  const initialState = {
    width: '',
    height: '',
    color: ''
  }

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData, id: uuid()});
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width (10-300) </label>
      <input 
        id="width"
        type="number"
        name="width"
        min="10"
        max="300"
        value={formData.width}
        onChange={handleChange}
        />
      <br></br>

      <label htmlFor="height">Height (10-300) </label>
      <input 
        id="height"
        type="number"
        name="height"
        min="10"
        max="300"
        value={formData.height}
        onChange={handleChange}
        />
      <br></br>

      <label htmlFor="color">Color </label>
      <input 
        id="color"
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        />  
      <br></br>
      <button>Create Box</button>
    </form>
  )

}

export default NewBoxForm;