import axios from "axios";

// CONSTANSTS ===> 
const URL = "http://localhost:8080/";

export const addUser = async (data) => {


    try {
        await axios.post(`${URL}add`, data)

    } catch (e) {
        console.log("ERROR WHILE LOGIN",e)
    }
}