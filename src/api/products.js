import { API_URL } from "./auth";

export const getProductsApi = async () => {
    try {
        const res = await fetch(`${API_URL}/products`, {
          headers: { "Content-Type": "application/json" },
        });
    
        if (!res.ok) {
          throw new Error("Invalid credentials");
        }
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
}
