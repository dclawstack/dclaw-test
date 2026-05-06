const API_BASE = "/api/v1";

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || res.statusText);
  }
  return res.json() as Promise<T>;
}

export type TestSuite = {
  id: string;
  name: string;
  pass_rate: number;
  failed_count: number;
  coverage_percent: number;
  flaky_predictions: string[];
  created_at: string;
};
