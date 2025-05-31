import { Button } from "@/components/ui/button"
import { ShoppingCart, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          Belleza indestructible,
          <span className="text-glamGold block">poder absoluto.</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Únete al imperio de Manuela “La Líder”. Cosméticos de guerra, labios de acero, mirada letal.
        </p>
        <div className="flex gap-4">
          <Link href="/general/orders/list">
            <Button size="lg">
              <ShoppingCart className="mr-2 h-4 w-4" /> Ordena aquí
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="lg">
              <Sparkles className="mr-2 h-4 w-4" /> Únete al laboratorio
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="https://i0.wp.com/beautyhouse.co/wp-content/uploads/2020/10/rare-beauty-blush.jpg?fit=430%2C376&ssl=1"
          alt="Modelo glamurosa"
          className="rounded-2xl shadow-2xl border-4 border-white"
        />

      </div>
    </section>
  )
}
