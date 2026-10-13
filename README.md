# Tutor Portfolio: Next.js + Tailwind

Ekta tutor er jonno complete, standalone portfolio website. Kono demo switcher ba onno category nai.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

Node 18.18+ lagbe. Version pinned: Next 15.1, Tailwind 3.4.17 (Tailwind v4 install korba na).

## Shob content edit korbe ekhane
    src/data/tutor.js

Naam, phone (880... format), email, address, rong (theme), shob section er text, price, FAQ, review, shob ei ek file e.

## Photo / image (important)
Photo `public/` folder e rakho, tarpor data te `/` diye lekho. **`public` likhba na.**

    public/teacher.jpg        ->  photo: "/teacher.jpg"        (hero te gol photo)
    public/images/class1.jpg  ->  image: "/images/class1.jpg"  (gallery te)

- Hero photo: `heroOrbit` section er `photo: ""` e.
- Gallery: `gallery` section er prottek item er `image: ""` e. 6 ta item rakho.
- Photo na dile sundor placeholder dekhay.
- File er naam ar extension (.jpg / .jpeg / .png) hubohu mil thakte hobe.
- Online link-o dewa jay (Cloudinary etc).

## Structure
    src/data/tutor.js          Content + colors + ui style + section list
    src/sections/              HeroOrbit, About, CardGrid (subjects), Gallery, Schedule, Pricing, Testimonials, Faq, Contact
    src/sections/registry.js   data "type" -> component
    src/components/            Navbar, Footer, FloatingContact, Heading, Reveal, Avatar, Icon
    src/app/page.jsx           Page + SEO metadata
    public/                    Photo gula ekhane

## Section order / on-off
`src/data/tutor.js` er `sections` array. Kono section delete korle oita site theke chole jay, order change korle page order change hoy.

## Icons
Data te `icon: "book-open"`. Notun icon lagle lucide.dev theke naam dekho, `src/components/Icon.jsx` e import + MAP e ekta line add koro.

## WhatsApp
`contact.whatsapp` e number (880 diye, + chara). Sob button, floating button ar contact form oi number e jay.

## Deploy
Vercel e GitHub repo import korlei hoy. Kono environment variable lage na.
