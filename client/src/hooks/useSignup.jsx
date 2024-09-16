import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { message } from "antd";

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerUser = async (values) => {
    setError(null); // Clear existing error

    if (values.password !== values.passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/admin/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 201) {
        message.success(data.message);
        if (data.token && data.user) {
          login(data.token, data.user);
        } else {
          throw new Error("Invalid response format");
        }
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        message.error("Registration failed");
      }
    } catch (error) {
      message.error("An error occurred: " + error.toString());
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser, clearError: () => setError(null) };
};

export default useSignup;
