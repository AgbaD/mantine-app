import { useState } from "react";
import auth_api from "../api/auth";
import { useRouter } from "next/navigation";
import { LoginDto, RegisterDto } from "../dto/auth";

const { $_login, $_register } = auth_api

const useAuth = () => {
    const router = useRouter()

    const loginUser = async(dto: LoginDto) => {
        console.log('here')
        // const res = await $_login(dto);

        // if (res.status === 200) {
        //     // extract token from res
        //     router.push('/dash')
        // }
        router.push('/dash')
    }

    const registerUser = async(dto: RegisterDto) => {
        // const res = await $_register(dto);

        // if (res.status === 201) {
        //     router.push('/auth/login')
        // }
        router.push('/auth/login')

    }

    return {
        loginUser,
        registerUser,
    }
}

export default useAuth;
