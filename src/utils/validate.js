
 export const checkValidataionData = (email, password
    // ,UserName
    )=> {
     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
     const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //  const isUsserName = /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(UserName);

     if(!isEmailValid) return "Email Id is not valid";
     if(!isPassword) return "password is not valid";
   
     //  if(!isUsserName) return "Usser Name is not Valid"
     
     return null; 
}