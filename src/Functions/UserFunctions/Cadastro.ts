import axios from "axios";
import { UsuarioData } from "./Interfaces/UsuarioData";
import { ResponseFunction } from "../ResponseFunction";
import { appServer, appClient } from "../../api";

function cadastroUser(data: UsuarioData): Promise<ResponseFunction> {
    return axios.post(`${appServer}/saveUsuario`, data)
        .then((res) => {
            window.location.href = `${appClient}/login`;
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

export default cadastroUser;