import React,{useState,useEffect} from 'react'
import backend from '../axios'
import { Button } from 'react-bootstrap'


const AddressCard = ({data, setUpdater, selectedAddress,setSelectedAddress}) => {
    const[background,setBackground] = useState('white')

    useEffect(() => {
        if(selectedAddress === data._id) setBackground('#efb1b154')
        else setBackground('white')
    },[selectedAddress,data._id])

    const handleEdit = (e)=>{

    }
    async function handleDelete(){
        const response = await backend.post('/api/delete_address',{userId:localStorage.getItem('userId'),_id:data._id})
        console.log(response)
        setUpdater(current => !current)
        console.log(response.data)
    }
    const handleSelectAddress = ()=>{
        setSelectedAddress(data._id)
    }

    return (
        <div className="addresscard" style={{backgroundColor:background}}>
            <p>{data.firstName+' '+data.lastName}</p>
            <p>{data.addressLine1}</p>
            <p>{data.addressLine2}</p>
            <p>{data.city+', '+data.state}</p>
            <p>{data.zip+', Ph:'+data.phone}</p>
            <div className="addresscard__buttons">
                <Button variant="success" onClick={handleSelectAddress}>Deliver to this address</Button>
                <div style={{display:'flex',columnGap:"10px"}}>
                    <Button variant="warning" style={{width:"50%"}} onClick={handleEdit}>Edit</Button>
                    <Button variant="danger" style={{width:"50%"}} onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default AddressCard
