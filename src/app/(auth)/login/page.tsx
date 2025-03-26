"use client";

import Cookies from "js-cookie"; // Import js-cookie
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    { username: "Jai Kumar", password: "123abc" },
    { username: "Zarawar", password: "pass456" },
    { username: "Afsand", password: "qwerty789" },
    { username: "Ikram", password: "securePass1" },
    { username: "Farman", password: "securePass2" }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setError(""); // Clear any previous errors

    // Check if the entered username and password match any user
    const user = users.find((u) => u.username === username && u.password === password);

    if(!user) {
        setError("Invalid username or password");
        return;
    }

    // localStorage.setItem("loggedInUser", JSON.stringify(user));
    Cookies.set("loggedInUser", JSON.stringify(user), {
      expires: 1, // 1 day
      path: '/' // available everywhere
    })

    // Redirect to the dashboard page after successful login
    router.push("/");
  };

  useEffect(() => {
    const loggedInUser = Cookies.get("loggedInUser");

    if (loggedInUser) {
      router.push("/"); // Redirect to login if no user is found
    }
    console.log(loggedInUser);
  },[])

  return (
    <div className="flex justify-center items-center h-screen b-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 font-semibold shadow-lg w-80"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded mt-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button 
        type="submit"
        className="w-full bg-teal-500 text-white py-2 rounded mt-3 hover:bg-teal-600 transition cursor-pointer"
        >Login</button>
      </form>
    </div>
  );
}
