import React,{useState, useEffect} from 'react'
import LoginPage from '../pages/LoginPage'
import AdminPage from '../pages/AdminPage'

const AdminPanel = () => {
    const invalidKey = '^BvasX$134!ZY453@23##!'
    const validKey = 'JG$@zn*^!$GHT)XrYZL4*@'
    const [loginKey, setLoginKey] = useState(invalidKey)

    useEffect(() => {
        let value = localStorage.getItem("isLoggedIn") || invalidKey
        value === validKey?  setLoginKey(validKey): setLoginKey(invalidKey)
    }, [])

    useEffect(() => {
        localStorage.setItem("isLoggedIn", loginKey)
    }, [loginKey])
    return (
        <div>
            {loginKey === validKey?<AdminPage/>:<LoginPage setLoginKey={setLoginKey} validKey={validKey}/>}
        </div>
    )
}

export default AdminPanel


