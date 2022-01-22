import axios from'axios'

const baseUrl = 'http://localhost:3002/questions';

const allQuestion = async () => {
    console.log('fdata',baseUrl)

   const response = await axios.get(baseUrl)
    .then(function (response) {
        // handle success
        console.log('12',response);
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

      return response.data
    // .then()
}

const addQuestion = (e) => {
  alert(e)
  
}

export {allQuestion,addQuestion};