"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [suiteName, setSuiteName] = useState("");
  const [ran, setRan] = useState(false);

  function handleRun() {
    if (!suiteName.trim()) return;
    setRan(true);
  }

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6">Test Workspace</h2>
      <div className="max-w-xl space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Test suite name</label>
          <input
            type="text"
            value={suiteName}
            onChange={(e) => setSuiteName(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
            placeholder="e.g. Authentication suite"
          />
        </div>
        <button
          onClick={handleRun}
          className="px-4 py-2 bg-[#A855F7] text-white rounded-md hover:bg-[#9333EA] transition"
        >
          Run Tests
        </button>
      </div>

      {ran && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Pass rate</p>
            <p className="text-3xl font-bold text-[#A855F7]">94%</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Failed tests</p>
            <p className="text-3xl font-bold text-red-500">2</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Coverage</p>
            <p className="text-3xl font-bold text-[#A855F7]">87%</p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Predicted flaky tests</p>
            <p className="text-lg font-semibold">test_login</p>
          </div>
        </div>
      )}
    </div>
  );
}
