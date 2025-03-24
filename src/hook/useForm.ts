import { useState } from "react";

export const useForm = <T extends Record<string, string | number | boolean>>(
  initialForm: T
) => {
  const [formData, setFormData] = useState<T>(initialForm);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  const handleResetForm = () => {
    setFormData(initialForm);
  };

  return {
    handleInputChange,
    handleResetForm,
    formData,
  };
};
