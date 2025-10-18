import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { useState } from "react";
import { tabProps } from "../lib/tabProps";
import { CustomTabPanel } from "./ui/CustomTabPanel";

export default function MaterialManagement() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="خروج مواد از انبار" {...tabProps(0)} />
          <Tab label="ورود مواد به انبار شارژ" {...tabProps(1)} />
        </Tabs>
      </Stack>

      <CustomTabPanel value={value} index={0}>
        heeeelllooooooooooo
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        heeeelllooooooooooo
      </CustomTabPanel>
    </Box>
  );
}
