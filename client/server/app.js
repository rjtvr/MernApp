const express = require('express')
const data = require('./data')
const app = express()
const port = 3002
const cors = require('cors')

let tmptag = [];

app.use(cors())

app.use(
  express.urlencoded({
    extended:true
  })
)
app.use(express.json())

//tags 
app.get('/tags', (req, res) => {
  console.log('calling /tags')
  res.setHeader('Content-Type', 'application/json');
   let newtag =tmptag.concat(data.tags)
  res.send(JSON.stringify(newtag))
})


//all 
app.get('/questions', (req, res) => {
  console.log('calling /all')
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data.questions))
})

// single data
app.get('/:id', (req, res) => {
    const inputid = Number(req.params.id);
    const filtereddata = data.questions.filter(e => e.id === inputid)
    console.log(filtereddata);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(filtereddata))
  })
  

// post tags request
app.post('/tags', function (req, res) {
  console.log(req.body)
    const add = [{id:tmptag.length + 1,name : req.body.tagname}]

  //  tmptag =tmptag.concat(add)
  tmptag.push(add)
    res.send('adding tag'+req.body.tagname)
  })

// update data
app.put('/:id', function (req, res) {
    const inputid = Number(req.params.id);
    res.send(`Got a DELETE request at for this ${inputid}`)
  })




// delete data
  app.delete('/:id', function (req, res) {
    const inputid = Number(req.params.id);
    res.send(`Got a DELETE request at for this ${inputid}`)
  })




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})