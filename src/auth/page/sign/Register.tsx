import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../../layout/AuthLayout";

export const Register: React.FC = (): React.JSX.Element => {
  return (
    <>
      <AuthLayout title="Registrate">
        <Box component="form">
          <TextField
            label="Nombre Completo"
            type="text"
            name="name"
            placeholder="Nombre Completo"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Correo"
            type="email"
            name="email"
            placeholder="ejemplo@gmail.com"
            fullWidth
            autoComplete="email"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            placeholder="********"
            fullWidth
            autoComplete="current-password"
            sx={{ mb: 3 }}
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
