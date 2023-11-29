import { useEffect } from "react";
import { isLoggedIn } from "../conf/common";
import { useNavigate } from "react-router-dom";


export default function AuthControl(Component) {
    return function AuthenticatedComponent(props) {
        const navigate = useNavigate()

        useEffect(() => {
            if (!isLoggedIn()) {
                navigate('/auth/login')
            }
        }, [navigate])

        return <Component {...props} />
    }
}
