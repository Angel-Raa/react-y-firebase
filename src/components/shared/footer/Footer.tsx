import { Box, Grid2 } from "@mui/material";

export const Footer = (): React.JSX.Element => {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        padding: 3,
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid2 container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>

        
      </Grid2>
    </Box>
  );
};
