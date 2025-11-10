import { useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Stack } from "@mui/material";
import { tabProps } from "../lib/tabProps";
import EnterForm from "./enter-form/EnterForm";
import { CustomTabPanel } from "./ui/CustomTabPanel";
import ShargeExitForm from "./exit-form/ShargeExitForm";
import ProductionExitForm from "./exit-form/ProductionExitForm";

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
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="material management tabs"
        >
          <Tab label="ورود مواد به انبار پای خط" {...tabProps(0)} />
          <Tab label="خروج مواد از انبار پای خط" {...tabProps(1)} />
          <Tab label="ورود مواد به انبار شارژ" {...tabProps(2)} />
          <Tab label="خروج مواد از انبار شارژ" {...tabProps(3)} />
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
            bgcolor="#1e7677"
            width="fit-content"
            paddingBlock={1}
            paddingInline={3}
            borderRadius={4}
          >
            <span className="text-xl font-medium text-white">
              فرم ثبت ورود مواد به انبار پای خط
            </span>
          </Stack>
          سلام
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
            bgcolor="#1e7677"
            width="fit-content"
            paddingBlock={1}
            paddingInline={3}
            borderRadius={4}
          >
            <span className="text-xl font-medium text-white">
              فرم ثبت خروج مواد از انبار پای خط
            </span>
          </Stack>
          <ProductionExitForm />
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
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
            bgcolor="#1e7677"
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

      <CustomTabPanel value={value} index={3}>
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
            bgcolor="#1e7677"
            width="fit-content"
            paddingBlock={1}
            paddingInline={3}
            borderRadius={4}
          >
            <span className="text-xl font-medium text-white">
              فرم ثبت خروج مواد از انبار شارژ
            </span>
          </Stack>
          <ShargeExitForm />
        </Stack>
      </CustomTabPanel>
    </Box>
  );
}
