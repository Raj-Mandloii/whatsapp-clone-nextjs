import axios from "axios";

// CONSTANSTS ===> 
const URL = "http://localhost:8080/";

export const addUser = async (data) => {


    try {
        await axios.post(`${URL}add`, data)

    } catch (e) {
        console.log("ERROR WHILE LOGIN :",e)
    }
}


export const getUser = async () => {
    try {
        let response = await axios.get(`${URL}user`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}


export const setConversation = async (data) =>{
    try {
        let response = await axios.post(`${URL}conversation/add`,data);
        return response.data
    } catch (error) {
        console.log('Error while calling conversation API ', error);
    }

}