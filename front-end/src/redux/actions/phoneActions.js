const axios = require('axios')

const phoneAction = {
    getPhones:() =>{
        return async(dispatch) =>{
            try {
                const phones = await axios.get("http://localhost:4000/api/phone")
                dispatch({type: "PHONE",payload: phones.data.response})
                return phones.data.response
            } catch (error) {
                return {error: 'There was an error with the api'}
            }
        }
    }
}

export default phoneAction