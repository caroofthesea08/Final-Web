import axios from "axios"
import { OrderFormValues, OrderSchema } from "../schemas/OrderSchema"

const baseUrl= process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(data: Omit<OrderFormValues, "id">) {
  const response = await axios.post(baseUrl+'/orders', data)
  return response.data

}