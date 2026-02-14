# 🚀 Guida al Deployment - Gioco di Indovinelli San Valentino

Questa guida spiega come pubblicare il gioco di indovinelli online utilizzando vari servizi di hosting gratuiti.

## 📋 Prerequisiti

- Repository GitHub: `nonnt66v2/SanValentino`
- Account GitHub (già disponibile)
- Nessuna configurazione server richiesta (sito statico)

## 🌐 Opzioni di Hosting

### 1. GitHub Pages (Consigliato - Più Facile)

GitHub Pages è il metodo più semplice perché il codice è già su GitHub.

#### Passo per Passo:

1. **Vai alle impostazioni del repository**
   - Apri https://github.com/nonnt66v2/SanValentino
   - Clicca su "Settings" (Impostazioni)

2. **Attiva GitHub Pages**
   - Nel menu laterale sinistro, clicca "Pages"
   - Sotto "Source", seleziona il branch `copilot/create-interactive-riddle-game` (o `main` se hai fatto il merge)
   - Seleziona la cartella `/root`
   - Clicca "Save"

3. **Attendi il deployment**
   - GitHub impiegherà 1-2 minuti per pubblicare il sito
   - Vedrai un messaggio: "Your site is published at https://nonnt66v2.github.io/SanValentino/"

4. **Visita il tuo sito**
   - Il gioco sarà disponibile all'indirizzo indicato

#### Domini Personalizzati (Opzionale)
Se hai un dominio personale, puoi configurarlo in Settings > Pages > Custom domain.

---

### 2. Netlify (Consigliato per Features Avanzate)

Netlify offre deployment automatico, anteprima delle PR, e ottimizzazioni automatiche.

#### Passo per Passo:

1. **Crea un account**
   - Vai su https://netlify.com
   - Registrati con il tuo account GitHub

2. **Importa il repository**
   - Clicca "Add new site" > "Import an existing project"
   - Scegli "Deploy with GitHub"
   - Autorizza Netlify ad accedere al tuo GitHub
   - Seleziona il repository `nonnt66v2/SanValentino`

3. **Configura il deployment**
   - Branch da deployare: `copilot/create-interactive-riddle-game` o `main`
   - Build command: lascia vuoto (sito statico)
   - Publish directory: lascia vuoto o scrivi `.`
   - Clicca "Deploy site"

4. **Il tuo sito è online!**
   - Netlify genererà un URL tipo: `https://random-name-123456.netlify.app`
   - Puoi cambiare il nome in Site settings > Site details > Change site name
   - Es: `https://sanvalentino-game.netlify.app`

#### Features Extra:
- ✅ Deploy automatico ad ogni push
- ✅ Anteprima delle PR
- ✅ HTTPS automatico
- ✅ Form handling (se vuoi aggiungere feedback)
- ✅ Domini personalizzati gratuiti

---

### 3. Vercel

Simile a Netlify, ottimo per progetti frontend.

#### Passo per Passo:

1. **Crea un account**
   - Vai su https://vercel.com
   - Registrati con GitHub

2. **Importa il progetto**
   - Clicca "Add New..." > "Project"
   - Seleziona il repository `SanValentino`
   - Clicca "Import"

3. **Configura (default va bene)**
   - Framework Preset: Other
   - Build Command: lascia vuoto
   - Output Directory: lascia vuoto
   - Clicca "Deploy"

4. **Sito pubblicato**
   - URL: `https://san-valentino-xyz.vercel.app`
   - Configurabile in Project Settings

---

### 4. Cloudflare Pages

Ottimo per performance grazie alla CDN globale.

#### Passo per Passo:

1. **Crea un account**
   - Vai su https://pages.cloudflare.com
   - Registrati (account gratuito)

2. **Connetti GitHub**
   - Clicca "Create a project"
   - Seleziona "Connect to Git"
   - Autorizza Cloudflare
   - Scegli il repository `SanValentino`

3. **Configura build**
   - Project name: `sanvalentino`
   - Production branch: `copilot/create-interactive-riddle-game`
   - Build command: lascia vuoto
   - Build output directory: `/`
   - Clicca "Save and Deploy"

4. **Sito live**
   - URL: `https://sanvalentino.pages.dev`

---

## 📸 Personalizzare le Immagini

### Dopo il Deployment

Una volta pubblicato il sito, puoi sostituire i placeholder SVG con foto reali:

1. **Prepara le tue immagini**
   ```
   images/ylenia.jpg          (400x400px, < 500KB)
   images/noemi.jpg           (400x400px, < 500KB)
   images/prize-ylenia.jpg    (600x600px, < 500KB)
   images/prize-noemi.jpg     (600x600px, < 500KB)
   ```

2. **Carica le immagini**
   - Via GitHub: aggiungi i file alla cartella `images/` e fai commit
   - Via git locale: copia i file e fai push

3. **Il sito si aggiorna automaticamente**
   - GitHub Pages: ~1-2 minuti
   - Netlify/Vercel/Cloudflare: ~30 secondi

### Ottimizzazione Immagini

Per prestazioni migliori, ottimizza le immagini con:

**Online:**
- https://tinypng.com (PNG/JPG)
- https://squoosh.app (vari formati)

**Da terminale:**
```bash
# ImageMagick
convert input.jpg -quality 85 -resize 600x600 output.jpg

# Con npm
npx @squoosh/cli --quality 85 input.jpg
```

---

## 🔧 Risoluzione Problemi

### Il sito non si carica
- Verifica che il branch corretto sia selezionato
- Controlla che i file siano nella root del repository
- Aspetta 2-3 minuti dopo il primo deployment

### Le immagini non appaiono
- Verifica i nomi dei file (case-sensitive)
- I placeholder SVG dovrebbero funzionare sempre
- Controlla la console del browser (F12) per errori

### Errori 404
- Assicurati che `index.html` sia nella root
- Controlla che tutti i percorsi siano relativi (es: `images/` non `/images/`)

### Il gioco non funziona
- Verifica che tutti i file siano stati committati
- Controlla la console JavaScript per errori
- Prova in modalità incognito (per escludere problemi di cache)

---

## 🎨 Personalizzazione Post-Deployment

### Modificare i Colori

Edita `styles.css`, sezione `:root`:

```css
:root {
    --primary-color: #ff6b9d;      /* Cambia qui */
    --secondary-color: #c44569;    /* Cambia qui */
    --accent-color: #ffa07a;       /* Cambia qui */
}
```

### Modificare gli Indovinelli

Edita `script.js`, oggetto `gameData`:

```javascript
const gameData = {
    ylenia: {
        riddle: "Il tuo nuovo indovinello...",
        answer: ["risposta1", "risposta2"],
        // ...
    }
};
```

### Aggiungere Google Analytics (Opzionale)

Aggiungi in `index.html` prima di `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 📱 Condividere il Gioco

Una volta online, condividi il link:

### Link Diretto
```
https://nonnt66v2.github.io/SanValentino/
```

### QR Code
Genera un QR code con:
- https://qr-code-generator.com
- Google "QR code generator"

### Social Media
Aggiungi meta tags in `index.html` per anteprima social:

```html
<!-- Meta tags per social media -->
<meta property="og:title" content="Gioco di Indovinelli - San Valentino">
<meta property="og:description" content="Un gioco interattivo per San Valentino!">
<meta property="og:image" content="https://nonnt66v2.github.io/SanValentino/images/preview.jpg">
<meta property="og:url" content="https://nonnt66v2.github.io/SanValentino/">
<meta name="twitter:card" content="summary_large_image">
```

---

## ✅ Checklist Pre-Deployment

- [ ] Tutti i file sono committati
- [ ] Il gioco funziona in locale
- [ ] Le immagini sono ottimizzate
- [ ] I meta tags sono configurati
- [ ] Hai scelto un servizio di hosting
- [ ] Hai testato il sito deployato
- [ ] Il link funziona su mobile

---

## 🆘 Supporto

Per problemi o domande:
1. Controlla la [documentazione ufficiale del servizio di hosting]
2. Apri una issue su GitHub
3. Consulta il README.md principale

---

**Buon Deployment! 🚀💕**
