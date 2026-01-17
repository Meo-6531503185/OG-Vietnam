# 🚀 Quick Start Guide - Language Switching

## ⚡ In 30 Seconds

Your site now has **English ↔ Vietnamese language switching**!

### To Test:

1. Run: `npm run dev`
2. Look for the **globe icon (🌍)** in the navbar
3. Click it and select a language
4. **Everything translates instantly!**

---

## 🎯 What Changed

### New Files:

- ✅ `src/i18n/translations.js` - All translations
- ✅ `src/i18n/LanguageContext.jsx` - Language state management

### Updated Files:

- ✅ `App.jsx` - Added LanguageProvider wrapper
- ✅ All components - Now using translations

---

## 💡 How to Use in Your Code

```jsx
import { useLanguage } from "../i18n/LanguageContext";

export default MyComponent = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return <h1>{t.navbar.home}</h1>;
};
```

---

## 📝 How to Add New Translations

1. Open `src/i18n/translations.js`
2. Find your section (or create one)
3. Add text to both EN and VN:

```javascript
export const translations = {
  EN: {
    navbar: {
      home: 'HOME',           ← Add here
      newItem: 'New Item'     ← And here
    }
  },
  VN: {
    navbar: {
      home: 'TRANG CHỦ',
      newItem: 'Mục mới'
    }
  }
};
```

4. Use in component: `{t.navbar.newItem}`

---

## ✨ Features

✅ Instant switching (no page reload)
✅ Persistent (remembers your choice)
✅ Easy to maintain (centralized translations)
✅ Scalable (add more languages anytime)
✅ Works on mobile & desktop

---

## 📍 File Locations

| File                           | Purpose                       |
| ------------------------------ | ----------------------------- |
| `src/i18n/translations.js`     | All text content              |
| `src/i18n/LanguageContext.jsx` | Language logic                |
| `src/App.jsx`                  | Provider wrapper              |
| `src/components/*.jsx`         | Components using translations |

---

## 🎓 How It Works (Simple Version)

```
User clicks language button
    ↓
Language context updates
    ↓
All components get new translations
    ↓
Page updates instantly
    ↓
Choice saved to browser memory
```

---

## 🆘 Quick Troubleshoot

| Problem                    | Solution                                 |
| -------------------------- | ---------------------------------------- |
| No language dropdown       | Check Navbar.jsx imports                 |
| Text shows `undefined`     | Check translation key in translations.js |
| Language resets on refresh | Clear browser cache & try again          |
| Components don't update    | Verify they use `useLanguage()` hook     |

---

## 📚 Documentation

- `IMPLEMENTATION_COMPLETE.md` - Full details
- `TESTING_GUIDE.md` - How to test everything
- `LANGUAGE_SWITCHING_SETUP.md` - Technical setup info

---

## 🎉 You're All Set!

Your application now supports multiple languages with full English ↔ Vietnamese switching!

```bash
npm run dev
```

Then click the globe icon and enjoy! 🌍
