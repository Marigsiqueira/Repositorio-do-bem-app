import axios from "axios";
import { LoginData } from "./Interfaces/LoginData";
import { ResponseFunction } from "../ResponseFunction";
import { appServer, appClient } from "../../api";

function Login(usuario: LoginData): Promise<ResponseFunction>{
    return axios.post(`${appServer}/AuthUser`, usuario)
        .then((res) => {
            window.location.href = `${appClient}/estoque`;
            return {
                success: true,
                data: res.data
            };
        })
        .catch((error) => {
            console.error(error);
            return {
                success: false,
                error: error.message || 'Erro desconhecido'
            };
        });
}

export default Login;