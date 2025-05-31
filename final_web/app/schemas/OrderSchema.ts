import { z } from "zod"

export const OrderSchema = z.object({
  products: z.array(z.string()).nonempty("Debes seleccionar al menos un producto"),
  total_amount: z.number().positive("El total debe ser mayor que cero"),
})

export type OrderFormValues = z.infer<typeof OrderSchema>

