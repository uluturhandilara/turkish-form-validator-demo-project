import { useState } from "react";
import {
  validateTCKN,
  validateTurkishPhone,
  validateTaxNo,
  validateTurkishPlate,
  validateTurkishIBAN,
} from "turkish-form-validator";

export interface FormData {
  tcKimlikNo: string;
  phoneNumber: string;
  taxNumber: string;
  licensePlate: string;
  iban: string;
}

export interface FormErrors {
  tcKimlikNo?: string;
  phoneNumber?: string;
  taxNumber?: string;
  licensePlate?: string;
  iban?: string;
}

export function useFormValidation(initialData: FormData) {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const validateField = (field: keyof FormData, value: string): boolean => {
    let error = "";

    switch (field) {
      case "tcKimlikNo":
        if (!value) {
          error = "TC Kimlik No gereklidir";
        } else {
          const result = validateTCKN(value);
          if (!result.isValid) {
            error = result.error || "Geçersiz TC Kimlik No";
          }
        }
        break;
      case "phoneNumber":
        if (!value) {
          error = "Telefon numarası gereklidir";
        } else {
          const result = validateTurkishPhone(value);
          if (!result.valid) {
            error = result.message || "Geçersiz telefon numarası";
          }
        }
        break;
      case "taxNumber":
        if (!value) {
          error = "Vergi numarası gereklidir";
        } else {
          const result = validateTaxNo(value);
          if (!result.valid) {
            error = result.message || "Geçersiz vergi numarası";
          }
        }
        break;
      case "licensePlate":
        if (!value) {
          error = "Plaka gereklidir";
        } else {
          const result = validateTurkishPlate(value);
          if (!result.valid) {
            error = result.message || "Geçersiz plaka formatı";
          }
        }
        break;
      case "iban":
        if (!value) {
          error = "IBAN gereklidir";
        } else {
          const result = validateTurkishIBAN(value);
          if (!result.valid) {
            error = result.message || "Geçersiz IBAN formatı";
          }
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return !error;
  };

  const validateAll = (): boolean => {
    let isValid = true;
    Object.keys(formData).forEach((field) => {
      const key = field as keyof FormData;
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
      setTouched((prev) => ({ ...prev, [field]: true }));
    });
    return isValid;
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
  };
}
