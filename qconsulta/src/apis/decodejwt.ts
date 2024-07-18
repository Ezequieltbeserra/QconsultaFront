import  { jwtDecode } from 'jwt-decode'; 


export function decodificator (token:string) {
  const decoded = jwtDecode(token);
  return decoded
}



