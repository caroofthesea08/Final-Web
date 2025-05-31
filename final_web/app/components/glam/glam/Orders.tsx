"use client"
import { useEffect, useState } from "react"
import { getOrders } from "@/app/services/getOrders"
import { Badge } from "@/components/ui/badge"
import { Order } from "@/app/schemas/OrderSchema"

export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    getOrders()
      .then(setOrders)
      .catch((err) => console.error("Error al obtener órdenes:", err))
  }, [])

  if (orders.length === 0) {
    return <p className="text-muted-foreground">No hay órdenes aún.</p>
  }

  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border p-4 rounded-xl shadow-sm bg-white space-y-2"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Orden #{order.id.slice(0, 8)}</h2>
            <Badge
              variant={
                order.payment_status === "paid"
                  ? "default"
                  : order.payment_status === "refunded"
                  ? "secondary"
                  : "destructive"
              }
            >
              {order.payment_status}
            </Badge>
          </div>
          <p className="text-sm">Cliente: {order.client.name}</p>
          <p className="text-sm">Productos: {order.products.length}</p>
          <p className="text-sm font-bold">Total: ${parseFloat(order.total_amount.toString()).toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}