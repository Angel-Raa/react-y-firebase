import { TurnedInNot } from "@mui/icons-material";
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { styles } from "../../../../styles";

interface Props {
	drawerWidth: number;
}
export const SideBar = ({ drawerWidth }: Props): React.JSX.Element => {
	return (
		<Box component="nav" sx={styles.drawer(drawerWidth)}>
			<Drawer
				variant="permanent"
				open={true}
				sx={{
					display: { xs: "block", sm: "block" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Angel Aguero
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText secondary="Lorem Ipsum is simply dummy text." />
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};
