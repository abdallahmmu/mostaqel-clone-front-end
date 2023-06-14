import * as Yup from 'yup'


export const updateFreelanceSchema = Yup.object().shape({
    firstName:Yup.string().required('Required').min(4,'must be more than 4 characters'),
    lastName:Yup.string().required('Required').min(4,'must be more than 4 characters'),
    jobTitle:Yup.string().required('Required'),
    description:Yup.string().required('Required').min(10,'must be more than 10 character')
})