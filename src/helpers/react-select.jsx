import React from 'react'
import { useField } from 'formik';
import Select from 'react-select';


const CustomSelect = ({ options, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const handleChange = (selectedOption) => {
            helpers.setValue(selectedOption);
    };

    const value = options.find((option) => option.value === field.value);
    return (
        
            <Select
                isMulti
                name="skillsIds"
                options={options}
                {...field}
                {...props}
                value={value}
                
                onChange={handleChange}
            />
        
    );
};


export default CustomSelect;