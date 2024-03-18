import { useNavigate } from "react-router-dom"

const AccountPage = () => {
    const Navigate = useNavigate();
  return (
    <div className="bg-black h-lvh">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBXNuO6PezhC18aYH_2cYtS0I7KbxoKYdwA&usqp=CAU" alt="" className=""/>
        <h1>Arpit Kumar</h1>
        <button>Details</button>
        <button type="back" onClick={() => {Navigate(-1)} }>Return</button>

    </div>
  )
}

export default AccountPage