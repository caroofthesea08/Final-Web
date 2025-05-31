import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email({ message: "Correo inválido" }),
  password: z.string().min(12, { message: "Mínimo 12 caracteres" }),
})

export type LoginFormValues = z.infer<typeof LoginSchema>
