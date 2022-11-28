import swal from "sweetalert"
import BASE_URL from "../constants/url"
import axios from "axios"
import { BsTrash } from "react-icons/bs"
import { useContext } from "react"
import { UserInfoContext } from "../contexts/userInfo"

export default function TrashButton ({ id, setStatus }) {
    const { config, setAtt } = useContext(UserInfoContext)

    function deleteCartItem (id) {
        const token = config.headers.Authorization
        const headers = { 
            id, 
            token
        }

        const promisse = axios.delete(`${BASE_URL}/cart`, { headers })

        promisse.then((res) => {
            swal({
                title: res.data,
                icon: "success"
            })
            setStatus([])
            setAtt([])
        })

        promisse.catch((err) => {
            console.log(err)
        })
    }

    return (
        <BsTrash onClick={(() => deleteCartItem(id))}/>
    )
}