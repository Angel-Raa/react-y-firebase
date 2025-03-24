import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3E4E50", // Un tono gris-azulado, elegante y sobrio
      contrastText: "#ffffff", // Texto blanco para mejor contraste
    },
    secondary: {
      main: "#F4A261", // Un tono cálido para resaltar detalles
      contrastText: "#1a1a1a",
    },
    background: {
      default: "#F9F9F9", // Fondo claro para un aspecto limpio
      paper: "#FFFFFF", // Fondo de los elementos tipo "papel"
    },
    text: {
      primary: "#1A1A1A", // Color oscuro para el texto principal
      secondary: "#5A5A5A", // Gris suave para texto secundario
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px", // Bordes más suaves
          padding: "8px 16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Hace que los contenedores se vean más amigables
          padding: "16px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Sombra sutil
        },
      },
    },
  },
});
