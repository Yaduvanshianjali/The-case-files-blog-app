


// import { Link, useLocation, useNavigate } from "react-router-dom"
// import {BsSearch} from 'react-icons/bs'
// import {FaBars} from 'react-icons/fa'
// import { useContext, useState } from "react"
// import Menu from "./Menu"
// import { UserContext } from "../context/UserContext"
// import Logo from "../pages/Logo"
// import AllPosts from "../pages/AllPosts";
// import Footer from "./Footer";


// const Navbar = () => {
  
//   const [prompt,setPrompt]=useState("")
//   const [menu,setMenu]=useState(false)
//   const navigate=useNavigate()
//   const path=useLocation().pathname
  
//   // console.log(prompt)
  

//   const showMenu=()=>{
//     setMenu(!menu)
//   }
  
   
//     const {user}=useContext(UserContext)
    
//   return (
  
//     <div className="top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-[200px] h-16 bg-black text-white">

    
//     {/* <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">221B</Link></h1> */}
//     <nav class="bg-light text-brown flex justify-between items-center p-4 ">
//     <Link to="/" >
//   <Logo/>
// </Link>

//         <ul class="hidden md:flex md:space-x-9 mx-8 px-30">
//         <Link to="/allposts"> <li>All posts</li></Link>
//             <li><a href="#">About</a></li>
//             <li><a href="#foot">Contact</a></li>
//         </ul>

//         <div class="md:hidden">
//             <i class="fa-solid fa-bars text-xl"></i>
//         </div>
//     </nav>
//     {path==="/" && <div className="flex justify-center items-center space-x-0">
//     {/* <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
//     <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/> */}
    
//     </div>}
//     <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
//       {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
//       {user? <div onClick={showMenu}>
//         <p className="cursor-pointer relative"><FaBars/></p>
//         {menu && <Menu/>}
//       </div>:<h3><Link to="/register">Register</Link></h3>}
//     </div>
//     <div onClick={showMenu} className="md:hidden text-lg">
//       <p className="cursor-pointer relative"><FaBars/></p>
//       {menu && <Menu/>}
//     </div>

//     </div>

    
//   )
// }

// export default Navbar 




import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"
import Logo from "../pages/Logo"
import AllPosts from "../pages/AllPosts";
import Footer from "./Footer";


const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
    
  return (
  
    <div className="top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-[200px] h-16 bg-black text-white">

    
    {/* <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">221B</Link></h1> */}
    <nav className="bg-light text-brown flex justify-between items-center p-4 ">
    <Link to="/" >
  <Logo/>
</Link>

        <ul className="hidden md:flex md:space-x-9 mx-8 px-30">
        <Link to="/allposts"> <li>All posts</li></Link>
             <Link to="/about"><li className="hover:text-blue-500 cursor-pointer">About</li></Link>
          <Link to="/contact"> <li>Contact</li></Link>
        </ul>

        <div className="md:hidden">
            <i className="fa-solid fa-bars text-xl"></i>
        </div>
    </nav>
    {path==="/" && <div className="flex justify-center items-center space-x-0">
    {/* <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
    <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/> */}
    
    </div>}
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
      {menu && <Menu/>}
    </div>

    </div>

    
  )
}

export default Navbar 