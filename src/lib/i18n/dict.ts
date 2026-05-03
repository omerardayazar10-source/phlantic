/**
 * Phlantic copy lives here as a paired dictionary. Every visible string in
 * the marketing site is translated; tone is professional B2B (operations
 * leverage, margin, lead generation, automation) — not literal word-for-word.
 */

export const LOCALES = ["tr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const dict = {
  brand: { tr: "Phlantic", en: "Phlantic" },
  founder: { tr: "Ömer Arda Yazar", en: "Ömer Arda Yazar" },

  nav: {
    solutions: { tr: "Çözümler", en: "Solutions" },
    services: { tr: "Hizmetler", en: "Services" },
    approach: { tr: "Yaklaşım", en: "Approach" },
    contact: { tr: "İletişim", en: "Contact" },
    bookCall: { tr: "Görüşme Planla", en: "Book a Call" },
    getStarted: { tr: "Başlayın", en: "Get Started" },
    openMenu: { tr: "Menüyü aç", en: "Open menu" },
    closeMenu: { tr: "Menüyü kapat", en: "Close menu" },
    switchLang: { tr: "Dili değiştir", en: "Switch language" },
    switchTheme: { tr: "Temayı değiştir", en: "Switch theme" },
    themeLight: { tr: "Aydınlık", en: "Light" },
    themeDark: { tr: "Karanlık", en: "Dark" },
    themeSystem: { tr: "Sistem", en: "System" },
  },

  hero: {
    eyebrow: {
      tr: "Yapay Zeka • n8n • Özel Sistemler",
      en: "AI • n8n • Custom Systems",
    },
    headline: {
      tr: "Operasyonel yükü silen otonom altyapı.",
      en: "Autonomous infrastructure that erases operational drag.",
    },
    description: {
      tr: "Phlantic, manuel süreçlerinizi yapay zeka ve n8n ile uçtan uca otomatize eder; zaman kaybını sıfırlar, kar marjınızı doğrudan yukarı çeker.",
      en: "Phlantic automates your manual workflows end-to-end with AI and n8n — eliminating time loss and lifting your margin where it matters.",
    },
    primaryCta: {
      tr: "Ücretsiz Görüşme Planla",
      en: "Book a Free Consultation",
    },
    secondaryCta: { tr: "Çözümleri Keşfet", en: "Explore Solutions" },
  },

  sectors: {
    label: {
      tr: "Sektör bağımsız çözümler üretiyoruz",
      en: "Industry-agnostic by design",
    },
    items: {
      ecommerce: { tr: "E-Ticaret", en: "E-Commerce" },
      support: { tr: "Müşteri Hizmetleri", en: "Customer Support" },
      realEstate: { tr: "Emlak", en: "Real Estate" },
      manufacturing: { tr: "Üretim", en: "Manufacturing" },
      healthcare: { tr: "Sağlık", en: "Healthcare" },
      finance: { tr: "Finans", en: "Finance" },
    },
  },

  features: {
    eyebrow: { tr: "Hizmetler", en: "Services" },
    heading: {
      tr: "İşletmenize ölçülebilir verim getiren çözümler.",
      en: "Solutions engineered for measurable operational leverage.",
    },
    sub: {
      tr: "Her hizmet, somut bir maliyet kalemini düşürmek ya da bir gelir kanalını büyütmek üzere kurgulanır.",
      en: "Every engagement is scoped to either compress a real cost center or grow a revenue channel — never both vaguely.",
    },
    items: {
      workflow: {
        title: { tr: "İş Akışı Otomasyonu", en: "Workflow Automation" },
        body: {
          tr: "n8n altyapısıyla CRM, e-posta ve veritabanı sistemlerinizi tek bir hatasız akışta birleştirir; tekrarlayan işleri sıfıra indirir.",
          en: "We unify CRM, email and database systems on n8n into a single fault-tolerant orchestration — driving repetitive work to zero.",
        },
      },
      outbound: {
        title: { tr: "B2B Kurumsal Erişim", en: "B2B Outbound Engine" },
        body: {
          tr: "Instantly entegrasyonlu otonom soğuk e-posta altyapıları ile ölçeklenebilir lead generation; sürekli ve tahmin edilebilir pipeline.",
          en: "Autonomous cold-email infrastructure with Instantly — scalable lead generation that produces a steady, predictable pipeline.",
        },
      },
      agents: {
        title: { tr: "Akıllı AI Asistanları", en: "Intelligent AI Agents" },
        body: {
          tr: "Anthropic API ve n8n üzerinde çalışan özel chatbotlar; müşteri hizmetlerini 7/24 otomatize ederek operasyonel maliyeti düşürür.",
          en: "Custom agents on Anthropic + n8n that operate customer support around the clock — collapsing CX cost per ticket.",
        },
      },
      margin: {
        title: { tr: "Kar Optimizasyonu", en: "Margin Optimization" },
        body: {
          tr: "İnsan kaynaklı hataları, gecikmeleri ve operasyonel zararları bertaraf eden ölçülebilir altyapılarla doğrudan kar marjı etkisi.",
          en: "Removable error, latency and friction translate directly into margin. We instrument what matters and ship what compounds.",
        },
      },
    },
  },

  bento: {
    heading: { tr: "Karmaşıklık için tasarlandı.", en: "Architected for complexity." },
    sub: {
      tr: "İşletmenize özel entegrasyonlar, tescilli iş akışları ve ölçeklenebilir mimariler.",
      en: "Bespoke integrations, proprietary workflows and architectures built to scale with you.",
    },
    coreEyebrow: { tr: "Çekirdek Hizmet", en: "Core Service" },
    coreTitle: {
      tr: "Verimlilik & Kar Optimizasyonu",
      en: "Operational Leverage & Margin",
    },
    coreBody: {
      tr: "Sektör bağımsız: süreçlerinizi haritalar, manuel işleri yapay zekayla devre dışı bırakır ve marjınızı doğrudan yukarı çekeriz.",
      en: "Industry-agnostic: we map your processes, retire manual steps with AI, and lift margin in measurable, defensible ways.",
    },
    n8nTitle: { tr: "n8n Entegrasyonu", en: "n8n Integration" },
    n8nBody: {
      tr: "CRM, e-posta ve veritabanı sistemlerinizi tek bir hatasız orkestrasyonda birleştiririz.",
      en: "Your CRM, email and data layers unified in a single, fault-tolerant orchestration.",
    },
    perfTitle: { tr: "Performans Görselleştirme", en: "Performance Visibility" },
    perfBody: {
      tr: "Otomasyonların kazandırdığı zamanı ve marjı canlı dashboardlarla ölçülebilir kılarız.",
      en: "Live dashboards turn time recovered and margin gained into auditable, board-ready signal.",
    },
    secTitle: { tr: "Veri sahipliği sizde kalır.", en: "Your data stays yours." },
    secBody: {
      tr: "Tescilli verileriniz hiçbir zaman halka açık modellere gönderilmez; izole, denetlenebilir altyapı.",
      en: "Proprietary data never trains public models; isolated, auditable infrastructure by default.",
    },
  },

  approach: {
    eyebrow: { tr: "Yaklaşım", en: "Approach" },
    heading: {
      tr: "Süslü vaatler değil, ölçülebilir verim.",
      en: "No theater. Just measurable leverage.",
    },
    intro: {
      tr: "Süslü vaatler değil, ölçülebilir verim. Phlantic her projede aynı disiplini uygular.",
      en: "We bring the same discipline to every engagement: instrument the cost, ship what compounds, retire what doesn't.",
    },
    pillars: {
      bottleneck: {
        title: {
          tr: "Önce darboğaz, sonra çözüm.",
          en: "Diagnose the bottleneck before prescribing the fix.",
        },
        body: {
          tr: "Süreçlerinizi haritalayıp para sızdıran adımları belirleriz. Otomasyon ancak gerçek bir maliyet kalemini düşürüyorsa anlamlıdır.",
          en: "We map your operation and pinpoint where margin actually leaks. Automation is justified only when it removes a real cost line.",
        },
      },
      lean: {
        title: {
          tr: "Hafif, sürdürülebilir mimari.",
          en: "Lean architecture, built to outlive the engagement.",
        },
        body: {
          tr: "Aşırı mühendislik yapmıyoruz. n8n, Anthropic API ve mevcut araçlarınızla; ekibinizin yıllarca yönetebileceği sade sistemler kuruyoruz.",
          en: "No over-engineering. We compose n8n, Anthropic and your existing stack into systems your team can own for years.",
        },
      },
    },
  },

  stats: {
    timeSaved: { tr: "Operasyonel zaman tasarrufu", en: "Operational time recovered" },
    autonomous: { tr: "Otonom çalışan asistanlar", en: "Autonomous agents on duty" },
    manualErr: { tr: "Manuel hata payı", en: "Manual error rate" },
    timeSavedValue: { tr: "%40+", en: "40%+" },
    autonomousValue: { tr: "7/24", en: "24/7" },
    manualErrValue: { tr: "0", en: "0" },
  },

  contact: {
    eyebrow: { tr: "İletişim", en: "Contact" },
    heading: {
      tr: "15 dakikada operasyonel haritanızı çıkaralım.",
      en: "Map your operation with us in 15 minutes.",
    },
    description: {
      tr: "Süreçlerinizdeki en pahalı darboğazları belirleyip, hangi otomasyonun kar marjınıza ne kadar etki edeceğini birlikte konuşalım. Görüşme ücretsizdir; satış değil, teşhis odaklıdır.",
      en: "We isolate the most expensive bottlenecks and quantify the margin impact of each automation play. The call is free — diagnostic, not sales.",
    },
    benefits: {
      diagnostic: {
        tr: "Sektörünüze özel hızlı diagnostik",
        en: "Industry-specific rapid diagnostic",
      },
      gain: {
        tr: "Kazanım potansiyeli (saat & maliyet) tahmini",
        en: "Hours-and-cost gain estimate",
      },
      recommendations: {
        tr: "Uygulanabilir 2-3 öneri, baskısız",
        en: "Two or three actionable recommendations — no pressure",
      },
    },
    cardTitle: { tr: "Hazır olduğunda takvimi aç.", en: "Open the calendar when you're ready." },
    cardBody: {
      tr: "Görüşme Planla butonuna tıklayınca Calendly takvimi sayfanın ortasında açılır. Müsait bir slot seç, gerisini halledelim.",
      en: "Click Book a Call and Calendly opens centered on this page. Pick a slot — we'll handle the rest.",
    },
    cardCta: { tr: "Görüşme Planla", en: "Book a Call" },
    cardMeta: { tr: "15 dakika · Ücretsiz · Türkçe / İngilizce", en: "15 minutes · Free · English / Turkish" },
    recordingNotice: {
      tr: "Görüşmeler hizmet kalitesi gereği kayıt altına alınabilir.",
      en: "Sessions may be recorded for quality assurance purposes.",
    },
  },

  footer: {
    blurb: {
      tr: "Phlantic, n8n ve yapay zeka altyapısıyla işletmelerin operasyonel maliyetini düşürür, kar marjını yukarı çeker.",
      en: "Phlantic compresses operational cost and lifts margin with n8n and AI infrastructure built for the long run.",
    },
    site: { tr: "Site", en: "Site" },
    social: { tr: "Sosyal", en: "Social" },
    legal: { tr: "Yasal", en: "Legal" },
    rights: {
      tr: "Tüm hakları saklıdır.",
      en: "All rights reserved.",
    },
    foundedBy: { tr: "Kurucu:", en: "Founder:" },
    privacy: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
    terms: { tr: "Kullanım Koşulları", en: "Terms of Service" },
  },

  chatbot: {
    title: { tr: "Phlantic Asistan", en: "Phlantic Assistant" },
    subtitle: { tr: "7/24 · Türkçe / İngilizce", en: "24/7 · English / Turkish" },
    welcome: {
      tr: "Phlantic'e hoş geldiniz. Hangi süreci kolaylaştırmak istersiniz?",
      en: "Welcome to Phlantic. Which process would you like to streamline?",
    },
    placeholder: { tr: "Mesajını yaz…", en: "Type a message…" },
    send: { tr: "Gönder", en: "Send" },
    open: { tr: "Asistanı aç", en: "Open assistant" },
    close: { tr: "Asistanı kapat", en: "Close assistant" },
    youLabel: { tr: "Sen", en: "You" },
    error: { tr: "Bir hata oluştu, lütfen tekrar deneyin.", en: "Something went wrong, please try again." },
    suggestions: {
      tr: [
        "Süreçlerinizi nasıl optimize ederiz?",
        "n8n ile ne tür entegrasyonlar yapıyorsunuz?",
        "Bir AI asistan oluşturmak istiyorum.",
      ],
      en: [
        "How would you optimize our processes?",
        "What kind of n8n integrations do you build?",
        "I'd like to set up an AI assistant.",
      ],
    },
  },
} as const;

type Dict = typeof dict;
type Leaf<T> = T extends { tr: string; en: string }
  ? string
  : T extends { tr: readonly string[]; en: readonly string[] }
    ? readonly string[]
    : T extends Record<string, unknown>
      ? { [K in keyof T]: Leaf<T[K]> }
      : never;

export type Translations = Leaf<Dict>;

export function buildTranslations(locale: Locale): Translations {
  const visit = (node: unknown): unknown => {
    if (
      node &&
      typeof node === "object" &&
      "tr" in (node as object) &&
      "en" in (node as object)
    ) {
      // Both string and readonly array entries land here.
      return (node as Record<Locale, unknown>)[locale];
    }
    if (node && typeof node === "object") {
      return Object.fromEntries(
        Object.entries(node as Record<string, unknown>).map(([k, v]) => [
          k,
          visit(v),
        ]),
      );
    }
    return node;
  };
  return visit(dict) as Translations;
}
