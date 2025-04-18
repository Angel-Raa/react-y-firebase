// src/styles/styles.js
export const styles = {
	fullHeight: {
		height: "100vh",
		width: "100%",
		overflowX: "hidden",
	},
	mainContent: {
		flexGrow: 1,
		p: 3,
		pt: "75px",
		minHeight: "100vh",
		width: "100%",
		maxWidth: "100%",
		overflowX: "hidden",
		overflowY: "auto",
		backgroundColor: "#f4f4f4",
		boxSizing: "border-box",
	},
	drawer: (drawerWidth: number) => ({
		width: {
			sm: drawerWidth,
		},
		flexShrink: {
			sm: 0,
		},
		"& .MuiDrawer-paper": {
			boxSizing: "border-box",
			width: drawerWidth,
			backgroundColor: "#ffffff", // Fondo blanco para el drawer
			overflowX: "hidden",
		},
	}),
	appBar: (drawerWidth: number) => ({
		width: { sm: `calc(100% - ${drawerWidth}px)` },
		ml: { sm: `${drawerWidth}px` },
		boxShadow: 3,
		backgroundColor: "#3f51b5", // Color de fondo del AppBar
		overflowX: "hidden",
	}),
	listItem: {
		"&:hover": {
			backgroundColor: "#f0f0f0", // Color de fondo al hacer hover
		},
	},
	listItemText: {
		primary: {
			fontWeight: "bold", // Texto principal en negrita
		},
		secondary: {
			color: "#757575", // Color del texto secundario
		},
	},
};
