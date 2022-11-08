import './Reply.css'

const Reply = (props) => {
    return ( 
        <div className="blurb replyShadow">
            <p>User: {props.user}</p>
            <p>Reply: {props.text}</p>
        </div>
     );
}
 
export default Reply;