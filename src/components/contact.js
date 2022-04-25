import { StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol } from '../utils/styles';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = ({id}) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalObject, setModalObject] = useState({});

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonDisabled(true);    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setModalObject({
                    title: 'Successfully Sent!',
                    body: 'Your contact form has been successfully sent. I will reach out to you shortly!'
                })
            }).catch(error => {
                console.log(error.text);
                setModalObject({
                    title: 'Error While Sending!',
                    body: 'There was an error sending the contact form. You can try connecting with me from the links below the form.'
                })
            }).finally(() => {
                e.target.reset();
                setButtonDisabled(false);
                setShowModal(true);
            });
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <StyledContainer id={id} style={{paddingBottom: '5em'}}>
            <StyledRow>
                <StyledCol>
                    <StyledSpan><h5><AccentedIndex>[4]</AccentedIndex></h5><h3>Connect with Me</h3></StyledSpan>
                </StyledCol>
            </StyledRow>
            <StyledRow>
                <StyledCol>
                    <Form onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control className='custom-form-input' type="text" placeholder="Enter Your Name" required style={{ background: 'var(--dark-color)', color:'var(--light-color)' }} name='from_name' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='custom-form-input' type="email" placeholder="Enter Your Email" required style={{ background: 'var(--dark-color)', color: 'var(--light-color)'}} name='email'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control className='custom-form-input' as="textarea" rows={10} placeholder="Enter Your Message" required style={{ minHeight: '150px', background: 'var(--dark-color)', color: 'var(--light-color)'}} name='message'/>
                        </Form.Group>
                        <Button type="submit" disabled={buttonDisabled} className='custom-button'>
                            {buttonDisabled ? <Spinner animation="border" variant="light" /> : 'Send!'}
                        </Button>
                    </Form>
                    <Modal className = 'custom-modal' show={showModal} onHide={handleClose} size='sm'>
                        <Modal.Header>
                            <Modal.Title>{modalObject.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{modalObject.body}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} className='custom-button'>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    );
}

export default Contact;
