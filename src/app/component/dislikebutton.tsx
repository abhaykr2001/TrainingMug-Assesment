import { SlDislike } from "react-icons/sl";

const likedislikebtn = () => {
    return (
      <div className="likedislike text-4xl">
        <span className="text-red-500 hover:text-red-700">
          <SlDislike className="fill-current" />
        </span>
      </div>
    );
  };
  
  export default likedislikebtn;
  