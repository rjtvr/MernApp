import { useForm } from "react-hook-form"; 
import {Modal,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const AddTag = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
     return (
    //   /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     {/* register your input into the hook by invoking the "register" function */}
    //     <input defaultValue="" {...register("tag")} />
        
    //     {/* include validation with required or other standard HTML validation rules */}
    //     {/* <input {...register("tagRequired", { required: true })} /> */}
    //     {/* errors will return when field validation fails  */}
    //     {/* {errors.exampleRequired && <span>This field is required</span>} */}
        
    //     <input type="submit" />
    //   </form>
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" ><Link to = "/dashboard"> Exit </Link>  </Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
    );
}

export default AddTag