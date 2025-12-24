import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));
    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
            required
          />

          <button className="w-full bg-black text-white p-3 rounded-lg">
            Create Account
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already registered?{" "}
          <Link to="/login" className="font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
