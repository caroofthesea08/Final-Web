"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, LoginFormValues } from "@/app/schemas/LoginSchema"
import { login } from "@/app/services/Loginservice"
import { useUserStore } from "@/app/store/UserStore"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

export function LoginForm() {
  const { setUser } = useUserStore()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await login(data)
      setUser(res.user)
      toast.success("Inicio de sesión exitoso")

      const role = res.user.role
      if (role === "client" || role === "tester") {
        router.push("/orders/new")
      } else if (role === "admin" || role === "employee") {
        router.push("/orders")
      } else {
        router.push("/")
      }
    } catch (error: any) {
      toast.error("Credenciales inválidas")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Correo</Label>
        <Input type="email" {...register("email")} />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="password">Contraseña</Label>
        <Input type="password" {...register("password")} />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>
      <Button type="submit" className="w-full">Entrar</Button>
    </form>
  )
}