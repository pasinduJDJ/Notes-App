import { getInitials } from "../../utils/helper"


const Profileinfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3" >
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Pasindu Dulanjana")}
      </div>
      <div>
        <p className="text-sm font-medium"> Willam</p>
        <button className="text-sm underline text-slate-700" onClick={{ onLogout }} >
          LogOut
        </button>
      </div>
    </div>
  )
}

export default Profileinfo
