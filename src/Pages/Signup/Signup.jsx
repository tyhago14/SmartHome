import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
    return (
        <>
         <h1>OLá</h1>
         <button onClick={navigate("/signup2")}> World</button>    
        </>
    );
};

export default Signup;