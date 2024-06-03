import axios from 'axios'

const url = 'http://localhost:5000'

// Calling APIs

export const addUSER = async (data) => {
    try {
        await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log("error in addUSER", error.message)
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/fetch`)
        // console.log(response)
        return (response.data)
    } catch (error) {
        console.log("Can't get Users", error.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/convo/add`, data)
    } catch (error) {
        console.log("Error in set conversation", error.message)
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/convo/get`, data)
        return (response.data)
    } catch (error) {
        console.log("Error in get conversation", error.message)
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data)
    } catch (error) {
        console.log("Error in get conversation", error.message)
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`)
        return (response.data)
    } catch (error) {
        console.log("Error in get conversation", error.message)
    }
}