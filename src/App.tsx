import FormField from "./components/FormField";
import SubmitButton from "./components/SubmitButton";
import { useFormValidation } from "./hooks/useFormValidation";

function App() {
  const { formData, errors, touched, handleChange, handleBlur, validateAll } =
    useFormValidation({
      tcKimlikNo: "",
      phoneNumber: "",
      taxNumber: "",
      licensePlate: "",
      iban: "",
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateAll();

    if (isValid) {
      alert("Form başarıyla gönderildi!");
      console.log("Form Data:", formData);
    } else {
      alert("Lütfen formdaki hataları düzeltin.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Türkçe Form Doğrulayıcı
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                id="tcKimlikNo"
                label="TC Kimlik No"
                value={formData.tcKimlikNo}
                onChange={(value) => handleChange("tcKimlikNo", value)}
                onBlur={() => handleBlur("tcKimlikNo")}
                error={errors.tcKimlikNo}
                touched={touched.tcKimlikNo}
                placeholder="11 haneli TC Kimlik No"
                maxLength={11}
                formatValue={(value) => value.replace(/\D/g, "")}
              />

              <FormField
                id="phoneNumber"
                label="Türk Telefon No"
                value={formData.phoneNumber}
                onChange={(value) => handleChange("phoneNumber", value)}
                onBlur={() => handleBlur("phoneNumber")}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
                placeholder="05551234567"
                maxLength={11}
                formatValue={(value) => value.replace(/\D/g, "")}
              />

              <FormField
                id="taxNumber"
                label="Vergi No"
                value={formData.taxNumber}
                onChange={(value) => handleChange("taxNumber", value)}
                onBlur={() => handleBlur("taxNumber")}
                error={errors.taxNumber}
                touched={touched.taxNumber}
                placeholder="10 haneli vergi no"
                maxLength={10}
                formatValue={(value) => value.replace(/\D/g, "")}
              />

              <FormField
                id="licensePlate"
                label="Plaka"
                value={formData.licensePlate}
                onChange={(value) => handleChange("licensePlate", value)}
                onBlur={() => handleBlur("licensePlate")}
                error={errors.licensePlate}
                touched={touched.licensePlate}
                placeholder="34ABC123"
                formatValue={(value) => value.toUpperCase()}
              />

              <FormField
                id="iban"
                label="IBAN"
                value={formData.iban}
                onChange={(value) => handleChange("iban", value)}
                onBlur={() => handleBlur("iban")}
                error={errors.iban}
                touched={touched.iban}
                placeholder="TR330006100519786457841326"
                maxLength={26}
                formatValue={(value) =>
                  value.toUpperCase().replace(/[^A-Z0-9]/g, "")
                }
                colSpan="2"
              />
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
