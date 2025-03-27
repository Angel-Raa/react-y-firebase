import { Google } from "@mui/icons-material";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { useForm } from "../../../hook/useForm";
import { useAppDispatch } from "../../../hooks";
import {
	startGoogleSign,
	startLoginWithEmailAndPassword,
} from "../../../lib/store";
import { AuthLayout } from "../../layout/AuthLayout";

export const Login: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const { formData, handleInputChange } = useForm({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		dispatch(startLoginWithEmailAndPassword(formData));
	};

	const handleGoogleSignIn = async () => {
		console.log("Google");
		dispatch(startGoogleSign());
	};
	return (
		<AuthLayout title="Login">
			<Box component="form" onSubmit={handleSubmit}>
				<TextField
					label="Correo"
					type="email"
					name="email"
					placeholder="ejemplo@gmail.com"
					fullWidth
					autoComplete="email"
					sx={{ mb: 2 }}
					value={email}
					onChange={handleInputChange}
				/>

				<TextField
					label="Contraseña"
					type="password"
					name="password"
					placeholder="********"
					fullWidth
					autoComplete="current-password"
					sx={{ mb: 3 }}
					value={password}
					onChange={handleInputChange}
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
						Iniciar sesión
					</Button>
					<Button
						onClick={handleGoogleSignIn}
						variant="contained"
						color="primary"
						fullWidth
						sx={{
							ml: 1,
						}}
					>
						<Google />
						<Typography variant="body1" sx={{ ml: 1 }}>
							Google
						</Typography>
					</Button>
				</Box>

				<Box>
					<Typography variant="body1" sx={{ mb: 2 }}>
						<Link color="inherit" component={RouterLink} to="/auth/register">
							¿No tienes una cuenta?{" "}
						</Link>

						<Button variant="text" color="primary">
							Registrate
						</Button>
					</Typography>
				</Box>
			</Box>
		</AuthLayout>
	);
};
