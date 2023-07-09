import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';
import axios from 'axios';
import { Slider } from '@mui/material';
const ProjectsListFilter = () => {
    const fundMin = useRef();
    const dispatch = useDispatch()
    const [cats, setCats] = useState([])
    const [skills, setSkills] = useState([])
    const handleProjectsSearch = (e) => {

        dispatch(getAllProjects({ keyword: e.target.value }))
    }

    const handleFundSlider = (e) => {
        fundMin.current.innerHTML = e.target.value
        dispatch(getAllProjects({ range: e.target.value }))
    }
    const handleCategory = (e) => {
        if (e.target.checked) {
            dispatch(getAllProjects({ categoryId: e.target.value }))
        } else {
            dispatch(getAllProjects({}))

        }
    }
    const handleSkills = (e) => {
        let skillsIds = '';
        if (e) {

            e.map((skill, ind) => {
                if (ind == 0) {
                    skillsIds += skill.value;
                } else {
                    skillsIds += skill.value + ',';
                }

                dispatch(getAllProjects({ skillsIds }))
            })
        }

    }
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/category`).then(d => {
            setCats(d.data.categories)
        })
        axios.get(`${import.meta.env.VITE_API_URL}/skills`).then(d => {
            setSkills(d.data.results)
        })

    }, [])
    const [sliderValue, setSliderValue] = useState(50); // initial value is 50

    const handleSlider = (event, newSliderValue) => {
      setSliderValue(newSliderValue);
      dispatch(getAllProjects({ range: newSliderValue }))
    };
    return (
        <div className="filter-side">
            <div className="search">
                <div className="search-title mb-2 h5"> Search </div>
                <div className="form-group">
                    <input className="form-control" type="text" onChange={handleProjectsSearch} />
                </div>
            </div>
            <div className="category">
                <div className="category-title my-2 h5">Category</div>
                <ul className="list-unstyled">

                    {cats && cats.map(cat => (

                        <li key={cat._id} className="cat">
                            <input type="checkbox" name="categoryId"
                                onClick={handleCategory} id="cat" value={cat._id} /> {cat.title}

                        </li>
                    ))}

                </ul>
            </div>
            <div className="skills">
                <div className="skills-title my-2 h5">Skills</div>
                <div className="form-group">

                    <Select isMulti
                        onChange={handleSkills}
                        options={

                            skills.map(skill => (
                                { value: skill._id, label: skill.name }
                            ))
                        } />
                </div>
            </div>
            <div className="fund">
                <div className="fund-title my-2 h5">Fund Slider</div>
                
                <Slider
                    value={sliderValue}
                    onChange={handleSlider}
                    aria-label="slider"
                    min={0}
                    max={100}
                    step={20}
                />
                <p>Range: {sliderValue}</p>

            </div>
        </div>
    )
}

export default ProjectsListFilter