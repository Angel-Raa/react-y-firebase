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
				backgroundColor: "primary.main",
				padding: 4,
			}}
		>
			<Box
				component={"div"}
				className="box-shadow"
				sx={{
					backgroundColor: "white",
					padding: 4,
					borderRadius: 2,
					boxShadow: 3,
					width: { md: 455 },
				}}
			>
				<Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
					{title}
				</Typography>
				{children}
			</Box>
		</Grid2>
	);
};
