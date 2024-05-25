"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function InputAdornments() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ width: '520px', height: '288px' }}>
            <div sx={{ alignItems: 'center', }}>
                <FormControl sx={{ width: '520px', height: '28px', alignItems: 'center' }}>
                    로그인
                </FormControl>

                <FormControl sx={{ width: '520px', height: '51px'}}>
                    <TextField id="outlined-basic" label="user_Id" variant="outlined" />
                </FormControl>
                
                <FormControl sx={{ width: '520px', height: '56px'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </div>
            <div>
                <Button sx={{width: '520px', height: '51px', background: '#373737', margin:'dense'}}  variant="contained">로그인하기</Button>
            </div>
            <FormControl sx={{ width: '520px', height: '28px', alignItems: 'center' }}>
                <box>아직 회원이아니신가요? <Link href="/signup" color="inherit"> {'회원가입하기'} </Link></box>
            </FormControl>
        </Box>
    );
}
