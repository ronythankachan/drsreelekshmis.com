import React from 'react'
import './AdminPage.css'
import { useState } from 'react'

const AdminPage = () => {
    const [state, setstate] = useState("test_panel")
    const [content, setContent] =useState("<")
    const [boolVal,setBoolVal] =useState("false")

    const minimize = (event) =>{
        setBoolVal(!boolVal)
        console.log(boolVal)
        if(boolVal){
            setstate("test_panel minimize")
            setContent(">")
        }else{
            setstate("test_panel")
            setContent("<")
        }
    }
    return (
        <div className={state}>
            <div className="test_panel">
                test
                <div className="test_button">
                    <button onClick={minimize}>{content}</button>
                </div>
            </div>

        </div>
    )
}

export default AdminPage