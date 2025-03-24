import { Grid2, Typography } from "@mui/material";
import { styles } from "../styles";
import { StarOutline } from "@mui/icons-material";

export const NothingSelectedView = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        ...styles.fullHeight,
      }}
    >
      <Grid2>
        <StarOutline
          sx={{
            fontSize: 100,
            color: "dark",
          }}
        />
      </Grid2>
      <Grid2>
        <Typography variant="h5" color="dark">
          Nothing selected
        </Typography>
      </Grid2>
    </Grid2>
  );
};
