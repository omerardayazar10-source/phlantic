# Phlantic — Landing Page

Next.js + Tailwind CSS ile geliştirilmiş, tek sayfalık dönüşüm odaklı açılış sayfası.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Yapı

```
src/
  app/
    layout.tsx        Root layout — Plus Jakarta Sans + Inter, metadata, ikon fontu
    page.tsx          Sayfa kompozisyonu (akış)
    globals.css       Tailwind + brand utility'leri (btn-primary, card, eyebrow, vs.)
  components/
    Navbar.tsx        Sticky, mobil drawer'lı üst menü
    Hero.tsx          Başlık + CTA + dashboard mockup
    DashboardMockup   Inline SVG (yer tutucu görsel yerine)
    Sectors.tsx       Sektör ikonları şeridi
    Features.tsx      4'lü hizmet kart grid'i
    BentoGrid.tsx     Çekirdek hizmet + güvenlik bento
    Approach.tsx      Yaklaşım + sayısal vurgu
    CalendlySection   Calendly inline embed (URL hazır olunca otomatik bağlanır)
    Footer.tsx        Footer
    ChatbotSlot.tsx   Sağ-alt köşe için rezerve fixed slot (z-chatbot)
    Icon.tsx, Logo.tsx
  lib/
    content.ts        Tüm Türkçe metinler ve site sabitleri
```

## Tasarım Sistemi

`tailwind.config.ts` içinde `DESIGN (1).md` YAML metadata'sındaki tüm tokenlar
1:1 olarak tanımlandı:

- Tüm **renkler** (primary / surface / on-surface varyantları)
- **Tipografi** (`text-h1`, `text-h2`, `text-h3`, `text-body-lg/md`, `text-label-caps`)
- **Spacing** (`gutter`, `section-padding`, `unit`, `margin-mobile`, `container-max`)
- **Border radius** (`sm` 0.25rem → `xl` 1.5rem)

## Calendly

`src/lib/content.ts` içindeki `SITE.calendlyUrl` değerini gerçek bağlantınızla
değiştirin. Bu yapıldığında `CalendlySection` script'i otomatik yükler ve
takvim sayfaya gömülü olarak görünür. URL hâlâ varsayılansa fallback CTA
gösterilir.

## Chatbot Widget Slotu

Chatbot widget'ı `#phlantic-chatbot-slot` (z-index 70 = `z-chatbot`) içine
mount edilmek üzere bekliyor. Sticky navbar `z-nav` (40), modallar `z-modal`
(60). Bu hiyerarşi `tailwind.config.ts > theme.extend.zIndex` altında
tanımlı; widget hiçbir UI ile çakışmaz.

## Mobile-first

Tüm bölümler mobil baz tasarım üzerine inşa edildi; `sm:`, `md:`, `lg:`
kırılma noktalarında yukarı doğru ölçeklenir. Hero başlığı 4xl → 6xl → 72px
arası yumuşak bir aşamalı büyüme izler.
