import logImage from "../../assets/castle.jpg"

const Logo = ({isOpen}) => {
  return <img src={logImage} alt="cart ease" className={`${isOpen ? "w-14" : "w-10"} mt-4 transition-all duration-300`}/>
    
  
}

export default Logo