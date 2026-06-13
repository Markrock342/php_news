---
name: Market Times
description: Thai business news mockup — editorial magazine layout with teal brand accent
colors:
  brand: "#1f6863"
  brand-dark: "#164e4a"
  brand-light: "#148f77"
  brand-bg: "#e6f2ef"
  ink: "#111111"
  ink-muted: "#666666"
  ink-subtle: "#999999"
  surface: "#ffffff"
  surface-muted: "#f7f7f7"
  border: "#dddddd"
typography:
  display:
    fontFamily: "Prompt, sans-serif"
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "Prompt, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Prompt, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  md: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.brand-dark}"
  category-badge:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

## Overview

Market Times ใช้ layout แบบ magazine: hero เต็มความกว้าง, เนื้อหาหลัก + sidebar 300px, navigation sticky สี teal โทน editor สะอาด อ่านง่าย มี motion เบาๆ ตอนโหลดหน้าและ hover

## Colors

- **Primary (brand)**: `#1f6863` — nav, heading accent, badges, CTA
- **Brand light**: `#148f77` — hover links, secondary accent
- **Brand bg**: `#e6f2ef` — footer, subtle sections
- **Neutrals**: ink `#111`, muted `#666`, subtle `#999`, borders `#ddd`
- หลีกเลี่ยง pure black/white; ใช้ tinted neutrals

## Typography

- **Font**: Prompt (Google Fonts) — ลูกค้ากำหนดไว้สำหรับภาษาไทย
- **Headings**: 700 weight, letter-spacing ปกติ, fluid clamp บน hero
- **Labels/Nav**: uppercase, 0.04–0.06em tracking
- **Body**: 17px / 1.7 line-height, max ~70ch ใน prose

## Elevation

Flat editorial — ไม่ใช้ card shadow หนัก. ใช้ border 1px `#ddd`, hover ยกด้วย `translateY(-2px)` + shadow เบา. Nav ใช้ shadow `0 2px 8px rgba(0,0,0,0.08)`.

## Components

- **Navigation**: sticky teal bar, active = white underline + darker bg tint
- **Hero**: 16:10 image, gradient overlay bottom, category badge + title + meta
- **Latest News**: numbered rows 1|6, 2|7… thumbnail 88×66 + title 2-line clamp
- **Sidebar**: search, ad 300×250, about, social icons SVG
- **Buttons**: solid teal, hover darken, subtle scale on press

Motion sidecar: entrance 500–700ms ease-out-quint; micro 150–200ms; stagger 60ms per list item; respect reduced-motion.

## Do's and Don'ts

**Do**: ใช้ brand teal เป็น accent, จัด hierarchy ชัด, animation บน hero + list stagger, โฆษณา sidebar เท่านั้น

**Don't**: gradient text, side-stripe borders, glassmorphism, โฆษณาใน hero/feed, bounce easing, card-in-card nesting
