export interface Order {
  id: string
  client: {
    id: string
    name: string
    email: string
  }
  products: string[]
  total_amount: number
  payment_status: "paid" | "refunded" | "failed"
}
