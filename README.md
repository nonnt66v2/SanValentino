# 🎮 Gioco di Indovinelli - San Valentino

Un sito web interattivo che presenta un gioco di indovinelli a tema San Valentino con due personaggi: Ylenia e Noemi.

## 🌟 Caratteristiche

### 1. **Schermata di Scelta del Personaggio**
- Due personaggi disponibili: Ylenia e Noemi
- Ogni personaggio ha una foto associata (con placeholder SVG)
- Selezione intuitiva con effetti hover e animazioni

### 2. **Indovinelli Personalizzati**
- Ogni personaggio ha un indovinello unico:
  - **Ylenia**: Indovinello sulla rosa
  - **Noemi**: Indovinello sul cioccolato
- Indovinelli studiati per essere stimolanti ma risolvibili

### 3. **Meccanismo di Risoluzione**
- Input per inserire la risposta
- Verifica automatica della correttezza
- Sistema di suggerimenti dopo 3 tentativi falliti
- Feedback immediato con animazioni

### 4. **Visualizzazione dei Premi**
- Immagine del premio mostrata solo dopo risposta corretta
- Animazione di rivelazione del premio
- Effetti confetti celebrativi

### 5. **Interfaccia Utente**
- Design moderno e accattivante con gradiente rosa
- Palette colori tema San Valentino
- Animazioni fluide e transizioni
- Layout completamente responsive

### 6. **Accessibilità**
- Supporto completo per navigazione da tastiera
- ARIA labels per screen reader
- Focus indicators ben visibili
- Supporto per reduced-motion preference
- Testo alternativo per tutte le immagini

### 7. **Feedback e Ritorno**
- Messaggi di feedback chiari
- Pulsante "Gioca Ancora" per riprovare
- Pulsante "Cambia Personaggio" per selezionare l'altro personaggio
- Sistema di feedback visivo con colori

## 🛠️ Dettagli Tecnici

### Tecnologie Utilizzate

#### Frontend
- **HTML5**: Struttura semantica e accessibile
- **CSS3**: Styling moderno con:
  - CSS Grid e Flexbox per layout responsive
  - CSS Custom Properties (variabili)
  - Animazioni CSS
  - Media queries per responsive design
  - Gradients lineari
- **JavaScript ES6+**: Logica del gioco con:
  - Event listeners
  - DOM manipulation
  - State management
  - Form validation

### Struttura dei File

```
SanValentino/
├── index.html          # Pagina principale
├── styles.css          # Stili CSS
├── script.js           # Logica del gioco
├── images/             # Cartella immagini
│   ├── placeholder-ylenia.svg
│   ├── placeholder-noemi.svg
│   ├── placeholder-prize-ylenia.svg
│   └── placeholder-prize-noemi.svg
└── README.md           # Documentazione
```

### Funzionalità JavaScript

1. **Game State Management**
   - Traccia il personaggio corrente
   - Conta i tentativi di risposta
   - Gestisce la navigazione tra schermate

2. **Data Structure**
   - Oggetto con indovinelli e risposte per personaggio
   - Array di risposte valide (inclusi sinonimi)
   - Percorsi immagini configurabili

3. **Event Handling**
   - Click e keyboard events
   - Form submission con prevenzione default
   - Gestione errori immagini con fallback

## 🚀 Come Utilizzare

### Opzione 1: Apertura Locale

1. Clona il repository:
```bash
git clone https://github.com/nonnt66v2/SanValentino.git
cd SanValentino
```

2. Apri `index.html` direttamente nel browser:
   - Doppio click sul file `index.html`
   - Oppure trascina il file nella finestra del browser
   - Oppure: `open index.html` (macOS) o `start index.html` (Windows)

### Opzione 2: Server Locale

Per testare con un server locale (consigliato per evitare problemi CORS):

#### Python 3
```bash
python -m http.server 8000
# Apri http://localhost:8000
```

#### Python 2
```bash
python -m SimpleHTTPServer 8000
# Apri http://localhost:8000
```

#### Node.js (con http-server)
```bash
npx http-server -p 8000
# Apri http://localhost:8000
```

#### PHP
```bash
php -S localhost:8000
# Apri http://localhost:8000
```

## 🌐 Hosting e Deployment

### Opzioni di Hosting Gratuite

#### 1. GitHub Pages (Consigliato)
```bash
# Il repository è già su GitHub
# Vai a Settings > Pages
# Seleziona branch 'main' e cartella 'root'
# Il sito sarà disponibile su: https://nonnt66v2.github.io/SanValentino/
```

#### 2. Netlify
1. Vai su [netlify.com](https://netlify.com)
2. Collega il repository GitHub
3. Deploy automatico ad ogni push
4. URL personalizzato disponibile

#### 3. Vercel
1. Vai su [vercel.com](https://vercel.com)
2. Importa il repository GitHub
3. Deploy automatico
4. Supporto per domini personalizzati

#### 4. Cloudflare Pages
1. Vai su [pages.cloudflare.com](https://pages.cloudflare.com)
2. Collega il repository
3. Deploy automatico
4. CDN globale gratuito

### Configurazione per GitHub Pages

Il sito non richiede configurazione speciale. I file statici (HTML, CSS, JS, SVG) funzionano immediatamente.

## 📸 Personalizzazione Immagini

### Aggiungere Foto Reali

Per sostituire i placeholder SVG con foto reali:

1. Aggiungi le tue immagini nella cartella `images/`:
   - `ylenia.jpg` - Foto di Ylenia
   - `noemi.jpg` - Foto di Noemi
   - `prize-ylenia.jpg` - Premio per Ylenia (es. foto di rose)
   - `prize-noemi.jpg` - Premio per Noemi (es. foto di cioccolatini)

2. Il gioco userà automaticamente le foto reali. I placeholder SVG vengono usati solo se le foto non sono disponibili (fallback automatico).

### Formati Immagine Consigliati

- **Foto personaggi**: JPG o PNG, 400x400px minimo
- **Premi**: JPG o PNG, 600x600px minimo
- Ottimizza le immagini per web (< 500KB ciascuna)

## 🎨 Personalizzazione

### Modificare Colori

Modifica le variabili CSS in `styles.css`:

```css
:root {
    --primary-color: #ff6b9d;      /* Rosa principale */
    --secondary-color: #c44569;    /* Rosa secondario */
    --accent-color: #ffa07a;       /* Arancione/Salmone */
    /* ... */
}
```

### Modificare Indovinelli

Modifica l'oggetto `gameData` in `script.js`:

```javascript
const gameData = {
    ylenia: {
        riddle: "Il tuo indovinello qui...",
        answer: ["risposta1", "risposta2", "sinonimo"],
        // ...
    },
    // ...
};
```

### Aggiungere Nuovi Personaggi

1. Aggiungi un nuovo oggetto in `gameData` (script.js)
2. Aggiungi una nuova card in HTML
3. Aggiungi le immagini corrispondenti

## 🔧 Browser Supportati

- ✅ Chrome/Edge (versioni recenti)
- ✅ Firefox (versioni recenti)
- ✅ Safari (versioni recenti)
- ✅ Opera (versioni recenti)
- ⚠️ Internet Explorer 11 (funzionalità limitate)

## 📱 Responsive Design

Il sito è completamente responsive e ottimizzato per:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## ♿ Accessibilità

- ✅ WCAG 2.1 Level AA compliant
- ✅ Navigazione completa da tastiera
- ✅ Screen reader friendly
- ✅ Alto contrasto
- ✅ Focus indicators
- ✅ Reduced motion support

## 🐛 Debug e Troubleshooting

### Le immagini non si caricano
- Verifica che i file siano nella cartella `images/`
- Controlla i nomi dei file (case-sensitive)
- Usa i placeholder SVG come riferimento

### Il gioco non risponde
- Apri la console del browser (F12)
- Verifica eventuali errori JavaScript
- Assicurati che tutti i file siano presenti

### Problemi di styling
- Svuota la cache del browser (Ctrl+F5)
- Verifica che `styles.css` sia collegato correttamente

## 📄 Licenza

Questo progetto è creato per scopi educativi e personali.

## 👥 Contributi

Contributi, issues e feature requests sono benvenuti!

## 📧 Contatti

Per domande o suggerimenti, apri una issue su GitHub.

---

**Buon San Valentino! 💕**
