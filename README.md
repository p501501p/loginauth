# SimpleAuth

เว็บแอปพลิเคชันตัวอย่างสำหรับสมัครสมาชิกและเข้าสู่ระบบ พัฒนาด้วย Next.js รองรับการยืนยันตัวตนด้วยอีเมลและรหัสผ่าน รวมถึง GitHub OAuth

## ความสามารถ

- สมัครสมาชิกด้วยชื่อ อีเมล และรหัสผ่าน
- ตรวจสอบรูปแบบอีเมล ความยาวรหัสผ่าน และการยืนยันรหัสผ่าน
- แฮชรหัสผ่านก่อนบันทึกลงฐานข้อมูล
- เข้าสู่ระบบด้วยอีเมล/รหัสผ่าน หรือ GitHub
- กำหนดบทบาท `USER`, `STAFF` และ `ADMIN` เพื่อควบคุมสิทธิ์หน้า Admin
- หน้าแรกและหน้าสมัคร/เข้าสู่ระบบรองรับการแสดงผลบนมือถือ

## เทคโนโลยี

- Next.js 16 และ React 19
- TypeScript และ Tailwind CSS 4
- Auth.js (NextAuth.js) สำหรับยืนยันตัวตน
- Prisma ORM 7 และ SQLite
- bcryptjs สำหรับแฮชรหัสผ่าน

## เริ่มต้นใช้งาน

### ข้อกำหนด

- Node.js 20.9 ขึ้นไป
- npm

### ติดตั้ง

เปิด Terminal ในโฟลเดอร์ `my-app` แล้วติดตั้ง dependencies:

```bash
npm install
```

สร้างไฟล์ `.env.local` ในโฟลเดอร์ `my-app`:

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="ใส่ค่า secret แบบสุ่มที่คาดเดาได้ยาก"
AUTH_GITHUB_ID="GitHub OAuth Client ID"
AUTH_GITHUB_SECRET="GitHub OAuth Client Secret"
```

ตั้งค่า `AUTH_SECRET` ให้เป็นค่าลับที่สุ่มและไม่ซ้ำกับโปรเจกต์อื่น หากยังไม่ใช้ GitHub OAuth สามารถเว้นค่าตัวแปร `AUTH_GITHUB_ID` และ `AUTH_GITHUB_SECRET` ไว้ได้

ซิงก์ schema กับ SQLite และสร้าง Prisma Client:

```bash
npm run db:setup
```

เริ่มเซิร์ฟเวอร์:

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

## ตั้งค่า GitHub OAuth

สร้าง GitHub OAuth App แล้วกำหนด URL ดังนี้:

- **Homepage URL:** `http://localhost:3000`
- **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`

นำ Client ID และ Client Secret มาใส่ใน `AUTH_GITHUB_ID` และ `AUTH_GITHUB_SECRET` ตามลำดับ จากนั้นเริ่มเซิร์ฟเวอร์ใหม่

## เส้นทางในแอป

| URL | รายละเอียด |
| --- | --- |
| `/` | หน้าแรก พร้อมปุ่มสมัครสมาชิกและเข้าสู่ระบบ |
| `/signUp` | สมัครสมาชิก |
| `/login` | เข้าสู่ระบบด้วยอีเมล/รหัสผ่าน หรือ GitHub |
| `/admin` | หน้าสำหรับผู้ใช้ที่มีบทบาท `ADMIN` เท่านั้น |
| `/unauthorized` | หน้าแจ้งเตือนเมื่อไม่มีสิทธิ์เข้าถึง |

บัญชีที่สมัครผ่านหน้าเว็บจะได้รับบทบาท `USER` โดยค่าเริ่มต้น การเข้าหน้า `/admin` ต้องใช้บัญชีที่ได้รับบทบาท `ADMIN`

## ฐานข้อมูล

โปรเจกต์ใช้ SQLite โดยค่าเริ่มต้น บันทึกฐานข้อมูลไว้ที่ `my-app/dev.db` และกำหนด Prisma schema ใน `app/prisma/schema.prisma`

หากแก้ไข schema ให้รันคำสั่งนี้อีกครั้ง:

```bash
npm run db:setup
```

## คำสั่งที่ใช้บ่อย

```bash
npm run dev       # เริ่มเซิร์ฟเวอร์สำหรับพัฒนา
npm run lint      # ตรวจสอบโค้ดด้วย ESLint
npm run build     # สร้างแอปสำหรับใช้งานจริง
npm run start     # เริ่มเซิร์ฟเวอร์จาก production build
npm run db:setup  # ซิงก์ฐานข้อมูลและสร้าง Prisma Client
```

## ความปลอดภัย

- อย่า commit ไฟล์ `.env.local` หรือเผยแพร่ `AUTH_SECRET` และ GitHub Client Secret
- รหัสผ่านถูกแฮชก่อนจัดเก็บ และบัญชีที่สมัครใหม่เป็น `USER`
- ควรตั้งค่า secret และ OAuth credentials แยกกันระหว่าง development กับ production
