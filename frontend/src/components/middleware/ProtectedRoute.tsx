import { Navigate } from "react-router-dom"



export const ProtectedRoute = ({children}:any) => {
  const token = localStorage.getItem('token');

  if(!token) {
    return <Navigate to={'/auth'} replace={true}/>
  }

  return children
}
