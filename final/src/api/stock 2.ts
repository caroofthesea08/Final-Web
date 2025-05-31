const BASE_URL = "Conctar a base de datos";
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  storageLocation: string;
  durability: number;
  isIllegal: boolean;
  stolenQuantity: number;
};


export async function getAllStock() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener el inventario");
  return res.json();
}

export async function addProduct(product: Omit<Product, "id" | "isIllegal" | "stolenQuantity">) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Error al agregar producto");
  return res.json();
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar producto");
}

export async function reportTheft(id: string, quantity: number) {
  const res = await fetch(`${BASE_URL}/${id}/report-theft`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
  if (!res.ok) throw new Error("Error al reportar robo");
}

export async function markIllegal(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isIllegal: true }),
  });
  if (!res.ok) throw new Error("Error al marcar como ilegal");
}
