import { useRouteError } from "react-router-dom";

const Error=()=>{
    const errorElement=useRouteError();
    const {data,status,statusText,error}=errorElement;
    console.log(errorElement);
    return(
        <div className="flex flex-col items-center justify-center">
        <h3>Oops Something went wrong</h3>
        <h3>{data}</h3>
        <h3>{status}</h3>
        <h3>{statusText}</h3>
        <h3>{error.message}</h3>
        </div>

    );
};

export default Error;