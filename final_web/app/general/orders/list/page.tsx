import { OrderList } from "@/app/components/glam/glam/Orders"
import Link from "next/link"

export default function OrdersPage() {
  return (
    <section className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Órdenes de Compra</h1>
      <OrderList />
    </section>
  )
}
