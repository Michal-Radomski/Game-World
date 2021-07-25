import {useMessages} from "../components/Firebase";

function Messages() {
    const messages = useMessages();
    console.log(messages);
    return (
           

        <div>
                 <h2>Messages</h2>

        <p> {

            messages.map(message => ( 
                <div className="messeges">
            <p> Email: {message.email} <br></br> Surname: {message.surname} <br></br> Name: {message.title} <br></br> Message: {message.tarea}</p>
            </div>
            
            ))}

        </p>

        </div>

    )
}
export default Messages;