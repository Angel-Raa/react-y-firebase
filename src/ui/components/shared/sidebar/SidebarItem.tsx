import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useAppDispatch } from "../../../../hooks";
import { setActiveNote } from "../../../../lib/store/slice/journal/journalSlice";

interface Props {
  id: string;
  title: string;
  body: string;
  date: string;
}

export const SidebarItem = ({ body, title, id, date }: Props) => {
  const dispatch = useAppDispatch();
  const newTitle = useMemo(() => {
    return title.length > 13 ? title.substring(0, 17) + "...." : title;
  }, [title]);

  const onClickNote = () => {
    dispatch(
      setActiveNote({
        title,
        body,
        id,
        date,
      })
    );
  };
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
        onClick={onClickNote}
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
            },
          }}
        >
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText
              primary={newTitle}
              sx={{
                color: "white",
                "& .MuiTypography-root": {
                  fontWeight: 500,
                },
              }}
            />
            <ListItemText
              secondary={body}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "& .MuiTypography-root": {
                  fontSize: "0.8rem",
                },
              }}
            />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};
