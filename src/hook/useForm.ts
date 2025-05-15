import { useEffect, useState } from "react";

type ValidationRule = {
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	pattern?: RegExp;
	custom?: (value: string | number | boolean) => boolean;
	message: string;
};

export const useForm = <T extends Record<string, string | number | boolean>>(
	initialForm: T,
	validations?: Partial<Record<keyof T, ValidationRule[]>>,
) => {
	const [formData, setFormData] = useState<T>(initialForm);
	const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		setFormData(initialForm)
	}, [initialForm])

	const validateField = (
		name: keyof T,
		value: string | number | boolean,
	): string | null => {
		if (!validations || !validations[name]) return null;

		for (const rule of validations[name]) {
			if (
				rule.required &&
				(!value || (typeof value === "string" && value.trim() === ""))
			) {
				return rule.message;
			}
			if (
				rule.minLength !== undefined &&
				typeof value === "string" &&
				value.length < rule.minLength
			) {
				return rule.message;
			}
			if (
				rule.maxLength !== undefined &&
				typeof value === "string" &&
				value.length < rule.maxLength
			) {
				return rule.message;
			}
			if (rule.custom && !rule.custom(value)) {
				return rule.message;
			}
			if (
				rule.pattern &&
				typeof value === "string" &&
				!rule.pattern.test(value)
			) {
				return rule.message;
			}
		}

		return null;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		const newValue = type === "checkbox" ? checked : value;
		setFormData((prevForm) => ({
			...prevForm,
			[name]: newValue,
		}));

		if (validations) {
			const errorMessage = validateField(name as keyof T, newValue);
			setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
		}
	};

	const validateForm = (): boolean => {
		let isValid = true;
		const newErrors: Partial<Record<keyof T, string>> = {};
		for (const key in formData) {
			const errorMessage = validateField(key as keyof T, formData[key]);
			if (errorMessage) {
				newErrors[key] = errorMessage;
				isValid = true;
			}
		}
		setErrors(newErrors);
		return isValid;
	};
	const handleResetForm = () => {
		setFormData(initialForm);
		setErrors({});
		setMessage("");
	};

	return {
		handleInputChange,
		handleResetForm,
		formData,
		errors,
		message,
		validateForm,
	};
};
