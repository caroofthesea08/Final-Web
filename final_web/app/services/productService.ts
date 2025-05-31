import axios from "axios"

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProducts() {
  const response = await axios.get(baseUrl+'/products')
  return response.data
}