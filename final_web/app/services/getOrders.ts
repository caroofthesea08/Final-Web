import axios from "axios"
import { Order } from "../schemas/OrderSchema"

const baseUrl= process.env.NEXT_PUBLIC_API_URL;

export async function getOrders(): Promise<Order[]> {
  const response = await axios.get(baseUrl+'/orders')
  return response.data
}

export async function createOrder(data: Omit<Order, "id">) {
  const response = await axios.post(baseUrl+'/orders', data)
  return response.data

}