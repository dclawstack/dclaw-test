import Link from "next/link";
import { Bug } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Bug className="w-16 h-16 text-[#A855F7] mb-6" />
      <h1 className="text-4xl font-bold text-[#A855F7] mb-4">DClaw Test</h1>
      <p className="text-lg text-gray-600 mb-8">Automated testing & bug prediction</p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-[#A855F7] text-white rounded-lg hover:bg-[#9333EA] transition"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
