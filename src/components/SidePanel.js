import React,{useState} from 'react'
import './SidePanel.css'
import AdminControls from './AdminControls'


const SidePanel = () => {
    const [sidePanelClasses, setSidePanelClasses] = useState("sidepanel")
    const [content, setContent] =useState("<")
    const [isHidden,setIsHidden] =useState("false")

    const minimize = () =>{
        setIsHidden(!isHidden)
        if(isHidden){
            setSidePanelClasses("sidepanel minimize")
            setContent(">")
        }else{
            setSidePanelClasses("sidepanel")
            setContent("<")
        }
    }
    return (
        <div className={sidePanelClasses}>
            <AdminControls/>
            <div className="minimize_button">
                <button onClick={minimize}>{content}</button>
            </div>
        </div>
    )
}

export default SidePanel
