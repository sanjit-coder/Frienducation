"use client";
import React, { useState } from "react";
import Image from "next/image";
import sectionImage from "@/assets/images/icons/createAccount/mainImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import SvgIconChildren from "@/assets/images/icons/createAccount/svgIcon";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { createUser } from "@/redux/features/signUp/signUpSlice";
import { commonPlaceholderStyles } from "@/utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useRouter } from "next/navigation";

const CreateAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onCreateAccount = () => {
    const payload = {
      email,
      password,
      confirmPassword,
    };
    dispatch(createUser(payload))
  }

  const gotoLogin = () => {
    router.push('/login');
  }
  return (
    <div className="createAccount">
      <div className="createAccount_leftContainer">
        <div className="createAccount_leftContainer_image">
          <Image
            src={sectionImage}
            alt="heroSectionImage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="createAccount_rightContainer">
        <Typography
          sx={{
            fontSize: '32px', fontWeight: '700', lineHeight: '38px'
            , color: '#E1EBEE', marginBottom: "30px"
          }}
        > Signup</Typography>
        <TextField
          placeholder="Enter your email"
          sx={{
            width: "100% !important",
            display: "flex ",
            borderRadius: "5px",
            backgroundColor: "#E1EBEE", // Change the background color
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#0080CF",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputProps={commonPlaceholderStyles}
        />
        <div className="createAccount_rightContainer_firstInput">
          <TextField
            placeholder="Password"
            sx={{
              width: "45% !important",
              display: "flex ",
              borderRadius: "5px",
              backgroundColor: "#E1EBEE", // Change the background color
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#0080CF",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockResetIcon />
                </InputAdornment>
              ),
            }}
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            inputProps={commonPlaceholderStyles}
          />
          <TextField
            placeholder="Confirm Password"
            sx={{
              width: "45% !important",
              display: "flex ",
              borderRadius: "5px",
              backgroundColor: "#E1EBEE", // Change the background color
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#0080CF",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockResetIcon />
                </InputAdornment>
              ),
            }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            inputProps={commonPlaceholderStyles}
          />
        </div>
        <div className="createAccount_rightContainer_checkBox">
          <FormGroup>
            <FormControlLabel sx={{ color: '#E1EBEE' }} control={<Checkbox defaultChecked />} label="Remember Password" />
          </FormGroup>
        </div>
        <Button onClick={onCreateAccount}
          sx={{
            width: '100%', borderRadius: '5px', background: '#002A7A',
            textTransform: 'none', height: '54px', fontSize: '20px',
            fontWeight: '700'
          }} variant="contained">Signup</Button>
        <div className="noSignUPText"
        >Already have an account ? <span onClick={gotoLogin}>Log in</span></div>
      </div>
    </div>
  );
};

export default CreateAccount;
