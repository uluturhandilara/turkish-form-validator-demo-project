# Turkish Form Validator Demo Project 🇹🇷

<img width="1453" height="483" alt="Ekran Resmi 2025-11-03 07 02 34" src="https://github.com/user-attachments/assets/c7e06e4c-e9d2-4f9d-a776-e8d241a4d73e" />

## 📋 Proje Hakkında

Bu proje, **[turkish-form-validator](https://www.npmjs.com/package/turkish-form-validator)** npm paketinin somut bir kullanım örneğidir. Türkiye'ye özgü form alanlarının (TC Kimlik No, Telefon Numarası, Vergi No, Plaka, IBAN) doğrulamasını gerçek zamanlı olarak gösteren bir React uygulamasıdır.

### 🎯 Projenin Amacı

`turkish-form-validator` kütüphanesinin kullanımını pratik bir örnekle göstermek ve Türk form validasyonlarının nasıl kolayca implement edilebileceğini göstermektir.

## 🛠️ Kullanılan Teknolojiler

### Core Technologies

- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Modern build tool ve dev server

### Styling & UI

- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS preprocessing

### Validation

- **turkish-form-validator v1.0.2** - Türk form doğrulama kütüphanesi

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## ✨ Özellikler

- ✅ **TC Kimlik No Doğrulama** - 11 haneli kimlik numarası validasyonu
- ✅ **Türk Telefon Numarası Doğrulama** - 10 haneli telefon numarası validasyonu
- ✅ **Vergi Numarası Doğrulama** - 10 haneli vergi numarası validasyonu
- ✅ **Plaka Doğrulama** - Türk araç plaka formatı validasyonu
- ✅ **IBAN Doğrulama** - Türk IBAN formatı validasyonu
- ✅ **Gerçek Zamanlı Validasyon** - Kullanıcı yazarken anlık doğrulama
- ✅ **Hata Mesajları** - Türkçe ve açıklayıcı hata mesajları
- ✅ **Otomatik Formatlama** - Giriş sırasında otomatik format düzenleme
- ✅ **Responsive Design** - Mobil ve masaüstü uyumlu tasarım
- ✅ **Dark Mode Desteği** - Karanlık tema desteği

## 🚀 Kurulum

Projeyi klonlayın ve bağımlılıkları yükleyin:

```bash
# Projeyi klonlayın
git clone <repository-url>

# Proje dizinine gidin
cd turkish-form-validator-test-project

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresini açın.

## 🎨 Kullanım Örneği

Proje, `turkish-form-validator` kütüphanesinin şu fonksiyonlarını kullanır:

- `validateTCKN()` - TC Kimlik No doğrulama
- `validateTurkishPhone()` - Telefon numarası doğrulama
- `validateTaxNo()` - Vergi numarası doğrulama
- `validateTurkishPlate()` - Plaka doğrulama
- `validateTurkishIBAN()` - IBAN doğrulama

### Örnek Kod

```typescript
import { validateTCKN } from "turkish-form-validator";

const result = validateTCKN("12345678950");
if (result.isValid) {
  console.log("Geçerli TCKN");
} else {
  console.log(result.error);
}
```

## İletişim Kuralım

Dilara Uluturhan - [LinkedIn](https://www.linkedin.com/in/dilarauluturhan/) - dilarauluturhan@outlook.com
