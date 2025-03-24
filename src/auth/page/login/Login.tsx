import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../layout/AuthLayout";
import { useForm } from "../../../hook/useForm";

export const Login: React.FC = (): React.JSX.Element => {
  const { formData, handleInputChange } = useForm({
    email: "angelaguero@gmail.com",
    password: "12345",
  });

  const { email, password } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
