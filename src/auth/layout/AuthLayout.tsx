import { Box, Grid2, Typography } from "@mui/material";
import type { ReactNode } from "react";

export const AuthLayout = ({
	children,
	title,
}: {
	children: ReactNode;
	title: string;
}): React.JSX.Element => {
	return (
		<Grid2
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				padding: { xs: 2, md: 4 },
			}}
		>
			<Box
				component={"div"}
				className="glass-effect fade-in"
				sx={{
					padding: { xs: 3, md: 4 },
					borderRadius: 3,
					boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
					width: { xs: "90%", sm: "80%", md: 455 },
					transition: "all 0.3s ease-in-out",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
					},
				}}
			>
				<Typography 
					variant="h4" 
					sx={{ 
						mb: 3, 
						textAlign: "center",
						fontWeight: 700,
						color: "primary.main",
						letterSpacing: "0.5px",
						textShadow: "0 2px 4px rgba(0,0,0,0.1)",
						fontSize: { xs: "1.75rem", md: "2rem" },
					}}
				>
					{title}
				</Typography>
				<Box
					sx={{
						"& > *": {
							mb: 2,
							"&:last-child": {
								mb: 0,
							},
						},
					}}
				>
					{children}
				</Box>
			</Box>
		</Grid2>
	);
};
