import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useAppDispatch } from "../../../../hooks";
import { startLogoutFirebase } from "../../../../lib/store";
import { styles } from "../../../../styles";

interface Props {
	drawerWidth: number;
}
export const NavBar = ({ drawerWidth }: Props): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		console.log("Logout");
		dispatch(startLogoutFirebase());
	};
	return (
		<AppBar 
			position="fixed" 
			sx={{
				...styles.appBar(drawerWidth),
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
				backdropFilter: "blur(10px)",
			}}
		>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ 
						mr: 2, 
						display: { sm: "none" },
						transition: "transform 0.3s ease-in-out",
						"&:hover": {
							transform: "scale(1.1)",
						}
					}}
				>
					<MenuOutlined />
				</IconButton>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					sx={{ width: "100%" }}
				>
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
						Journal
					</Typography>
					<IconButton
						onClick={handleLogout}
						color="error"
						aria-label="logout"
						sx={{ 
							ml: 2,
							transition: "all 0.3s ease-in-out",
							"&:hover": {
								transform: "scale(1.1)",
								backgroundColor: "rgba(255, 255, 255, 0.1)",
							}
						}}
					>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
