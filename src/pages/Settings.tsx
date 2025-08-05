import React, { useState } from "react";

export const Settings = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("john@example.com");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Settings saved!\nUsername: ${username}\nEmail: ${email}`);
  };

  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">User Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
