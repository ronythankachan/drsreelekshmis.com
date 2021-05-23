import React,{useState,useEffect} from 'react'
import './SidePanelContainer.css'

const SidePanelContainer = (props) => {
    const [isMinimized,setIsMinimized] =useState(false)
    const [sidePanelClass, setSidePanelClass] =useState("sidepanelcontainer")
    const [content, setContent] =useState("<")
    const [isHidden,setIsHidden] =useState(true)

    useEffect(() => {
        if(isMinimized){
            setSidePanelClass("sidepanelcontainer minimize")
        }else{
            setSidePanelClass("sidepanelcontainer")
        }
    }, [isMinimized])

    const minimize = () =>{
        setIsHidden(!isHidden)
        setIsMinimized(isHidden)
        if(isHidden){
            setSidePanelClass("sidepanelcontainer minimize")
            setContent(">")
        }else{
            setSidePanelClass("sidepanelcontainer")
            setContent("<")
        }
    }

    return (
        <div className={sidePanelClass} >
            <div className="minimize_button">
                <button onClick={minimize}>{content}</button>
            </div>
            {
                props.children
            }

        </div>
    )
}

export default SidePanelContainer