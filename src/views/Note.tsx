import { DeleteOutlined, SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import { Images } from "../ui/components";
import { useForm } from "../hook/useForm";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { setActiveNote } from "../lib/store/slice/journal/journalSlice";
import { startSaveNote } from "../lib/store/slice/journal/thunk";
 // Definir validaciones para los campos del formulario
  const validations = {
    title: [
      {
        required: true,
        message: "El título es requerido",
      },
      {
        minLength: 3,
        message: "El título debe tener al menos 3 caracteres",
      },
    ],
    body: [
      {
        required: true,
        message: "El contenido es requerido",
      },
    ],
  };
  
export const Note = () => {
	const dispatch = useAppDispatch();
	const {active:activeNote} = useAppSelector(state => state.journal)
	  // Inicializar el formulario con los datos de la nota activa o valores por defecto
  // Adapt initialFormData to match Record<string, string | number | boolean>
  const initialFormData: Record<string, string | number | boolean> = activeNote
	? {
		id: activeNote.id ?? "",
		title: activeNote.title ?? "",
		body: activeNote.body ?? "",
		date: typeof activeNote.date === "string" ? activeNote.date : (activeNote.date instanceof Date ? activeNote.date.toISOString() : ""),
		// imageUrls is omitted because it's not string|number|boolean
	  }
	: {
		id: "",
		title: "",
		body: "",
		date: new Date().toISOString(),
	  };

	const {formData, handleInputChange} = useForm(initialFormData, validations);
	const {title, body} = formData

	useEffect(() => {

		dispatch(setActiveNote(formData))
	}, [formData, dispatch])

	const onSavaNote = () => {
		dispatch(startSaveNote())
	}

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
				background: "rgba(255, 255, 255, 0.95)",
				borderRadius: 3,
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
				backdropFilter: "blur(10px)",
				transition: "all 0.3s ease-in-out",
				"&:hover": {
					boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
				}
			}}
		>
			{/* Header: Title and Buttons */}
			<Grid item container justifyContent="space-between" alignItems="center">
				<Grid item>
					<Typography 
						variant="h4" 
						sx={{
							fontWeight: 700,
							color: "primary.main",
							letterSpacing: "0.5px",
							textShadow: "0 2px 4px rgba(0,0,0,0.1)",
						}}
					>
						Note Title
					</Typography>
				</Grid>
				<Grid item>
					<Button 
					onClick={onSavaNote}
						variant="contained" 
						sx={{ 
							mr: 2,
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
							transition: "all 0.3s ease-in-out",
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
							}
						}}
					>
						<SaveOutlined sx={{ fontSize: 24, mr: 1 }} />
						Save
					</Button>
					<Button 
						variant="contained" 
						color="error"
						sx={{
							boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
							transition: "all 0.3s ease-in-out",
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
							}
						}}
					>
						<DeleteOutlined sx={{ fontSize: 24, mr: 1 }} />
						Delete
					</Button>
				</Grid>
			</Grid>

			{/* Note Content */}
			<Grid item>
				<TextField
				  name="body"
					fullWidth
					variant="outlined"
					label="Note Content"
					placeholder="Write your note here..."
					multiline
					minRows={4}
					sx={{
						mb: 3,
						"& .MuiOutlinedInput-root": {
							transition: "all 0.3s ease-in-out",
							"&:hover": {
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "primary.main",
								}
							},
							"&.Mui-focused": {
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "primary.main",
									borderWidth: 2,
								}
							}
						}
					}}
					value={body}
					onChange={handleInputChange}
				/>
			</Grid>

			{/* Note Title */}
			<Grid item>
				<TextField
				name="title"
					fullWidth
					variant="outlined"
					label="Title"
					placeholder="Enter a title..."
					sx={{
						mb: 3,
						"& .MuiOutlinedInput-root": {
							transition: "all 0.3s ease-in-out",
							"&:hover": {
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "primary.main",
								}
							},
							"&.Mui-focused": {
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "primary.main",
									borderWidth: 2,
								}
							}
						}
					}}
					value={title}
					onChange={handleInputChange}
				/>
			</Grid>

			{/* Images Gallery (Placeholder) */}
			<Grid item>
				<Images />
			</Grid>
		</Grid2>
	);
};
