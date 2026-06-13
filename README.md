# Marketimes Asia — Homepage Mockup

Web Mockup หน้าแรกสำหรับเว็บไซต์ข่าวธุรกิจ **Marketimes Asia**  
พร้อม Routing จริงและ Deploy บน Vercel

## Preview

```bash
cd marketimes-asia-mockup
npm install
npm run dev
```

เปิด `http://localhost:5173`

## Routes

| Path | หน้า |
|------|------|
| `/` | หน้าแรก — เฉพาะข่าว Tag **Headline** |
| `/headline` | รวมข่าว Headline ทั้งหมด |
| `/movement` | หมวด Movement (รวมข่าวที่ไม่มี Tag Headline) |
| `/insight` | หมวด Insight |
| `/people` | หมวด People |
| `/lifestyle` | หมวด Lifestyle |
| `/articles` | บทความทั้งหมดทุกหมวด |
| `/article/:id` | หน้าอ่านบทความ |
| `/contact` | ติดต่อเรา |

## Deploy บน Vercel

### วิธีที่ 1 — Vercel CLI

```bash
npm i -g vercel
cd marketimes-asia-mockup
vercel
```

### วิธีที่ 2 — เชื่อม GitHub

1. Push โปรเจกต์ขึ้น GitHub
2. ไป [vercel.com/new](https://vercel.com/new) → Import repository
3. Vercel จะ detect Vite อัตโนมัติ
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy

ไฟล์ `vercel.json` ตั้งค่า SPA rewrite ให้แล้ว — refresh หน้าย่อยได้ปกติ

## หมายเหตุสำหรับลูกค้า

ส่วน **"Logic สำคัญของหน้า Home"** ที่เคยแสดงท้ายหน้าเว็บ **ถูกเอาออกแล้ว** — เป็นโน้ตสำหรับทีม dev ตอนออกแบบ ไม่ใช่ส่วนที่ผู้ใช้ทั่วไปควรเห็นบนหน้าเว็บจริง

Logic ยังทำงานใน Mockup ดังนี้:
- หน้า `/` แสดงเฉพาะข่าว Tag Headline (20 ข่าว)
- ข่าว id 21–28 ไม่มี Tag Headline → **ไม่ขึ้นหน้าแรก** แต่เห็นได้ที่ `/movement`, `/insight` ฯลฯ และ `/articles`
- ปุ่ม **ดูบทความทั้งหมด** → `/articles`

## โครงสร้าง

```
src/
├── pages/          # หน้า Route แต่ละหน้า
├── components/     # UI Components
├── data/           # ข้อมูล Mockup
└── utils/          # Image helpers (Unsplash)
```

รูปภาพใช้ Unsplash สำหรับ Mockup — แทนที่ด้วยรูปจริงตอน WordPress
