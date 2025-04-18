import { StarOutline } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";
import { styles } from "../styles";

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
				background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
				backdropFilter: "blur(5px)",
			}}
		>
			<Grid2
				sx={{
					animation: "pulse 2s infinite",
					"@keyframes pulse": {
						"0%": {
							transform: "scale(1)",
						},
						"50%": {
							transform: "scale(1.1)",
						},
						"100%": {
							transform: "scale(1)",
						},
					},
				}}
			>
				<StarOutline
					sx={{
						fontSize: 100,
						color: "primary.main",
						filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
					}}
				/>
			</Grid2>
			<Grid2 sx={{ mt: 2 }}>
				<Typography 
					variant="h4" 
					sx={{
						color: "primary.main",
						fontWeight: 600,
						letterSpacing: "0.5px",
						textShadow: "0 2px 4px rgba(0,0,0,0.1)",
					}}
				>
					Nothing selected
				</Typography>
			</Grid2>
		</Grid2>
	);
};
