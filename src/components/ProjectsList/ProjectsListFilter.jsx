import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';
const ProjectsListFilter = () => {
    const fundMin = useRef();
    const dispatch = useDispatch()
    const handleProjectsSearch = (e) => {
        console.log(e.target.value)
        dispatch(getAllProjects({ keyword: e.target.value }))
    }

    const handleFundSlider = (e) => {
        fundMin.current.innerHTML = e.target.value
        dispatch(getAllProjects({ select: e.target.value }))
    }
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
                    <li className="cat">
                        <input type="checkbox" name="" id="" />
                        web developement
                    </li>
                    <li className="cat"><input type="checkbox" name="" id="" /> mobile app</li>
                    <li className="cat"><input type="checkbox" name="" id="" /> graphic design</li>
                    <li className="cat"><input type="checkbox" name="" id="" /> AI</li>
                    <li className="cat"><input type="checkbox" name="" id="" /> Copy Writing</li>
                </ul>
            </div>
            <div className="skills">
                <div className="skills-title my-2 h5">Skills</div>
                <div className="form-group">

                    <Select isMulti
                        options={
                            [{ value: 'html', label: 'Html' },
                            { value: 'css', label: 'Css' }, { value: 'js', label: 'JavaScript' },]} />
                </div>
            </div>
            <div className="fund">
                <div className="fund-title my-2 h5">Fund Slider</div>
                <input
                    type="range" className="form-range"
                    onChange={handleFundSlider} id="fund-range" min="0" max="20" step="1" />
                <div className="fund-minmax">
                    <div className="min" id="fund-min" ref={fundMin}>0</div>
                    <div className="max" id="fund-max">20</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsListFilter