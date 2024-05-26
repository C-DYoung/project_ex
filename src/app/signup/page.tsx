// 회원가입 페이지
"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function singUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  // };

  return (
    <Box sx={{ m: 1, width: "520px", height: "623px" }}>
      <FormControl
        sx={{ width: "520px", height: "28px", alignItems: "center" }}
      >
        회원가입
      </FormControl>
      <FormControl sx={{ width: "520px", height: "51px" }} variant="outlined">
        <FormHelperText id="outlined-userName-helper-text">이름</FormHelperText>
        <OutlinedInput
          id="outlined-adornment-userName"
          aria-describedby="outlined-userName-helper-text"
          inputProps={{
            "aria-label": "userName",
          }}
          placeholder="이름을 입력해주세요"
        />
      </FormControl>
      <FormControl sx={{ width: "520px", height: "51px" }} variant="outlined">
        <FormHelperText id="outlined-userId-helper-text">아이디</FormHelperText>
        <OutlinedInput
          id="outlined-adornment-userId"
          aria-describedby="outlined-userId-helper-text"
          inputProps={{
            "aria-label": "userId",
          }}
          placeholder="아이디를 입력해주세요"
        />
      </FormControl>

      <FormControl sx={{ width: "520px", height: "78px" }}>
        <FormHelperText id="outlined-userEmail-helper-text">
          이메일
        </FormHelperText>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ width: "270", height: "51px" }}
            id="userEmailId"
            label="example"
          />{" "}
          @
          <TextField
            sx={{ width: "219", height: "51px" }}
            id="userEmailAdress"
            label="emxaple"
          />
        </Box>
      </FormControl>

      <FormControl sx={{ width: "520px", height: "56px" }} variant="outlined">
        <FormHelperText id="outlined-userId-helper-text">
          비밀번호
        </FormHelperText>
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

      <FormControl sx={{ width: "520px", height: "56px" }} variant="outlined">
        <FormHelperText id="outlined-userId-helper-text">
          비밀번호 확인
        </FormHelperText>
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
          가입하기
        </Button>
      </div>
    </Box>
  );
}
