import React,{useEffect,useState} from 'react'
import backend from '../axios'
import './CheckoutPage.css'
const CheckoutPage = () => {
    return (
        <div className="checkoutpage">
            <div className="checkout">
                <h3 className="subheading">Select a delivery address</h3>
                <AddressList/>
           </div>
            {/* payment method
            total amount on side
            checkout
            confirmation  */}
        </div>
    )
}

export default CheckoutPage

const AddressList = ()=>{
    const [addressList,setAddressList] = useState([
        {
            firstName:'Rony',
            lastName:'Thankachan',
            phone:'+919847532286',
            pin:'685565',
            addressLine1:'Flat No.B1, Verdant Woods',
            addressLine2:'Ernakulam',
            landMark:'Near Chotanikara Temple',
            city:'Ernakulam',
            state:'Kerala',
            instructions:'Drop off with security',
            default:true
        },
        {
            firstName:'Rony',
            lastName:'Thankachan',
            phone:'+919847532286',
            pin:'685565',
            addressLine1:'Flat No.B1, Verdant Woods',
            addressLine2:'Ernakulam',
            landMark:'Near Chotanikara Temple',
            city:'Ernakulam',
            state:'Kerala',
            instructions:'Drop off with security',
            default:true
        }
    ])
    useEffect(() => {
        async function fetchAddress() {
            const response = await backend.get('/api/get_address',{params:{userId:localStorage.getItem('userId')}})
            setAddressList(response.data)
        }
        fetchAddress();
    }, [])

    return(
        <div className="address">

        </div>
    )
}
const Address = ({addressList})=>{

}