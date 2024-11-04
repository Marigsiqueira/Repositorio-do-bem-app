import axios from 'axios';

async function DeleteAlimento(Id?: string): Promise<Boolean> {  
  const response = axios.delete(`http://localhost:5555/deleteAlimento/${Id}`)
  console.log(response)
  return true //verificar o response
}

export default DeleteAlimento;


