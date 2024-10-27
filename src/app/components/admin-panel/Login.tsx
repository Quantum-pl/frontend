import { LuLogIn } from "react-icons/lu";
import { signIn } from "next-auth/react"
import { MouseEventHandler } from "react";

const Login = () => {
    const handleClick: MouseEventHandler = (event) => {
        console.log('Login button clicked!');
    };
  return (
    <div className="bg-black min-h-screen grid place-items-center">
        <button className="bg-white px-8 py-4 flex gap-2 items-center" onClick={handleClick}>
            <LuLogIn size={30}/>Войти
        </button>
    </div>
  )
}

export default Login