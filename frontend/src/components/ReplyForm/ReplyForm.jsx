import axios from 'axios'
import useCustomForm from '../../hooks/useCustomForm'
import './ReplyForm.css'


const ReplyForm = (props) => {
    let initialValues = {
        text: "",
        comment_id: `${props.id}`
    }

    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, makeReply)

    async function makeReply(){
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/replies/${props.id}/`, formData, {
                headers: {
                    Authorization: "Bearer " + props.token
                }
            })
            if(response.status === 201){
                props.getReplies()
            }
        } catch (error) {
            console.log(error.message)
        }
    }


    return ( 
        <div>
            <form>
                <div className='replyinput'>
                    <input
                    placeholder='Post A Reply!'
                    type='text'
                    name='text'
                    value={formData.text}
                    onChange={handleInputChange}
                     />
                    <button onClick={handleSubmit}>POST</button>
                </div>
            </form>
        </div>
     );
}
 
export default ReplyForm;