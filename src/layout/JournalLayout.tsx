import { Box } from "@mui/material";
import { styles } from "../styles";
import { NavBar, SideBar } from "../ui/components";
interface Props {
	children: React.ReactNode;
}
const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {
	return (
		<Box 
			sx={{ 
				display: "flex", 
				minHeight: "100vh",
				background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
				backdropFilter: "blur(5px)",
				transition: "all 0.3s ease-in-out",
			}}
		>
			<NavBar drawerWidth={drawerWidth} />
			<SideBar drawerWidth={drawerWidth} />
			<Box 
				component="main" 
				sx={{
					...styles.mainContent,
					background: "transparent",
					padding: "20px",
					transition: "all 0.3s ease-in-out",
					"&:hover": {
						background: "rgba(255, 255, 255, 0.02)",
					}
				}}
			>
				{children}
			</Box>
		</Box>
	);
};
