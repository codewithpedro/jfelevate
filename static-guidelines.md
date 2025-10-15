Here’s a clean, no-framework recipe for a **static site** that only uses **HTML, CSS, and JS**—with Tailwind via `@import "tailwindcss";` in your main CSS file.

# Project layout

```
your-site/
├─ public/
│  ├─ index.html
│  └─ main.js
├─ src/
│  └─ styles.css     ← contains @import "tailwindcss";
├─ package.json
└─ .gitignore
```


# Write your CSS (Tailwind v4+ style)

`src/styles.css`

```css
/* Pull in Tailwind’s preflight + utilities in one line */
@import "tailwindcss";

/* (Optional) Add tiny custom styles after Tailwind */
:root { --brand: #4f46e5; }
.brand { color: var(--brand); }

/* (Optional) Dark mode overrides */
@media (prefers-color-scheme: dark) {
  .brand { color: #a5b4fc; }
}
```

# Build your CSS

Run the CLI tool to scan your source files for classes and build your CSS.

Compile once (or watch while you work):

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

# Minimal HTML (no frameworks)

`public/index.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Static Tailwind Site</title>
  <link rel="stylesheet" href="./styles.css" />
  <meta name="description" content="A minimal static website built with Tailwind." />
</head>
<body class="min-h-dvh bg-white text-slate-800 antialiased">
  <!-- Header -->
  <header class="border-b">
    <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
      <a href="#" class="font-semibold tracking-tight text-xl brand">Brand</a>

      <!-- Mobile menu button -->
      <button id="menuBtn" class="md:hidden p-2 rounded hover:bg-slate-100" aria-expanded="false" aria-controls="nav">
        <span class="sr-only">Open menu</span>
        ☰
      </button>

      <!-- Nav -->
      <nav id="nav" class="hidden md:block">
        <ul class="flex gap-6">
          <li><a class="hover:text-slate-600" href="#features">Features</a></li>
          <li><a class="hover:text-slate-600" href="#about">About</a></li>
          <li><a class="hover:text-slate-600" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="mx-auto max-w-6xl px-4 py-20">
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
      Minimal static site with <span class="brand">Tailwind</span>
    </h1>
    <p class="mt-4 max-w-prose text-lg text-slate-600">
      No frameworks. Just HTML, CSS, and a pinch of JavaScript.
    </p>
    <a href="#get-started" class="mt-8 inline-block rounded-lg bg-slate-900 px-5 py-3 text-white hover:opacity-90">
      Get Started
    </a>
  </section>

  <!-- Footer -->
  <footer class="mt-20 border-t">
    <div class="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
      © <span id="year"></span> Brand. All rights reserved.
    </div>
  </footer>

  <script src="./main.js" defer></script>
</body>
</html>
```

# Tiny vanilla JS (only what you need)

`public/main.js`

```js
// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

btn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('hidden') === false;
  btn.setAttribute('aria-expanded', String(isOpen));
});

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();
```

# Authoring guidelines (keep it static & minimal)

* **Only HTML/CSS/JS**: No server code, no bundlers required (Tailwind’s CLI is just a build step for CSS).
* **Utilities first**: Prefer Tailwind classes over custom CSS. Add small custom classes only when it reduces duplication.
* **Structure**:

  * Use a single `index.html` (or a few flat HTML files).
  * Link only `./styles.css` and `./main.js`.
* **Accessibility**:

  * Add semantic elements (`header`, `nav`, `main`, `footer`).
  * Use `aria-*` where interactive behavior exists.
  * Ensure focus states are visible (Tailwind does this well).
* **Performance**:

  * Build with `--minify`.
  * Keep images optimized (use modern formats if possible).
  * Limit custom fonts or load them with `rel="preload"` when necessary.
* **Responsive by default**:

  * Leverage Tailwind’s breakpoints (e.g., `md:`) directly on elements.
* **Theming**:

  * Respect user preference with `prefers-color-scheme`.
  * Add a `.dark` class on `<html>` if you want manual toggle later.
* **SEO basics**:

  * Use descriptive `<title>` and `<meta name="description">`.
  * One `<h1>` per page; structure content with headings.

# IMPORTANT Design Mobile, Tablet, and Desktop

Make sure the website is responsive by using tailwind

# Add additional pages (optional)

Duplicate `index.html` → `about.html`, adjust the `<title>`, update nav links. Keep the same `styles.css` and `main.js`.