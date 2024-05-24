"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import OtpInput from "react-otp-input";
import Image from "next/image";
import Disclaimer from "@/components/Disclaimer";
import Header from "@/components/Header";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Select,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { currencies, commonPlaceholderStyles } from "@/utils/constants";
import loginSectionRightImage from "@/assets/images/loginSectionRightImage.svg";
import { sendOtp, verifyOtp } from "@/redux/features/login/loginSlice";
import Loader from "@/components/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //REDUX STATES
  const { isLoading, isOtpSent } = useSelector((state) => state?.loginReducer);

  //STATES
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [oneTimePasswordClick, setOneTimePasswordClick] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("91");
  const [seconds, setSeconds] = useState(60);
  const [otp, setOtp] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  //TIMER REF
  const otpTimerRef = useRef(null);

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const startOtpTimer = (initialSeconds) => {
    const delay = 0;

    setSeconds(initialSeconds); // Set seconds to the initial value

    const timer = setTimeout(() => {
      otpTimerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 1) {
            clearInterval(otpTimerRef.current); // Stop the timer when seconds reach 0
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }, delay);

    return () => {
      clearTimeout(timer);

      // Clear the interval when the component unmounts or when you want to stop the timer
      if (otpTimerRef.current) {
        clearInterval(otpTimerRef.current);
      }
    };
  };

  // Function to stop the OTP timer
  const stopOtpTimer = () => {
    // Clear the interval if it's running
    if (otpTimerRef.current) {
      clearInterval(otpTimerRef.current);
    }
  };

  const displayTime = () => {
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${remainingSeconds}`;
  };

  const handleInputChange = (otp) => {
    setOtp(otp);
  };

  const sendOtpCallback = () => {
    setOneTimePasswordClick(true);
    startOtpTimer(60);
  };

  const handleSendOtp = () => {
    const payload = {
      phone: `+${selectedCurrency} ${mobileNumber}`,
    };
    dispatch(sendOtp({ data: payload, callback: sendOtpCallback }));
  };

  const handleVerifyOtp = () => {
    const haltTimerCallback = (type) => {
      if (type === "stop") {
        stopOtpTimer();
      } else {
        startOtpTimer(seconds);
      }
    };
    const callback = () => {
      router.push("/");
    };
    const payload = {
      phone: `+${selectedCurrency} ${mobileNumber}`,
      otp,
    };
    dispatch(verifyOtp({ data: payload, callback, haltTimerCallback }));
  };

  const resendOtp = () => {
    const resendOtpCallback = () => {
      startOtpTimer(60);
    };
    const payload = {
      phone: `+${selectedCurrency} ${mobileNumber}`,
    };
    dispatch(sendOtp({ data: payload, callback: resendOtpCallback }));
  };

  useEffect(() => {
    if (otp?.length === 6) {
      handleVerifyOtp();
    }
  }, [otp]);

  const redirectToSignUp = () => {
    router.push("/createAccount");
  };

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        {showDisclaimer && (
          <Disclaimer onClose={() => setShowDisclaimer(false)} />
        )}
        <Header />
        <Box sx={{ flexGrow: 1, backgroundColor: "rgba(0, 19, 52, 0.77)" }}>
          <Grid
            container
            spacing={0}
            sx={{
              height: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              md={5.8}
              sx={{ backgroundColor: "rgba(0, 19, 52, 0.77)" }}
            >
              <div className="loginSectionLeft">
                <div className="loginSectionLeftBox">
                  <div className="loginSectionLeftBox_heading">
                    {!oneTimePasswordClick
                      ? "Log in to Frienducation"
                      : "OTP Verification"}
                  </div>
                  {oneTimePasswordClick && (
                    <div className="loginSectionLeftBox_enterOtpheading">
                      Enter the OTP sent to your number
                    </div>
                  )}
                  {!oneTimePasswordClick ? (
                    <div style={{ display: "flex" }}>
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
                          width: "83% !important",
                          marginLeft: "20px",
                          display: "flex ",
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
                  ) : (
                    <>
                      <OtpInput
                        inputType="number"
                        value={otp}
                        onChange={handleInputChange}
                        numInputs={6}
                        containerStyle="otp-container"
                        inputStyle="otp-input"
                        renderInput={(props) => (
                          <input {...props} type="number" />
                        )}
                      />
                      <div className="loginSectionLeftBox_timer">
                        {`${seconds === 60 ? "01" : "00"}:${displayTime()}`}
                      </div>

                      <div className="loginSectionLeftBox_noOtp">
                        Not received OTP?{" "}
                        <span
                          className={
                            seconds > 0
                              ? "loginSectionLeftBox_disableResend"
                              : "loginSectionLeftBox_enableResend"
                          }
                          onClick={() => {
                            if (seconds === 0) {
                              resendOtp();
                            } else {
                              return null;
                            }
                          }}
                        >
                          Resend Now
                        </span>
                      </div>
                    </>
                  )}
                  {!oneTimePasswordClick && (
                    <button
                      className="loginSectionLeftBox_button"
                      onClick={() => {
                        handleSendOtp();
                      }}
                      disabled={mobileNumber?.length < 10}
                    >
                      Send One Time Password
                    </button>
                  )}
                  {!oneTimePasswordClick && (
                    <div className="loginSectionLeftBox_noaccountText">
                      Don’t have an account ?{" "}
                      <span onClick={redirectToSignUp}>Signup</span>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6.2} sx={{ backgroundColor: "#0B1629" }}>
              <div className="loginSectionRight">
                <div className="loginSectionRight_image">
                  <Image
                    src={loginSectionRightImage}
                    alt="loginSectionRight"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default Login;
