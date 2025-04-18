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
				padding: 4,
			}}
		>
			<Box
				component={"div"}
				className="box-shadow"
				sx={{
					backgroundColor: "rgba(255, 255, 255, 0.95)",
					padding: 4,
					borderRadius: 3,
					boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
					width: { md: 455 },
					transition: "transform 0.3s ease-in-out",
					"&:hover": {
						transform: "translateY(-5px)",
					},
					backdropFilter: "blur(10px)",
				}}
			>
				<Typography 
					variant="h4" 
					sx={{ 
						mb: 3, 
						textAlign: "center",
						fontWeight: 600,
						color: "primary.main",
						letterSpacing: "0.5px"
					}}
				>
					{title}
				</Typography>
				{children}
			</Box>
		</Grid2>
	);
};
