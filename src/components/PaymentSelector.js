import {Form} from 'react-bootstrap'
const PaymentSelector = () =>{
    return (
        <Form>
            <Form.Group>
                <Form.Check type="radio" label="COD (Cash on Delivery)" defaultChecked/>
                <small>Please pay at the time of the delivery in cash.</small>
                <Form.Check type="radio" label="UPI" disabled/>
                <small>Pay using Google pay, Phone pe, Paytm or any other UPI services.</small>
                <Form.Check type="radio" label="Credit/ Debit Cards" disabled/>
                <small>Pay using any credit/debit cards</small>
            </Form.Group>
        </Form>
    )
}
export default PaymentSelector