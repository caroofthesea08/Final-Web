const TESTS_URL = "http://localhost:3000/product-tests";
const PRODUCTS_URL = "http://localhost:3000/makeup-stock";

export type ProductTest = {
  id: string;
  testerId: string;
  productId: string;
  reaction: string;
  rating: number;
  survivalStatus: boolean;
};

export type MakeupStock = {
  id: string;
  name: string;
};

export async function getAllTests(): Promise<ProductTest[]> {
  const res = await fetch(TESTS_URL);
  if (!res.ok) throw new Error("Error al obtener tests");
  return res.json();
}

export async function addTest(test: Omit<ProductTest, "id">): Promise<void> {
  const res = await fetch(TESTS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(test),
  });
  if (!res.ok) throw new Error("Error al agregar test");
}

export async function deleteTest(id: string): Promise<void> {
  const res = await fetch(`${TESTS_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar test");
}

// Para obtener los productos y usarlos en combos o listas
export async function getAllProducts(): Promise<MakeupStock[]> {
  const res = await fetch(PRODUCTS_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}
