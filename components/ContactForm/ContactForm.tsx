import { useState } from 'react'

import {
    ContactFormStyle,
    ContactFormContent
} from "./ContactForm.styles"
import { ContactFormProps } from "./ContactForm.d"

import Alert from "../Alert"
import Input from "../Input";
import Select from "../Select"
import Button from "../Button";
import Textarena from "../Textarena";

const ContactForm: React.FC<ContactFormProps> = ({
 messageTopic,
 choosenPack
}) => {

    const [messageIsSend, setMessageIsSend] = useState(false)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [topic, setTopic] = useState<string>('')

    const onSubmitForm = async () => {
        // e.preventDefault();

        const res = await fetch('/api/contact', {

            body: JSON.stringify({
                name: name,
                from: email,
                message: message,
                topic: choosenPack ? choosenPack : topic
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        setMessageIsSend(true)
    }

    return (
    <>
        {messageIsSend && <Alert text={"Wiadomość została wysłana"} />}
        <ContactFormStyle>
            <ContactFormContent>
                <h3>Napisz wiadomość: </h3>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        onSubmitForm()
                    }
                    }
                >
                    <Input
                        value={name}
                        label="Imię"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    <Input
                        value={email}
                        label="Email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                <Select
                    label={"Temat"}
                    name={"Topic"}
                    defaultOptions={messageTopic}
                    defaultValue={choosenPack}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTopic(e.target.value)}
                />
                    <Textarena
                        value={message}
                        label="Wiadomość"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    />
                <Button
                    name="Wyślij"
                    onClick={() => {}}
                />
                </form>
            </ContactFormContent>
        </ContactFormStyle>
    </>
    )
}

export default ContactForm;