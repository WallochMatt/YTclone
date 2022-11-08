

const Reply = (props) => {
    return ( 
        <div>
            <p>User: {props.user}</p>
            <p>Reply: {props.text}</p>
        </div>
     );
}
 
export default Reply;