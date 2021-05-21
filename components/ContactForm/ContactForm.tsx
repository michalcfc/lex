import {useEffect, useState} from 'react'

import {
    ContactWrapper,
    ContactFormContent,
    ContactIcon,
    ContactLeft,
    ContactItem,
    ContactItemText
} from "./ContactForm.styles"
import { ContactFormProps } from "./ContactForm.d"

import axios from "axios";

import Alert from "../Alert"
import Input from "../Input";
import Select from "../Select"
import Button from "../Button";
import Textarena from "../Textarena";
import Container from "@components/Container";

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome'


import {
    faMapMarked,
    faPhone,
    faMobileAlt
} from '@fortawesome/free-solid-svg-icons'

const ContactForm: React.FC<ContactFormProps> = ({
     messageTopic,
     choosenPack,
     isContactPage
}) => {


    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        setFormData({
            name: '',
            email: '',
            subject: choosenPack,
            message: '',
        })
    }, [choosenPack])


    /**
     * @function handleFormSubmit
     * @param e { obj } - form event
     * @return void
     */

    const API_PATH = '/api/contact/index.php';

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: "post",
            url: `${API_PATH}`,
            headers: { "content-type": "application/json" },
            data: formData
        })
            .then(result => {
                if (result.data.sent) {
                    setmailSent(result.data.sent)
                    setError(false)
                } else {
                    setError(true)
                }
            })
            .catch(error => setError( error.message ));
        console.log(formData)
    };

    /**
     * @function handleChange
     * @param e { obj } - change event
     * @param field { string } - namve of the field
     * @return void
     */

    const handleChange = (e, field) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    return (
        <>
            <ContactWrapper>

                {isContactPage && <ContactLeft>

                    <ContactItem>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faPhone} />
                        </ContactIcon>
                        <ContactItemText>
                                61 814-38-25
                        </ContactItemText>
                    </ContactItem>
                    
                    <ContactItem>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faPhone} />
                        </ContactIcon>
                            <ContactItemText>
                                516-178-131
                            </ContactItemText>
                    </ContactItem>

                    <ContactItem>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faMapMarked} />
                        </ContactIcon>
                        <ContactItemText>
                            ul. Przylesie 6, <br/>
                            60-185 Skórzewo
                        </ContactItemText>
                    </ContactItem>

                </ContactLeft>}
                <ContactFormContent>
                    {mailSent && <Alert text={"Dziękujemy. Wiadomość została wysłana."} />}
                    {error && <Alert variant={'danger'} text={"Uzupełnij wszystkie pola."} />}
                    <p>Napisz wiadomość: </p>
                    <form action="#">
                        <Input
                            label="Imię"
                            value={formData.name}
                            onChange={e => handleChange(e, 'name')}
                        />
                        <Input
                            label="Email"
                            value={formData.email}
                            onChange={e => handleChange(e, 'email')}
                        />
                        <Select
                            required
                            label={"Temat"}
                            name={"Subject"}
                            value={formData.subject}
                            defaultOptions={messageTopic}
                            defaultValue={choosenPack}
                            onChange={e => handleChange(e, 'subject')}
                        />
                        <Textarena
                            label="Wiadomość"
                            value={formData.message}
                            onChange={e => handleChange(e, 'message')}
                        />
                        <Button
                            name="Wyślij"
                            onClick={(e: React.MouseEvent) => handleFormSubmit(e)}
                        />
                    </form>
                </ContactFormContent>
            </ContactWrapper>
        </>
    )
}

export default ContactForm;