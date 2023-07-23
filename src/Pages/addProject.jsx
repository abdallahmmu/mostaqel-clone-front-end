import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AddProjectSchema } from "../Schemas/AddProjectSchema";
import { useDispatch } from "react-redux";
import { addingNewProject } from "../store/ProjectsSlice/ProjectsSlice";
import { useLoaderData, useNavigate } from "react-router-dom";
import Select from "react-select";
import CustomSelect from "../helpers/react-select";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Button } from "@mui/material";

const addProject = () => {
  const { t } = useTranslation();

  const { categories, skills } = useLoaderData();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [skillsIds, setSkillsIds] = useState([]);
  const [arabic, setArbic] = useState("");
  const [file, setFile] = useState({});

  const addNewProject = (values) => {
    let sklsIds = [];
    values.skillsIds.map((skill) => {
      sklsIds.push(skill.id);
    });


    let newValues = {
      ...values,
      categoryId: values.categoryId.id,
      skillsIds: sklsIds
    };


    console.log(newValues)
    dispatch(addingNewProject(newValues));


    newValues.description_ar = arabic;

    // swal({
    //   title: "Success",
    //   text: "projects added successfully",
    //   icon: "success",
    // });

    // navigate("/projects");
  };
  const suggestArabic = async (eve) => {
    console.log(eve.target.value);
    made(eve.target.value);
  };
  async function made(text) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/translate`,
      {
        params: {
          text,
        },
      }
    );
    console.log(response);
    const data = await response.data;
    setArbic(data.translated);
  }

  const fileRef = useRef(null);
  const filesRef = useRef(null);




  return (
    <div className="add-project mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Formik
              initialValues={{
                title: "title one",
                description: "description English",
                description_ar: "description arabic",
                range: 10000,
                duration: 10,
                categoryId: "",
                skillsIds: [],
                file: null
              }}
              onSubmit={addNewProject}

            >
              {({ values, setFieldValue, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      {t("Title")}
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
                      {t("Description")}
                    </label>
                    <Field
                      as="textarea"
                      onBlur={(eve) => {
                        suggestArabic(eve);
                      }}
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
                    <label htmlFor="description_ar" className="form-label">
                      {t("Description In Arabic")}
                    </label>
                    <Field
                      as="textarea"
                      name="description_ar"
                      className="form-control"
                      id="description_ar"
                      value={arabic}
                      onChange={(e) => {
                        setArbic(e.target.value);
                      }}
                    />
                    <ErrorMessage
                      name="description_ar"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="file" className="form-label">
                      files (optional)
                    </label>
                    <input
                      style={{ display: 'none', }}
                      ref={fileRef}
                      hidded='true'
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const fl = e.currentTarget.files[0];
                        handleChange({ target: { name: "file", value: fl } });
                      }
                      }
                    />
                    {(Object.keys(file) > 0) && <span>images {JSON.stringify(file, null, 2)}</span>}
                    <Button
                      style={{ display: 'block' }}
                      variant="contained"
                      onClick={(e) => { e.preventDefault(); fileRef.current.click() }}>
                      file upload</Button>
                    <ErrorMessage
                      name="file"
                      className="text-danger"
                      component="div" />

                  </div>

                  {/* <div className="mb-3">
                    <label htmlFor="files" className="form-label">
                      files (optional)
                    </label>
                    <input
                      style={{ display: 'none' }}
                      ref={filesRef}
                      hidded='true'
                      multiple
                      name="files"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const fl = e.currentTarget.files;
                        handleChange({ target: { name: "files", value: [...fl] } });
                      }
                      }
                    />
                  
                    <Button
                      style={{ display: 'block' }}
                      variant="contained"
                      onClick={(e) => { e.preventDefault(); filesRef.current.click() }}>
                      file upload</Button>
                    <ErrorMessage
                      name="files"
                      className="text-danger"
                      component="div" />

                  </div> */}

                  <div className="mb-3">
                    <label htmlFor="range" className="form-label">
                      {t("Range")}
                    </label>
                    <Field
                      type="number"
                      name="range"
                      className="form-control"
                      id="range"
                      min={1}
                    />
                    <ErrorMessage
                      name="range"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="range" className="form-label">
                      Duration in  Days
                    </label>
                    <Field
                      type="number"
                      name="duration"
                      className="form-control"
                      id="duration"
                      min={1}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categories" className="form-label">
                      {t("category")}
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
                      {t("Skills")}
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
                    {t("Add")}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-lg-4 col-md-12 pt-2" style={{ lineHeight: 1.5 }}>
            <h4 className="heada__title">
              {" "}
              {t("Start completing your project")}
            </h4>
            <p>
              {t(
                "You can complete your project the way you want through Mostaqel, Enter the project details, budget and the expected duration to be reviewed and published for free, after that, it will appear to the freelancers on the project page so they can submit their offers on it and you can choose the most suitable offer for you, and the freelancer starts implementing the project"
              )}
            </p>
            <br />
            <h4 className="heada__title">
              {t("Mostaqel website guarantees your rights")}
            </h4>
            <p>
              {t(
                "Mostaqel acts as an intermediary between you and the freelancer you hire to implement Your project, only after the freelancer completes the whole project, the money will be transfered to his account"
              )}
            </p>
            <br />
            <h4 className="heada__title">
              {t("Tips for a successful business")}
            </h4>
            <ul>
              <li>
                {" "}
                {t("Clarify all the details and tasks to be accomplished")}
              </li>
              <li>
                {" "}
                {t(
                  "Fill in all fields and provide examples of what you want to excute"
                )}{" "}
              </li>
              <li>
                {" "}
                {t(
                  "Break large projects and tasks into several small phases"
                )}{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addProject;
