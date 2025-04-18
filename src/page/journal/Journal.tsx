import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../../layout/JournalLayout";
import { NothingSelectedView } from "../../views";

export const Journal = () => {
	return (
		<JournalLayout>
			<NothingSelectedView />

			<IconButton
				size="large"
				sx={{
					color: "white",
					backgroundColor: "error.main",
					position: "fixed",
					right: 50,
					bottom: 50,
					zIndex: 1000,
					boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
					transition: "all 0.3s ease-in-out",
					"&:hover": {
						backgroundColor: "error.dark",
						transform: "scale(1.1)",
						boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)",
					},
					"&:active": {
						transform: "scale(0.95)",
					},
					"& .MuiSvgIcon-root": {
						transition: "transform 0.3s ease-in-out",
					},
					"&:hover .MuiSvgIcon-root": {
						transform: "rotate(90deg)",
					}
				}}
			>
				<AddOutlined
					sx={{
						fontSize: 30,
					}}
				/>
			</IconButton>
		</JournalLayout>
	);
};
