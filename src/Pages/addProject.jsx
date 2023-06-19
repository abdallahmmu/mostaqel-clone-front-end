import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { AddProjectSchema } from '../Schemas/AddProjectSchema';

const addProject = () => {
    const addNewProject = () => {
        console.log(first)
    }
    return (
        <div className="add-project mt-5">
            <div className="container">

                <div>
                    <Formik
                        initialValues={{ title: '', description: '', range: 0 }}
                        onSubmit={addNewProject}
                        validationSchema={AddProjectSchema}
                    >
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