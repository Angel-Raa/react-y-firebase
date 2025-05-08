import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "../../../../hooks";
import { styles } from "../../../../styles";
import { SidebarItem } from "./SidebarItem";

interface Props {
  drawerWidth: number;
}
export const SideBar = ({ drawerWidth }: Props): React.JSX.Element => {
  const name = useAppSelector((state) => state.auth.displayName);
  const { notes } = useAppSelector((state) => state.journal);
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
          {notes.map((note) => (
            <SidebarItem {...note} key={note.title} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
