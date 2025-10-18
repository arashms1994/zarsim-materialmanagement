import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { useState } from "react";
import { tabProps } from "../lib/tabProps";
import { CustomTabPanel } from "./ui/CustomTabPanel";
import ExitForm from "./exit-form/ExitForm";
import EnterForm from "./enter-form/EnterForm";

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
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="خروج مواد از انبار" {...tabProps(0)} />
          <Tab label="ورود مواد به انبار شارژ" {...tabProps(1)} />
        </Tabs>
      </Stack>

      <CustomTabPanel value={value} index={0}>
        <Stack
          direction="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            bgcolor="#0ead69"
            width="fit-content"
            paddingBlock={1}
            paddingInline={3}
            borderRadius={4}
          >
            <span className="text-xl font-medium text-white">
              فرم ثبت خروج مواد از انبار شارژ یا انبار پای خط
            </span>
          </Stack>
          <ExitForm />
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Stack
          direction="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            bgcolor="#0ead69"
            width="fit-content"
            paddingBlock={1}
            paddingInline={3}
            borderRadius={4}
          >
            <span className="text-xl font-medium text-white">
              فرم ثبت ورود مواد به انبار شارژ
            </span>
          </Stack>
          <EnterForm />
        </Stack>
      </CustomTabPanel>
    </Box>
  );
}
