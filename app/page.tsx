import Link from "next/link";

const features = [
  {
    number: "01",
    title: "เริ่มต้นได้ง่าย",
    description: "สร้างบัญชีด้วยอีเมลและรหัสผ่านในไม่กี่ขั้นตอน",
  },
  {
    number: "02",
    title: "ปลอดภัยตั้งแต่ต้น",
    description: "รหัสผ่านถูกแฮชก่อนจัดเก็บ และแยกสิทธิ์ตามบทบาทผู้ใช้",
  },
  {
    number: "03",
    title: "เลือกวิธีที่ใช่",
    description: "เข้าสู่ระบบด้วยบัญชีของคุณ หรือเชื่อมต่อผ่าน GitHub",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f7f2] text-[#18201c]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-10">
        <header className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-3" aria-label="หน้าแรก">
            <span className="grid size-10 place-items-center rounded-2xl bg-[#1e493d] text-lg font-semibold text-white">
              S
            </span>
            <span className="text-sm font-semibold tracking-[0.16em]">
              SIMPLE<span className="text-[#5f806f]">AUTH</span>
            </span>
          </Link>

          <nav className="flex items-center gap-3 text-sm font-medium">
            <Link
              href="/login"
              className="rounded-full px-4 py-2.5 text-[#58635c] transition hover:text-[#1e493d]"
            >
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/signUp"
              className="rounded-full bg-[#1e493d] px-5 py-2.5 text-white shadow-sm transition hover:bg-[#16392f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e493d]"
            >
              Sign up <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>

        <section className="relative grid flex-1 items-center gap-14 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce5dc] bg-white/70 px-4 py-2 text-xs font-medium tracking-wide text-[#496555]">
              <span className="size-2 rounded-full bg-[#83a78b]" />
              YOUR SPACE, YOUR WAY
            </div>
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              เริ่มต้นพื้นที่
              <br />
              <span className="font-serif font-normal italic text-[#6b8b76]">
                ของคุณเอง
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#68726b] sm:text-lg">
              ระบบสมาชิกที่เรียบง่ายและปลอดภัย
              พร้อมให้คุณเริ่มต้นใช้งานได้ทันที
              สร้างบัญชีของคุณแล้วไปต่อได้เลย
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/signUp"
                className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#1e493d] px-7 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(30,73,61,0.7)] transition hover:-translate-y-0.5 hover:bg-[#16392f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e493d]"
              >
                สมัครสมาชิกฟรี
                <span aria-hidden="true" className="text-lg">
                  →
                </span>
              </Link>
              <span className="text-sm text-[#778078]">
                มีบัญชีแล้ว?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#315846] underline decoration-[#b8c9ba] underline-offset-4 hover:text-[#1e493d]"
                >
                  เข้าสู่ระบบ
                </Link>
              </span>
            </div>
            <div className="mt-12 flex items-center gap-3 text-xs text-[#758078]">
              <span className="flex -space-x-2" aria-hidden="true">
                <span className="size-7 rounded-full border-2 border-[#f6f7f2] bg-[#d7b69c]" />
                <span className="size-7 rounded-full border-2 border-[#f6f7f2] bg-[#9db5a2]" />
                <span className="size-7 rounded-full border-2 border-[#f6f7f2] bg-[#c9c7a8]" />
              </span>
              เรียบง่าย ใช้งานสะดวก และเป็นส่วนตัว
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[360px] w-full max-w-lg items-center justify-center lg:min-h-[500px]">
            <div className="absolute size-[min(78vw,430px)] rounded-full bg-[#e6ede3]" />
            <div className="absolute right-[9%] top-[10%] size-16 rounded-full border border-[#b6c9b7]" />
            <div className="absolute bottom-[13%] left-[4%] size-9 rounded-full bg-[#d7b69c]/70" />
            <div className="relative w-full max-w-[370px] rotate-[-3deg] rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_35px_90px_-35px_rgba(31,57,43,0.28)] backdrop-blur sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#87928a]">
                    Welcome back
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-tight">
                    Your account
                  </p>
                </div>
                <span className="grid size-11 place-items-center rounded-2xl bg-[#e9f0e8] text-[#41664e]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                  >
                    <path
                      d="M12 3.5 19 6v5.3c0 4.4-2.9 7.7-7 9.2-4.1-1.5-7-4.8-7-9.2V6l7-2.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-8 rounded-2xl bg-[#f6f7f2] p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-[#78837b]">
                  <span>ACCOUNT STATUS</span>
                  <span className="rounded-full bg-[#e3eee2] px-2.5 py-1 font-medium text-[#52765a]">
                    Secure
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#e2e7df]">
                  <div className="h-full w-3/4 rounded-full bg-[#78967d]" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#edf0ea] p-4">
                <span className="grid size-10 place-items-center rounded-xl bg-[#f3e9df] text-sm font-semibold text-[#9a7154]">
                  A
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">Your personal space</p>
                  <p className="mt-1 text-xs text-[#87928a]">
                    พร้อมให้คุณเริ่มใช้งาน
                  </p>
                </div>
                <span className="text-[#829686]" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[#edf0ea] pt-4 text-xs text-[#87928a]">
                <span>Protected with care</span>
                <span className="tracking-[0.2em]">✳ ✳ ✳</span>
              </div>
            </div>
            <div className="absolute bottom-[8%] right-0 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-lg shadow-[#244530]/10">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#89948b]">
                Sign in
              </p>
              <p className="mt-1 text-sm font-semibold text-[#315846]">
                Simple & secure
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-7 border-t border-[#e4e9e1] py-8 sm:grid-cols-3 sm:gap-8 sm:py-10">
          {features.map((feature) => (
            <article key={feature.number} className="flex gap-4">
              <span className="pt-1 text-xs font-semibold tracking-widest text-[#92a293]">
                {feature.number}
              </span>
              <div>
                <h2 className="text-sm font-semibold">{feature.title}</h2>
                <p className="mt-1.5 text-sm leading-6 text-[#778078]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </section>
        <footer className="flex items-center justify-between border-t border-[#e4e9e1] py-5 text-xs text-[#87928a]">
          <span>© 2026 SimpleAuth</span>
          <Link href="/login" className="transition hover:text-[#315846]">
            เข้าสู่ระบบ
          </Link>
        </footer>
      </div>
    </main>
  );
}
