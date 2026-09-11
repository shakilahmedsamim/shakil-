# Image Uploads — Instructions (বাংলা + English)

এই ফোল্ডারে তোমার নিজের ছবি আপলোড করবে GitHub থেকে সরাসরি, কোড না ছুঁয়ে।
পুরো ওয়েবসাইট দেখে যেসব জায়গায় real ছবি বসতে পারে তার সম্পূর্ণ তালিকা নিচে দেওয়া হলো।

## কিভাবে আপলোড করবে (Step by step)

1. GitHub-এ রিপোতে যাও: `shakilahmedsamim/shakil-`
2. উপরের branch dropdown থেকে branch সিলেক্ট করো: `claude/ads-agency-marketing-site-wbvq7r`
3. এই ফোল্ডারে ঢোকো: `public/images/uploads/`
4. **Add file → Upload files** বাটনে ক্লিক করো
5. তোমার ছবি ড্র্যাগ করে ছাড়ো — নিচের তালিকার এক্সাক্ট নাম দিয়ে
6. নিচে **Commit changes** বাটনে ক্লিক করে সরাসরি ওই branch-এ কমিট করো
7. ⭐ চিহ্নিত ফাইলগুলো (auto-detect) আপলোড করলেই পরের বার সাইট rebuild হলে নিজে থেকে বসে যাবে, কোনো কোড পরিবর্তন লাগবে না। বাকিগুলোর জন্য শুধু আমাকে বলবে কোনটা আপলোড করেছো, আমি কোডে বসিয়ে দেবো।

## ফাইলের নাম যেভাবে দেবে (Naming rules)

- শুধু ছোট হাতের অক্ষর, সংখ্যা, আর হাইফেন (`-`) ব্যবহার করো। স্পেস বা বাংলা অক্ষর ব্যবহার করবে না।
- এক্সটেনশন: `.jpg`, `.jpeg`, `.png`, বা `.webp`
- নিচের তালিকায় দেওয়া এক্সাক্ট নাম ব্যবহার করো (auto-detect ফাইলগুলোর জন্য নামটা হুবহু মিলতে হবে)

---

## সম্পূর্ণ তালিকা (Full list, page by page)

### ✅ Done
| Filename | কোথায় ব্যবহার হচ্ছে | Status |
|---|---|---|
| `about-founder.jpg` | About পেজের ফাউন্ডার ফটো | ✅ Uploaded, live |

### ⭐ Auto-detect (আপলোড করলেই নিজে থেকে বসে যাবে)
| Filename | কোথায় ব্যবহার হবে | Recommended size |
|---|---|---|
| `og-image.jpg` | সাইটের লিংক Facebook/WhatsApp/LinkedIn-এ শেয়ার করলে যে প্রিভিউ ছবি দেখায় (social share card) | 1200x630px |
| `testimonial-yarne-de-win.jpg` | Home পেজের reviews সেকশনে বাস্তব রিভিউয়ার Yarne de Win-এর ছবি (LinkedIn ছবি, permission থাকলে) | 200x200px, square |

### 📋 বললেই বসিয়ে দেবো (আপলোড করে আমাকে জানাও)

**Google Ads Management পেজ** (`/google-ads-management/`)
| Filename | বিবরণ | Size |
|---|---|---|
| `google-ads-management-hero.jpg` | Hero-র পাশে বসানো যাবে — local service van/storefront অথবা ecommerce warehouse/product shot | 1000x750px (4:3) |

**Google Ads Audit পেজ** (`/google-ads-audit/`)
| Filename | বিবরণ | Size |
|---|---|---|
| `google-ads-audit-hero.jpg` | Hero সেকশনের সাপোর্টিং ছবি — account review করার সময়ের ছবি | 1000x750px (4:3) |

**Conversion Tracking পেজ** (`/conversion-tracking/`)
| Filename | বিবরণ | Size |
|---|---|---|
| `conversion-tracking-hero.jpg` | Hero সেকশনের সাপোর্টিং ছবি | 1000x750px (4:3) |

**Landing Page Optimization পেজ** (`/landing-page-optimization/`)
| Filename | বিবরণ | Size |
|---|---|---|
| `landing-page-optimization-hero.jpg` | Hero সেকশনের সাপোর্টিং ছবি | 1000x750px (4:3) |

**Case Study পেজ** — প্রতিটা case study-র জন্য আলাদা before/after (এখন illustration দেখাচ্ছে, real screenshot দিলে সেটাই বসবে)
| Filename | কোন case study |
|---|---|
| `case-study-hvac-plumbing-home-services-before.jpg` / `-after.jpg` | HVAC, Plumbing & Home Services |
| `case-study-personal-injury-family-law-before.jpg` / `-after.jpg` | Personal Injury & Family Law |
| `case-study-medical-aesthetics-cosmetic-dentistry-before.jpg` / `-after.jpg` | Medical Aesthetics & Cosmetic Dentistry |
| `case-study-immigration-family-law-before.jpg` / `-after.jpg` | Immigration & Family Law |
| `case-study-b2b-professional-managed-services-before.jpg` / `-after.jpg` | B2B Professional & Managed Services |
| `case-study-residential-cleaning-services-before.jpg` / `-after.jpg` | Residential Cleaning Services |
| Size for all: 1200x750px | |

**Client / Partner লোগো** (যদি real client-দের logo ব্যবহার করার permission থাকে)
| Filename | বিবরণ |
|---|---|
| `client-logo-1.png`, `client-logo-2.png`, ইত্যাদি | Home পেজের marquee-তে বসবে (transparent PNG, height ~40px) |

---

## গুরুত্বপূর্ণ নোট

- **কখনো কোনো real মানুষের ছবি (client/reviewer) upload কোরো না যদি তার permission না থাকে।** যেমন Yarne de Win-এর ছবিটা শুধু তখনই দিও যদি তার অনুমতি নেওয়া থাকে।
- ফোন নাম্বার সাইটে কোথাও দেখানো হয় না (শুধু WhatsApp বাটন) — এটা ইচ্ছাকৃত, ছবি upload-এর সাথে সম্পর্কিত না।
- নতুন কোনো ছবি লাগলে যেকোনো নাম দিয়ে এই ফোল্ডারে আপলোড করে আমাকে বলে দাও — আমি কোডে বসিয়ে দেবো।
