export const generateNames = (firstName,lastName) => {
    if(firstName && lastName){

        const generationName = firstName[0] + lastName[0]
        return generationName
    }
}