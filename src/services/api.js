import axios from 'axios'

const url = 'http://localhost:5000'

export const addUSER = async (data) => {
    try {
        await axios.post(url,data)
    } catch (error) {
        console.log("error in addUSER" , error.message)
    }
}
