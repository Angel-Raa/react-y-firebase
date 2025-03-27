import { Box, CircularProgress, Grid2 } from "@mui/material";

export const Checking = (): React.JSX.Element => {
	return (
		<Grid2
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #1e3c72, #2a5298)", // Fondo degradado
				padding: 4,
			}}
		>
			<Box
				sx={{
					width: { md: 150 },
					height: { md: 150 },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "rgba(255, 255, 255, 0.2)", // Fondo con transparencia
					borderRadius: "50%",
					boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Sombra suave
					backdropFilter: "blur(5px)", // Efecto de desenfoque
					padding: 2,
				}}
			>
				<CircularProgress color="warning" size={60} thickness={5} />
			</Box>
		</Grid2>
	);
};
