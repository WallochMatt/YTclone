import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm"
import './CommentForm.css'

const CommentForm = (props) => {
    let initialValues = {
        video_id : `${props.videoId}`,
        text : "",

    };
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, makePost)

    async function makePost(){
        try{
            let response = await axios.post(`http://3.129.45.197:8000/api/comments/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + props.token
                }
            })
            if(response.status === 201){
                props.videoComments()
            }
        }
        catch(error){
            console.log(error.message)
        }
    };



        return (
            <div>
                <form className="commentForm" >
                    <div>
                        <input
                            className="commentInput"
                            placeholder="Post a Comment"
                            type="text"
                            name="text"
                            value={formData.text}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSubmit}>POST</button>
                    </div>
                </form>
            </div>
        );
    }

export default CommentForm;