import { Box } from "@mui/material";
import Link from "next/link";

export function Home() {
  return (
    <Box sx={{ fontSize: "1.4rem", fontWeight: "600", height: "30px" }}>
      <Link href="/">home</Link>home, home page
    </Box>
  );
}
