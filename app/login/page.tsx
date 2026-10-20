"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      return;
    }

    router.push("/admin");
    router.refresh();
  }
  const githubSignIn = async () => {
    await signIn("github", {
      callbackUrl: "/",
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f7f2] px-4 py-10 text-[#18201c]">
      <div className="w-full max-w-md rounded-[2rem] border border-white bg-white p-7 shadow-[0_24px_70px_-35px_rgba(31,57,43,0.3)] sm:p-9">
        <Link href="/" className="mb-8 flex items-center justify-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-[#1e493d] text-lg font-semibold text-white">
            S
          </span>
          <span className="text-sm font-semibold tracking-[0.16em]">
            SIMPLE<span className="text-[#5f806f]">AUTH</span>
          </span>
        </Link>

        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78917e]">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            เข้าสู่ระบบ
          </h1>
          <p className="mt-2 text-sm text-[#778078]">
            ยินดีต้อนรับกลับมา เข้าสู่บัญชีของคุณ
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#39463d]"
            >
              อีเมล
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#dfe6de] bg-[#fbfcf9] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0aaa2] focus:border-[#78967d] focus:ring-4 focus:ring-[#78967d]/10"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#39463d]"
            >
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="กรอกรหัสผ่าน"
              className="w-full rounded-xl border border-[#dfe6de] bg-[#fbfcf9] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0aaa2] focus:border-[#78967d] focus:ring-4 focus:ring-[#78967d]/10"
              required
            />
          </div>

          {error && (
            <p
              id="login-error"
              role="alert"
              className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            aria-describedby={error ? "login-error" : undefined}
            className="w-full rounded-full bg-[#1e493d] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16392f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e493d]"
          >
            เข้าสู่ระบบ
          </button>
          <div className="flex items-center gap-4 py-1 text-xs text-[#9aa39c]">
            <span className="h-px flex-1 bg-[#e8ece6]" />
            หรือ
            <span className="h-px flex-1 bg-[#e8ece6]" />
          </div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#dfe6de] bg-white px-4 py-3 text-sm font-medium text-[#39463d] transition hover:bg-[#f8faf6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78967d]"
            onClick={githubSignIn}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-5 fill-current"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.06c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.02 3.38 1.5.1-.72.4-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            เข้าสู่ระบบด้วย GitHub
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-[#778078]">
          ยังไม่มีบัญชี?
          <Link
            href="/signUp"
            className="ml-1 font-semibold text-[#315846] underline decoration-[#b8c9ba] underline-offset-4 hover:text-[#1e493d]"
          >
            สมัครสมาชิก
          </Link>
        </p>
      </div>
    </main>
  );
}