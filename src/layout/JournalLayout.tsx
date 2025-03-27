import { Box } from "@mui/material";
import { styles } from "../styles";
import { NavBar, SideBar } from "../ui/components";
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
