import React from "react";

const AdminSettings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Shop Info */}
      <div className="bg-white p-4 shadow rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Barber Shop Info</h2>
        <div className="space-y-2">
          <input type="text" placeholder="Name" className="border p-2 w-full" />
          <input
            type="text"
            placeholder="Phone number"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Location"
            className="border p-2 w-full"
          />
        </div>
      </div>

      {/* Booking Settings */}
      <div className="bg-white p-4 shadow rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Booking Settings</h2>
        <div className="space-y-2">
          <select className="border p-2 w-full">
            <option value="">Booking interval</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
          </select>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="bg-white p-4 shadow rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment Settings</h2>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Enable online payment</span>
          </label>
          <select className="border p-2 w-full">
            <option value="">Select a currency</option>
            <option value="UZS">UZS</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>

      {/* Save Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
        Save
      </button>
    </div>
  );
};

export default AdminSettings;
