import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm"

const CommentForm = (props) => {
    let initialValues = {
        video_id : `${props.videoId}`,
        text : "",

    };
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, makePost)

    async function makePost(){
        try{
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/`, formData, {
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
                <form>
                    <div>
                        <label>Post a comment: </label>
                        <input
                            type="text"
                            name="text"
                            value={formData.text}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit}>POST</button>
                    </div>
                </form>
            </div>
        );
    }

export default CommentForm;