import {
    useMessages
} from "../components/Firebase";

function Messages() {
    const messages = useMessages();
    console.log(messages);
    return (


        <div>

        <p> {
            messages.map(message => ( <p> {message.email}</p>

            ))};

        </p>

        </div>

    )
}
export default Messages;