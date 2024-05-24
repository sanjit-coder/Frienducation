"use client";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/redux/features/signUp/signUpSlice";
import { commonPlaceholderStyles, currencies } from "@/utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useRouter } from "next/navigation";
import { ListItemIcon, MenuItem, Select } from "@mui/material";

const CreateAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [collageName, setCollageName] = useState('');
  const [branch, setBranch] = useState('');
  const [courseYear, setCourseYear] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState("91");
  const [mobileNumber, setMobileNumber] = useState("");

  const gotoLogin = () => {
    router.push('/login');
  }

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const onCreateAccount = () => {
    const payload = {
      "name": name,
      "mobileNumber": `+${selectedCurrency} ${mobileNumber}`,
      "email": email,
      "collageName": collageName,
      "branch": branch,
      "courseYear": courseYear,
      "photoUrl": ""
    }
    dispatch(createUser({ payload, callback: gotoLogin }))
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
        <div className="createAccount_rightContainer_firstInput">
          <TextField
            placeholder="Name"
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
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={commonPlaceholderStyles}
          />
          <div style={{ display: "flex", width:'45%' }}>
            <Select
              value={selectedCurrency}
              onChange={(e) => handleChange}
              inputProps={{
                name: "currency",
                id: "currency-select",
              }}
              sx={{
                width: "25%",
                backgroundColor: "#E1EBEE",
              }}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency.code} value={currency.code}>
                  <ListItemIcon sx={{ minWidth: "unset !important" }}>
                    <img
                      src={currency.icon.src}
                      alt={currency.code}
                      style={{
                        display: "inline-block",
                        transform: "translateY(2px)",
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    variant="inherit"
                    sx={{
                      display: "inline-block",
                      marginLeft: "7px",
                    }}
                  >
                    {currency.code}
                  </Typography>
                </MenuItem>
              ))}
            </Select>

            <TextField
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => {
                const numericValue = e.target.value.replace(
                  /[^0-9]/g,
                  ""
                );
                if (numericValue?.length <= 10) {
                  setMobileNumber(numericValue);
                }
              }}
              sx={{
                width: "100% !important",
                marginLeft: "20px",
                // display: "flex ",
                borderRadius: "5px",
                backgroundColor: "#E1EBEE", // Change the background color
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#0080CF",
                  },
                },
              }}
              inputProps={{
                ...commonPlaceholderStyles,
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 10,
              }}
            />
          </div>
        </div>
        <div className="createAccount_rightContainer_firstInput">
          <TextField
            placeholder="Email Address"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={commonPlaceholderStyles}
          />
          <TextField
            placeholder="Collage Name"
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
            value={collageName}
            onChange={(e) => setCollageName(e.target.value)}
            inputProps={commonPlaceholderStyles}
          />
        </div>
        <div className="createAccount_rightContainer_firstInput">
          <TextField
            placeholder="Branch"
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
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            inputProps={commonPlaceholderStyles}
          />
          <TextField
            placeholder="Course Year"
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
            value={courseYear}
            onChange={(e) => setCourseYear(e.target.value)}
            inputProps={commonPlaceholderStyles}
          />
        </div>
        <div className="createAccount_rightContainer_checkBox">
          <FormGroup>
            <FormControlLabel sx={{ color: '#E1EBEE' }} control={<Checkbox defaultChecked />} label="Remember Password" />
          </FormGroup>
        </div>
        <Button onClick={onCreateAccount}
          disabled={mobileNumber?.length < 10 || name === ''}
          sx={{
            width: '100%', borderRadius: '5px', background: '#002A7A',
            textTransform: 'none', height: '54px', fontSize: '20px',
            fontWeight: '700',
            '&.Mui-disabled': {
              color: '#FFFFFF',
              background: '#002A7A',
              opacity: 0.4,
              // cursor: "not-allowed",
            },
          }} variant="contained">Signup</Button>
        <div className="noSignUPText"
        >Already have an account ? <span onClick={gotoLogin}>Log in</span></div>
      </div>
    </div>
  );
};

export default CreateAccount;
