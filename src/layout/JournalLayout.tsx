import { Box } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { styles } from "../styles";
interface Props {
	children: React.ReactNode;
}
const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {
	return (
		<Box sx={{ display: "flex", minHeight: "100vh" }}>
			<NavBar drawerWidth={drawerWidth} />
			<SideBar drawerWidth={drawerWidth} />
			<Box component="main" sx={styles.mainContent}>
				{children}
			</Box>
		</Box>
	);
};
