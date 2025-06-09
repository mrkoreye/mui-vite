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

  return (
    <Box sx={{ width: "100%" }}>
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
            {COMPANY_NAMES.ACME}
          </MenuItem>
          <MenuItem value="globex">
            <BusinessRoundedIcon
              fontSize="small"
              sx={{ color: "secondary.main" }}
            />
            {COMPANY_NAMES.GLOBEX}
          </MenuItem>
          <MenuItem value="initech">
            <BusinessRoundedIcon
              fontSize="small"
              sx={{ color: "success.main" }}
            />
            {COMPANY_NAMES.INITECH}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
