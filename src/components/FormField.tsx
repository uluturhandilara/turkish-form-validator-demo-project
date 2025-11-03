interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  maxLength?: number;
  formatValue?: (value: string) => string;
  colSpan?: "1" | "2";
}

export default function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  maxLength,
  formatValue,
  colSpan = "1",
}: FormFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = formatValue ? formatValue(e.target.value) : e.target.value;
    onChange(newValue);
  };

  return (
    <div className={colSpan === "2" ? "md:col-span-2" : "md:col-span-1"}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          error && touched
            ? "border-red-500 dark:border-red-500"
            : "border-gray-300 dark:border-gray-600"
        }`}
      />
      {error && touched && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
