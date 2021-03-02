import React,{useState} from 'react'
import './SidePanel.css'
import AdminControls from './AdminControls'


const SidePanel = ({setIsMinimized,setFilters}) => {
    const [sidePanelClasses, setSidePanelClasses] = useState("sidepanel")
    const [content, setContent] =useState("<")
    const [isHidden,setIsHidden] =useState(true)

    const minimize = () =>{
        setIsHidden(!isHidden)
        console.log(isHidden)
        setIsMinimized(isHidden)
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
            <AdminControls setFilters={setFilters}/>
            <div className="minimize_button">
                <button onClick={minimize}>{content}</button>
            </div>
        </div>
    )
}

export default SidePanel
