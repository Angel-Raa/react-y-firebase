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
import { useAppSelector } from "../../../../hooks";
import { styles } from "../../../../styles";

interface Props {
	drawerWidth: number;
}
export const SideBar = ({ drawerWidth }: Props): React.JSX.Element => {
	const name = useAppSelector((state) => state.auth.displayName);
	console.log(name);

	return (
		<Box component="nav" sx={styles.drawer(drawerWidth)}>
			<Drawer
				variant="permanent"
				open={true}
				sx={{
					display: { xs: "block", sm: "block" },
					"& .MuiDrawer-paper": { 
						boxSizing: "border-box", 
						width: drawerWidth,
						background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
						color: "white",
						boxShadow: "4px 0 20px rgba(0, 0, 0, 0.1)",
						backdropFilter: "blur(10px)",
					},
				}}
			>
				<Toolbar>
					<Typography 
						variant="h6" 
						noWrap 
						component="div"
						sx={{
							fontWeight: 700,
							letterSpacing: "0.5px",
							textShadow: "0 2px 4px rgba(0,0,0,0.1)",
						}}
					>
						{name}
					</Typography>
				</Toolbar>
				<Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
						<ListItem key={text} disablePadding>
							<ListItemButton
								sx={{
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										transform: "translateX(5px)",
									},
									"& .MuiListItemIcon-root": {
										color: "white",
										transition: "transform 0.3s ease-in-out",
									},
									"&:hover .MuiListItemIcon-root": {
										transform: "scale(1.2)",
									}
								}}
							>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText 
										primary={text} 
										sx={{
											color: "white",
											"& .MuiTypography-root": {
												fontWeight: 500,
											}
										}}
									/>
									<ListItemText 
										secondary="Lorem Ipsum is simply dummy text."
										sx={{
											color: "rgba(255, 255, 255, 0.7)",
											"& .MuiTypography-root": {
												fontSize: "0.8rem",
											}
										}}
									/>
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};
