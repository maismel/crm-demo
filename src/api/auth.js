export const API_URL = "https://dummyjson.com";
import store from "../store";

export const loginAPI = async (username, password) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
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
};

export const fetchUserData = async () => {
  try {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${store.state.auth.accessToken}`,
      },
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.error("Fetch user data error:", error);
    throw error;
  }
};
