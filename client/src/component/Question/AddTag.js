import { useForm } from "react-hook-form"; 
import {Modal,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState ,useEffect} from "react";
import { allTag,sendTag} from "../GetData/FetchData";


const TableContent = ( {tagname,editquestion,deletequestion} ) => {
    if(tagname === null || tagname === undefined) {
        return null
    }
            return(<>
            {tagname.map(qd => <tr key = {qd.id}>
                <td>{qd.id}</td>
                <td>{qd.name.toUpperCase()}</td>

                <td>
                    <button className='btn btn-primary mx-4' onClick = {() => editquestion(qd.id)} > Edit </button>
                    <button className='btn btn-danger mx-4'onClick = {() => deletequestion(qd.id)}>  Delete </button>

                    
                    </td>

                
                </tr>)}
            </>

            )



}


const AddTag = () => {

    const [tags,setTags] = useState([]);

    const [show, setShow] = useState(false);
    const { setValue,register, handleSubmit, watch, formState: { errors } } = useForm()
    
    const onSubmit = (data) => {
        
        console.log(data);
        sendTag(data.tagname)
        // {...register{value ; ""}}
        setTags(tags.concat([{id : tags.length + 1, name : data.tagname}]))
         setValue('tagname','')
        // {...register,{tagname:''}}
        console.log(useForm)
        setShow(!show)
    }

    useEffect( () => {
        const  getTag = async () => {
        console.log('effect')
        let f = await allTag();
        console.log(f,'effect',tags)
       setTags([].concat(f))

    }
    getTag();
    
},[])

    const editQ = (id) => 
    {
        alert('edit'+id)
    }


    const delQ = (id) => 
    {
        const newtag = tags.filter(e => e.id !== id)
        const delid  = tags.filter(e => e.id === id)
        console.log(delid);
        // const yn = 
        if(window.confirm(` delete ${delid[0].name}`)) {
        setTags([].concat(newtag))
        }
    }

    console.log(watch("tagname")); // watch input value by passing the name of it
return(
    <>
    <div className='container'>
        <h4 className="my-5">Tags</h4>
        <div className="my-2"><button className="btn btn-success" onClick={() => setShow(!show)}>  New Tag </button></div>
        <table className='table table-striped'>
            <thead className='table-light'> 
                <tr className='text-centre'>
                    <th>ID</th>
                    <th>Tag</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
            <TableContent tagname = {tags} editquestion = {editQ} deletequestion = {delQ} />
            </tbody>
        </table>
        </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Tag
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
      {/* register your input into the hook by invoking the "register" function */}
      <input className="form-control" placeholder="add a tag" defaultValue="" {...register("tagname",{ required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {errors.tagname && <span>This field is required</span>}
      <div  style={{width : '25%',margin: '16px auto'}}>
      <input style={{margin : '8px auto'}} className="btn btn-primary px-auto" type="submit" />
      </div>
    </form>

        </Modal.Body>
        
      </Modal>
    </>
)


}


export default AddTag