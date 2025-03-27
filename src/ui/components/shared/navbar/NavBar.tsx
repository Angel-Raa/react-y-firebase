import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { styles } from "../../../../styles";

interface Props {
	drawerWidth: number;
}
export const NavBar = ({ drawerWidth }: Props): React.JSX.Element => {
	return (
		<AppBar position="fixed" sx={styles.appBar(drawerWidth)}>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2, display: { sm: "none" } }}
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
						sx={{ fontWeight: 600 }}
					>
						Journal
					</Typography>
					<IconButton color="error" aria-label="logout" sx={{ ml: 2 }}>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
