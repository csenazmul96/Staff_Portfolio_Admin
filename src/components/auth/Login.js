import axios from "../../helper/axios";

const Login = ()=> {
    const form = {
        email:'admin@gmail.com',
        password:'123456',
        device:'web'
    }

    const loginHendler = ()=>{
        fetch('http://127.0.0.1:8000/sanctum/csrf-cookie').then((res)=>{
            return axios.post('/login', form).then((response)=>{
                localStorage.setItem('user', JSON.stringify(response.data.data))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                }
            });
        });
    }

    return (
        <div className="login_area">sdfsdfs sdf
            <button onClick={loginHendler}>Login</button>
        </div>
    )
}

export default Login
