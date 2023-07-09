import * as Yup from 'yup'

export const AddProjectSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    range: Yup.number().required('Required').positive().integer(),
    // categoryId: Yup.string().required('Required')
})