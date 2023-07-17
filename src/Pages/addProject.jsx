import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { AddProjectSchema } from "../Schemas/AddProjectSchema";
import { useDispatch } from "react-redux";
import { addingNewProject } from "../store/ProjectsSlice/ProjectsSlice";
import { useLoaderData, useNavigate } from "react-router-dom";
import Select from "react-select";
import CustomSelect from "../helpers/react-select";
import { useTranslation } from "react-i18next";

const addProject = () => {
  const { t } = useTranslation();

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
    console.log(newValues);
    dispatch(addingNewProject(newValues));
    swal({
      title: "Success",
      text: "projects added successfully",
      icon: "success",
    });

    navigate("/projects");
  };

  return (
    <div className="add-project mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Formik
              initialValues={{
                title: "",
                description: "",
                descriptionِAr: "",
                range: 1,
                categoryId: "",
                skillsIds: [],
              }}
              onSubmit={addNewProject}
              validationSchema={AddProjectSchema}
            >
              {() => (
                <Form>
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
                    <label htmlFor="description" className="form-label">
                      {t("Description")}
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
                      {t("Range")}
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
