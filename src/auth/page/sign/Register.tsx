import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { useForm } from "../../../hook/useForm";
import { useAppDispatch } from "../../../hooks";
import { startCreateUserWithEmailAndPassword } from "../../../lib/store/slice/auth/thunk/thunk";
import { AuthLayout } from "../../layout/AuthLayout";

const validations = {
	email: [
		{ required: true, message: "El correo es obligatorio" },
		{
			pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			message: "Correo inválido. Ejemplo: usuario@dominio.com",
		},
	],
	name: [
		{ required: true, message: "El nombre es obligatorio" },
		{
			minLength: 3,
			message: "El nombre debe tener al menos 3 caracteres",
		},

		{
			custom: (value: string | number | boolean) =>
				/^[a-zA-Z\s]+$/.test(value as string),
			message: "El nombre solo puede contener letras y espacios",
		},
	],
	password: [
		{ required: true, message: "La contraseña es obligatoria" },
		{
			minLength: 8,
			message: "La contraseña debe tener al menos 8 caracteres",
		},
		{
			custom: (value: string | number | boolean) =>
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
					value as string,
				),
			message:
				"La contraseña debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial",
		},
	],
};
export const Register: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const { formData, handleInputChange, errors } = useForm(
		{
			name: "",
			email: "",
			password: "",
		},
		validations,
	);
	const { email, name, password } = formData;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(startCreateUserWithEmailAndPassword(formData));
	};

	return (
		<>
			<AuthLayout title="Registrate">
				<Box component="form" onSubmit={handleSubmit}>
					<TextField
						required
						value={name}
						onChange={handleInputChange}
						label="Nombre Completo"
						type="text"
						name="name"
						placeholder="Nombre Completo"
						fullWidth
						sx={{ mb: 2 }}
						error={!!errors.name}
						helperText={errors.name}
					/>

					<TextField
						required
						value={email}
						onChange={handleInputChange}
						label="Correo"
						type="email"
						name="email"
						placeholder="ejemplo@gmail.com"
						fullWidth
						autoComplete="email"
						sx={{ mb: 2 }}
						error={!!errors.email}
						helperText={errors.email}
					/>
					<TextField
						required
						value={password}
						onChange={handleInputChange}
						label="Contraseña"
						type="password"
						name="password"
						placeholder="********"
						fullWidth
						autoComplete="current-password"
						sx={{ mb: 3 }}
						error={!!errors.password}
						helperText={errors.password}
					/>

					<Box
						component={"div"}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							mb: 2,
						}}
					>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							sx={{
								mr: 1,
							}}
						>
							Crear Cuenta
						</Button>
					</Box>

					<Box>
						<Typography variant="body1" sx={{ mb: 2 }}>
							<Link color="inherit" component={RouterLink} to="/auth/login">
								¿Ya tienes cuenta?{" "}
							</Link>

							<Button variant="text" color="primary">
								Ingresar
							</Button>
						</Typography>
					</Box>
				</Box>
			</AuthLayout>
		</>
	);
};
