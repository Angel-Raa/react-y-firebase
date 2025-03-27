import { DeleteOutlined, SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import { Images } from "../ui/components";

export const Note = () => {
	return (
		<Grid2
			container
			direction="column"
			spacing={3}
			sx={{
				p: 4,
				maxWidth: "800px",
				margin: "0 auto",
				mt: 5,
			}}
		>
			{/* Header: Title and Buttons */}
			<Grid item container justifyContent="space-between" alignItems="center">
				<Grid item>
					<Typography variant="h4" fontWeight="bold" color="text.primary">
						Note Title
					</Typography>
				</Grid>
				<Grid item>
					<Button variant="outlined" sx={{ mr: 2 }}>
						<SaveOutlined sx={{ fontSize: 24, mr: 1 }} />
						Save
					</Button>
					<Button variant="outlined" color="error">
						<DeleteOutlined sx={{ fontSize: 24, mr: 1 }} />
						Delete
					</Button>
				</Grid>
			</Grid>

			{/* Note Content */}
			<Grid item>
				<TextField
					fullWidth
					variant="outlined"
					label="Note Content"
					placeholder="Write your note here..."
					multiline
					minRows={4}
					sx={{
						mb: 3,
					}}
				/>
			</Grid>

			{/* Note Title */}
			<Grid item>
				<TextField
					fullWidth
					variant="outlined"
					label="Title"
					placeholder="Enter a title..."
					sx={{
						mb: 3,
					}}
				/>
			</Grid>

			{/* Images Gallery (Placeholder) */}
			<Grid item>
				<Images />
			</Grid>
		</Grid2>
	);
};
