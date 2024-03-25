import React from "react";
function ErrorHandle({touched,errors,fieldName}){
    return(
        <>
          {touched?.[fieldName] && errors?.[fieldName] ? (
             <p style={{ color: "red", fontStyle: "italic" }}>
               {errors?.[fieldName]}
             </p>
           ) : (
             <p style={{ visibility: "hidden" }}>text</p>
           )}
        </>       
     )
     
}
export default ErrorHandle;