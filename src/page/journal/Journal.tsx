import { IconButton } from "@mui/material";
import { JournalLayout } from "../../layout/JournalLayout";
import { NothingSelectedView } from "../../views";
import { AddOutlined } from "@mui/icons-material";

export const Journal = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          position: "fixed",
          right: 50, // Distancia desde el borde derecho
          bottom: 50, // Distancia desde el borde inferior
          zIndex: 1000, // Asegura que el botón esté por encima de otros elementos
          "&:hover": {
            backgroundColor: "error.dark", // Cambia el color al hacer hover
          },
        }}
      >
        <AddOutlined
          sx={{
            fontSize: 30,
          }}
        />
      </IconButton>
    </JournalLayout>
  );
};
