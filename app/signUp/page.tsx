"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { signUp, type SignUpState } from "@/app/signUp/actions";

const initialState: SignUpState = {};

export default function SignUpPage() {
  const router = useRouter();

  const [state, formAction, pending] = useActionState(signUp, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/login?registered=1");
    }
  }, [state.success, router]);

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
            Create an account
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            สมัครสมาชิก
          </h1>
          <p className="mt-2 text-sm text-[#778078]">
            สร้างบัญชีเพื่อเริ่มต้นใช้งาน
          </p>
        </div>

        <form action={formAction} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-[#39463d]"
            >
              ชื่อ
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full rounded-xl border border-[#dfe6de] bg-[#fbfcf9] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0aaa2] focus:border-[#78967d] focus:ring-4 focus:ring-[#78967d]/10"
              placeholder="ชื่อ-นามสกุล"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#39463d]"
            >
              อีเมล
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-xl border border-[#dfe6de] bg-[#fbfcf9] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0aaa2] focus:border-[#78967d] focus:ring-4 focus:ring-[#78967d]/10"
              placeholder="you@example.com"
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
              name="password"
              type="password"
              autoComplete="new-password"
              className="w-full rounded-xl border border-[#dfe6de] bg-[#fbfcf9] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0aaa2] focus:border-[#78967d] focus:ring-4 focus:ring-[#78967d]/10"
              placeholder="อย่างน้อย 6 ตัวอักษร"
              minLength={6}
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-[#39463d]"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              className="w-full rounded-xl border border-[#dfe6de] bg-[#fbfcf9] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0aaa2] focus:border-[#78967d] focus:ring-4 focus:ring-[#78967d]/10"
              placeholder="กรอกรหัสผ่านอีกครั้ง"
              minLength={6}
              required
            />
          </div>

          {state.error && (
            <div
              role="alert"
              className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700"
            >
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-[#1e493d] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16392f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e493d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "กำลังสร้างบัญชี..." : "สร้างบัญชี"}
          </button>
        </form>

        <div className="mt-7 text-center text-sm text-[#778078]">
          มีบัญชีอยู่แล้ว?
          <Link
            href="/login"
            className="ml-1 font-semibold text-[#315846] underline decoration-[#b8c9ba] underline-offset-4 hover:text-[#1e493d]"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </main>
  );
}