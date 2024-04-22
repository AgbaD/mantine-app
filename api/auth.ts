import { LoginDto, RegisterDto } from "../dto/auth";
import { GATEWAY_ENDPOINT } from "./index";

const headers = {
  Accept: "application/json",
}
  
const auth_api = {
    $_login: (data: LoginDto) => {
      const url = "/login";
      return GATEWAY_ENDPOINT.post(url, data);
    },
  
    $_register: (data: RegisterDto) => {
      const url = "/register";
      return GATEWAY_ENDPOINT.post(url, data);
    },
}

export default auth_api;
