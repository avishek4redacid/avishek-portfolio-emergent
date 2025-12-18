const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Generic API wrapper
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API Error ${res.status}: ${errorText}`);
    }

    return res.json();
  } catch (error) {
    console.error("API Request Failed:", error.message);
    throw error;
  }
}

export const api = {
  // Health check
  health: () => request("/"),

  // Status check APIs
  getStatusChecks: () => request("/status"),
  createStatusCheck: (clientName) =>
    request("/status", {
      method: "POST",
      body: JSON.stringify({ client_name: clientName }),
    }),

  // Contact form APIs
  submitContactForm: (data) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getContactSubmissions: (status) => {
    const query = status ? `?status=${status}` : "";
    return request(`/contact/submissions${query}`);
  },
};
