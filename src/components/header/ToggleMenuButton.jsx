import { IoMenuOutline } from "react-icons/io5";
import Button from "../button/Button";

const ToggleMenuButton = ({ toggleSidebar }) => {
  return (
    <Button onClick={toggleSidebar} >
      <IoMenuOutline className='text-2xl'/>
    </Button>
  );
};

export default ToggleMenuButton;
