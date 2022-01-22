import axios from'axios'

const baseUrl = 'http://localhost:3002';

const allQuestion = async () => {
    console.log('fdata',baseUrl)

  const response = await axios.get(baseUrl+'/questions')
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

const allTag = async () => {
  console.log('tags')
  const response = await axios.get(baseUrl+'/tags')
    .then(function (response) {
        // handle success
        console.log('tags',response);
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

      return response.data
    // .then()
}

const sendTag = (d) => {
  axios.post(`${baseUrl}/tags`, {
    tagname : d
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const addQuestion = (e) => {
  alert(e)
  
}

export {allQuestion,addQuestion,allTag,sendTag};