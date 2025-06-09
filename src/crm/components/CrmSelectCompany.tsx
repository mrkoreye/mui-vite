import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { COMPANY_NAMES } from "../constants/companies";

export default function HelloWorldUpdated() {
  const [company, setCompany] = React.useState("acme");
  const [isEditing, setIsEditing] = React.useState(false);
  const [editableNames, setEditableNames] = React.useState({
    acme: COMPANY_NAMES.ACME,
    globex: COMPANY_NAMES.GLOBEX,
    initech: COMPANY_NAMES.INITECH,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value as string);
  };

  const handleNameChange = (companyKey: string, newName: string) => {
    setEditableNames((prev) => ({
      ...prev,
      [companyKey]: newName,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="subtitle2">Company Names</Typography>
          <Button
            size="small"
            startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
            onClick={toggleEdit}
            variant={isEditing ? "contained" : "outlined"}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
        </Box>

        {isEditing && (
          <Stack spacing={1}>
            <TextField
              label="Primary Company"
              value={editableNames.acme}
              onChange={(e) => handleNameChange("acme", e.target.value)}
              size="small"
              fullWidth
            />
            <TextField
              label="Secondary Company"
              value={editableNames.globex}
              onChange={(e) => handleNameChange("globex", e.target.value)}
              size="small"
              fullWidth
            />
            <TextField
              label="Third Company"
              value={editableNames.initech}
              onChange={(e) => handleNameChange("initech", e.target.value)}
              size="small"
              fullWidth
            />
          </Stack>
        )}

        <FormControl fullWidth size="small">
          <Select
            labelId="company-select-label"
            id="company-select"
            value={company}
            onChange={handleChange}
            sx={{
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                gap: 1,
              },
            }}
          >
            <MenuItem value="acme">
              <BusinessRoundedIcon
                fontSize="small"
                sx={{ color: "primary.main" }}
              />
              {editableNames.acme}
            </MenuItem>
            <MenuItem value="globex">
              <BusinessRoundedIcon
                fontSize="small"
                sx={{ color: "secondary.main" }}
              />
              {editableNames.globex}
            </MenuItem>
            <MenuItem value="initech">
              <BusinessRoundedIcon
                fontSize="small"
                sx={{ color: "success.main" }}
              />
              {editableNames.initech}
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
