import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { AddProjectSchema } from '../Schemas/AddProjectSchema';
import { useDispatch } from 'react-redux';
import { addingNewProject } from '../store/ProjectsSlice/ProjectsSlice';
import axios from 'axios';
import swal from 'sweetalert';
import {  useNavigate } from 'react-router-dom';

const addProject = () => {

    const [cats, setCats] = useState([])


    const dispatch = useDispatch()
    const navigate = useNavigate()
   useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/category`).then(d =>{
            setCats(d.data.categories)
        })
        
   }, [])

    const addNewProject = (values) => {
        dispatch(addingNewProject(values))
        swal({
            title: "Success",
            text: "projects added successfully",
            icon: "success",
          })

          navigate('/projects')
    }
    return (
        <div className="add-project mt-5">
            <div className="container">

                <div>
                    <Formik
                        initialValues={{
                        title: 'new title', description: 'new dessc',
                        range: 50, categoryId: '6490b3f9bfaf60e0de89e55f' }}
                        onSubmit={addNewProject}
                        validationSchema={AddProjectSchema} >
                        {() => (

                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <Field
                                     
                                        className="form-control" 
                                        id="title" 
                                        type="text"
                                        name="title"
                                        />
                                    <ErrorMessage
                                        name="title"
                                        className="text-danger"
                                        component="div"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        className="form-control" 
                                        id="description"></Field>
                                    
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="range" className="form-label">Range</label>
                                    <Field
                                        type='number'
                                        name="range"
                                        className="form-control" id="range" min={1} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="range" className="form-label">category</label>
                                    <Field
                                        as='select'
                                        name="categoryId"
                                        className="form-control" id="range"  >
                                            {cats && cats.map(cat => (

                                                <option key={cat._id} value={cat._id}>{cat.title}</option>
                                            ))}
                                        </Field>
                                </div>

                                <button className="btn btn-primary" type="submit">
                                    Add
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default addProject