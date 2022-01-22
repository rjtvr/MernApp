import {useState,useEffect} from 'react'
import { allQuestion }  from "../GetData/FetchData"

const TableContent = ( {questiondata,editquestion,deletequestion} ) => {
    if(questiondata === null || questiondata === undefined) {
        return null
    }
            return(<>
            {questiondata.map(qd => <tr key = {qd.id}>
                <td>{qd.id}</td>
                <td>{qd.tag}</td>
                <td>{qd.question_text}</td>
                <td>{qd.options.join(',')}</td>
                <td>{qd.correct_option}</td>
                <td>
                    <button className='btn btn-primary mx-4' onClick = {() => editquestion(qd.id)} > Edit </button>
                    <button className='btn btn-danger mx-4'onClick = {() => deletequestion(qd.id)}>  Delete </button>

                    
                    </td>

                
                </tr>)}
            </>

            )



}



const Dashboard = () => {

    const [questions ,setQuestions] = useState([]);

    useEffect( () => {
        const  getQuestion = async () => {
        console.log('effect',typeof(allQuestion))
        let f = await allQuestion();
        console.log(f,'effect',questions)
       setQuestions([].concat(f))

    }
    getQuestion();
}
    ,[])
    console.log(questions,questions.length)

    const editQ = (id) => 
    {
        alert('edit'+id)
    }


    const delQ = (id) => 
    {
        alert('delete'+id)
    }

    return(
        <div className='container'>
        <h4>Dashboard</h4>
        <table className='table table-striped'>
            <thead className='table-light'> 
                <tr className='text-centre'>
                    <th>ID</th>
                    <th>Tag</th>
                    <th>Question Text</th>
                    <th>Options</th>
                    <th>Correct Option</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
            <TableContent questiondata = {questions} editquestion = {editQ} deletequestion = {delQ} />
            </tbody>
        </table>
        </div>

    )
}

export default Dashboard;