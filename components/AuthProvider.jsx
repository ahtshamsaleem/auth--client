// import React, { createContext, useContext, useEffect, useState } from 'react'


// export const AuthContext = createContext();


// const AuthProvider = ({children}) => {
//     const [token, setToken] = useState('');
//     const [userId, setUserId] = useState('')




//     const logoutHandler = () => {
//         setToken('')
//         localStorage.removeItem('token');
//         localStorage.removeItem('expiryDate');
//         localStorage.removeItem('userId');
//     };




//     const setAutoLogout = (milliseconds) => {
//         setTimeout(() => {
//             logoutHandler();
//         }, milliseconds);
//     };



    


//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         const expiryDate = localStorage.getItem('expiryDate');
//         if (!token || !expiryDate) {
//             return;
//         }
//         if (new Date(expiryDate) <= new Date()) {
//             logoutHandler();
//             return;
//         }
//         const userId = localStorage.getItem('userId');
//         const remainingMilliseconds =
//             new Date(expiryDate).getTime() - new Date().getTime();

//         setToken(token);
//         setUserId(userId);

//         setAutoLogout(remainingMilliseconds);
//     }, [])
//   return (

//     <AuthContext.Provider value={{
//         token:token,
//         userId: userId
//     }}>
//         {children}
//     </AuthContext.Provider>
        

//   )
// }

// export default AuthProvider