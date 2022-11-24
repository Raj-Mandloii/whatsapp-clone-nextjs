import axios from "axios";

// CONSTANSTS ===> 
const URL = "";

export const addUser = async (data) => {


    try {
        await axios.post(URL, data)

    } catch (e) {
        console.log("ERROR WHILE LOGIN",e)
    }
}