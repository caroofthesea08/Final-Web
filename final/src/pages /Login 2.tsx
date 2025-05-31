import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await loginUser(email, password);

    if (response.success) {
      const role = response.role;

      if (role === "admin") navigate("/inventario");
      else if (role === "ventas") navigate("/clientes");
      else if (role === "marketing") navigate("/marketing");
      else if (role === "logistica") navigate("/logistica");
    } else {
      alert("Error en login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
