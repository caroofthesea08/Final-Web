import { LoginForm } from "@/app/components/glam/glam/Login"

export default function LoginPage() {
  return (
    <section className="max-w-md mx-auto p-8 space-y-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <LoginForm />
    </section>
  )
}