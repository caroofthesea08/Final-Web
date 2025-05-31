import axios from "axios"
import { LoginFormValues } from "../schemas/LoginSchema"

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function login(data: LoginFormValues) {
  const response = await axios.post(baseUrl+ '/auth/login', data)
  return response.data
}
