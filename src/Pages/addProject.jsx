import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { AddProjectSchema } from "../Schemas/AddProjectSchema";
import { useDispatch } from "react-redux";
import { addingNewProject } from "../store/ProjectsSlice/ProjectsSlice";
import { useLoaderData, useNavigate } from "react-router-dom";
import Select from "react-select";
import CustomSelect from "../helpers/react-select";


const addProject = () => {
  const { categories, skills } = useLoaderData();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [skillsIds, setSkillsIds] = useState([]);

  const addNewProject = (values) => {
    let sklsIds = [];
    values.skillsIds.map((skill) => {
      sklsIds.push(skill.id);
    });

    let newValues = {
      ...values,
      categoryId: values.categoryId.id,
      skillsIds: sklsIds,
    };
   fetch(`https://api.pawan.krd/gtranslate?from=eng&to=ar&text=${newValues.description}`).then((res)=>{
    console.log(res);
   })
   console.log(newValues)
    // dispatch(addingNewProject(newValues));
    // swal({
    //   title: "Success",
    //   text: "projects added successfully",
    //   icon: "success",
    // });

    // navigate("/projects");
  };

  return (
    <div className="add-project mt-5">
      <div className="container">
        <div>
          <Formik
            initialValues={{
              title: "projec ttitle",
              description: "projec tdscriprvdfv",
              range: 200,
              categoryId: "6490b3f9bfaf60e0de89e55f",
              skillsIds: ['64a464c6a7b0bdc692e7b768', '64a464e6a7b0bdc692e7b76d', '64a464efa7b0bdc692e7b76f'],
            }}
            onSubmit={addNewProject}
            validationSchema={AddProjectSchema}
          >
            {() => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
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
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    className="form-control"
                    id="description"
                  />
                  <ErrorMessage
                    name="description"
                    className="text-danger"
                    component="div"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="range" className="form-label">
                    Range
                  </label>
                  <Field
                    type="number"
                    name="range"
                    className="form-control"
                    id="range"
                    min={1}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="categories" className="form-label">
                    category
                  </label>

                  <CustomSelect
                    name="categoryId"
                    options={categories}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    isMulti={false}
                    value="ahmed"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">
                    skills
                  </label>

                  <CustomSelect
                    name="skillsIds"
                    options={skills}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    closeMenuOnSelect={false}
                  />
                </div>

                <button className="btn btn-primary mb-5" type="submit">
                  Add
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default addProject;
