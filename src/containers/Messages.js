import { useMessages } from "../components/Firebase";
// import removeContact from "../components/Firebase";

function Messages() {
    const messages = useMessages();
    console.log(messages);
    return (


        <div>
            <h2 className="messageheader">Messages</h2>

            <p> {

                messages.map(message => (
                    <div className="messeges">
                        <p className="fields"> Email: {message.email} <br></br> Surname: {message.surname} <br></br> Name: {message.title} <br></br> Message: {message.tarea}</p>
                        {/* <button type="button" onClick={() => { removeContact()}}>Delete</button> */}
                    </div>

                ))}

            </p>

        </div>

    )
}
export default Messages;