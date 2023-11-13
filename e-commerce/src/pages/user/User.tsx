import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"


const User = () => {
  return (

    //Fetch data and send to Single component
    <div className="user">
        <Single {...singleUser}/>
    </div>
  )
}

export default User
