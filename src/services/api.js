import axios from 'axios'

const url = 'http://localhost:5000'

// Calling APIs

export const addUSER = async (data) => {
    try {
        await axios.post(`${url}/add`,data)
    } catch (error) {
        console.log("error in addUSER" , error.message)
    }
}
