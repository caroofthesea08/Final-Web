export interface LoginResponseSuccess {
  success: true;
  role: string;
  token: string;
}

export interface LoginResponseFail {
  success: false;
  message?: string;
}

export type LoginResponse = LoginResponseSuccess | LoginResponseFail;

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok && data.token && data.user && data.user.role) {
      localStorage.setItem("token", data.token);
      return { success: true, role: data.user.role, token: data.token };
    } else {
      return { success: false, message: data.message || "Error en autenticación" };
    }
  } catch (error) {
    console.error("Error en login:", error);
    return { success: false, message: "Error de conexión" };
  }
}
