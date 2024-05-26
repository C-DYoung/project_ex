"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import React from "react";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event:React.MouseEventHandler<HTMLButtonElement>) => {
  //   event.
  // };

  return (
    <Box sx={{ width: "520px", height: "288px" }}>
      <Box sx={{ alignItems: "center" }}>
        <FormControl
          sx={{ width: "520px", height: "28px", alignItems: "center" }}
        >
          로그인
        </FormControl>

        <FormControl sx={{ width: "520px", height: "51px" }}>
          <TextField
            id="outlined-adornment-userId"
            variant="outlined"
            placeholder="이메일을 입력해주세요."
          />
        </FormControl>

        <FormControl sx={{ width: "520px", height: "56px" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="비밀번호를 입력해주세요."
          />
        </FormControl>
      </Box>
      <div>
        <Button
          sx={{
            width: "520px",
            height: "51px",
            background: "#373737",
            margin: "dense",
          }}
          variant="contained"
        >
          로그인하기
        </Button>
      </div>
      <FormControl
        sx={{ width: "520px", height: "28px", alignItems: "center" }}
      >
        <Box>
          아직 회원이아니신가요?{" "}
          <Link href="/signup" color="inherit">
            {" "}
            {"회원가입하기"}{" "}
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
}
