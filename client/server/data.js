const data = [ 
    {
    id : 1,
    tag : 'aptitude',
    question_text : 'what is the square of 2 ?',
    options : ['4','8','23','33'],
    correct_option : '4'
},
{
    id : 2,
    tag : 'quantative',
    question_text : 'what is the sum of 2 + 2 ?',
    options : ['4','8','23','33'],
    correct_option : '4'
},
{
    id : 3,
    tag : 'aptitude',
    question_text : 'what is the cube of 2 ?',
    options : ['4','8','23','33'],
    correct_option : '8'
},

]
const tags = [
    {
        id:1,
        name : 'aptitude'
    },
    {
        id:2,
        name : 'quantative'
    },
    {
        id:3,
        name : 'data'
    }
]
module.exports = {
                    questions : data,
                    tags : tags
                };