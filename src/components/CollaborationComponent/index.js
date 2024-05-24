"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Image from "next/image";
import Loader from "@/components/Loader";
import { applyForCommunity } from "@/redux/features/community/communitySlice";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/icons/cummunityScreen/homeSection2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import dotIcon from "@/assets/images/icons/coursesHeroSection/dot.svg";
import {
  Button,
  ListItemIcon,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BasicSelect from "../multiSelect";
import {
  commonPlaceholderStyles,
  commonTextFieldStyles,
  currencies,
  eventTypeValues,
} from "@/utils/constants";

const CollaborationComponent = () => {
  const dispatch = useDispatch();
  //REDUX STATES
  const { isLoading } = useSelector((state) => state?.communityReducer);
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [eventType, setEventType] = useState("");

  const handleApplyCommunity = () => {
    const payload = {
      name,
      email,
      mobileNumber: `+91 ${mobileNumber}`,
      collageName: collegeName,
      eventType,
    };

    const callback = () => {
      setName("");
      setEmail("");
      setMobileNumber("");
      setCollegeName("");
      setEventType("");
    };
    name !== "" &&
    email !== "" &&
    mobileNumber !== "" &&
    collegeName !== "" &&
    eventType !== ""
      ? email.match(validEmailRegex)
        ? dispatch(applyForCommunity({ payload, callback }))
        : toast.error("Please enter a valid email")
      : toast.error("One or more fields are empty. Please fill them out.");
  };

  return (
    <>
      <div className="collaborationComponent">
        <div className="collaborationComponent_leftContainer">
          <div className="collaborationComponent_leftContainer_firstPara">
            Let’s join hands together to build a great community
          </div>
          <div className="collaborationComponent_leftContainer_button">
            Apply now for Collaboration /Sponsorship Opportunities
          </div>
          <div className="collaborationComponent_leftContainer_buttonDiv">
            <div className="collaborationComponent_leftContainer_buttonDiv_flex">
              <Image src={dotIcon} alt="dotIcon" />
              <div className="collaborationComponent_leftContainer_secondPara">
                We engage with young mentors to guide our students. Our mentors
                are young professionals from the product-based companies who
                better sync with the goals of learners, their pitfalls and
                concerns.
              </div>
            </div>
            <div className="collaborationComponent_leftContainer_buttonDiv_flex">
              <Image src={dotIcon} alt="dotIcon" />
              <div className="collaborationComponent_leftContainer_secondPara">
                We engage with different colleges for various tech fests,
                conduct tech events, and are building our strong community to
                help students engage and get a better exposure of opportunities.
              </div>
            </div>
            {/* <div className="collaborationComponent_leftContainer_buttonDiv_flex">
            <Image src={dotIcon} alt="dotIcon" />
            <div className="collaborationComponent_leftContainer_secondPara">
              Access to the largest tech community of India’s most loved ed-tech
              company{" "}
            </div>
          </div>
          <div className="collaborationComponent_leftContainer_buttonDiv_flex">
            <Image src={dotIcon} alt="dotIcon" />
            <div className="collaborationComponent_leftContainer_secondPara">
              Course Discounts and Scholarships{" "}
            </div>
          </div> */}
          </div>
          <div className="collaborationComponent_leftContainer_image">
            <Image
              src={heroSectionImage2}
              alt="heroSectionImage2"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="collaborationComponent_rightContainer">
          <div className="collaborationComponent_rightContainer_firstPara">
            Come Join With Us !
          </div>
          <div>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={commonTextFieldStyles}
              inputProps={commonPlaceholderStyles}
              placeholder="Name"
            />
            <TextField
              placeholder="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={commonTextFieldStyles}
              inputProps={commonPlaceholderStyles}
            />
            {/* <div style={{ display: "flex", marginBottom: "20px" }}>
            <Select
              value={selectedCurrency}
              onChange={(e) => selectedCurrency(e?.target?.value)}
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
                    sx={{ display: "inline-block", marginLeft: "7px" }}
                  >
                    {currency.code}
                  </Typography>
                </MenuItem>
              ))}
            </Select>

            <TextField
              placeholder="Mobile Number"
              sx={{
                width: "75% !important",
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
              inputProps={commonPlaceholderStyles}
            />
          </div> */}
            <TextField
              value={mobileNumber}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                if (numericValue?.length <= 10) {
                  setMobileNumber(numericValue);
                }
              }}
              placeholder="Phone Number"
              sx={commonTextFieldStyles}
              inputProps={{
                ...commonPlaceholderStyles,
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 10,
              }}
            />
            <TextField
              placeholder="College Name"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              fullWidth
              sx={commonTextFieldStyles}
              inputProps={commonPlaceholderStyles}
            />
            <Select
              value={eventType}
              onChange={(e) => setEventType(e?.target?.value)}
              inputProps={{
                name: "currency",
                id: "currency-select",
              }}
              sx={{
                width: "100%",
                backgroundColor: "#E1EBEE",
              }}
              displayEmpty
            >
              <MenuItem value="">
                <em>Event Type</em>
              </MenuItem>
              {eventTypeValues.map((currency) => (
                <MenuItem key={currency.code} value={currency.code}>
                  <ListItemIcon
                    sx={{ minWidth: "unset !important" }}
                  ></ListItemIcon>
                  <Typography
                    variant="inherit"
                    sx={{ display: "inline-block", marginLeft: "0px" }}
                  >
                    {currency.label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button
            className="collaborationComponent_rightContainer_button"
            variant="contained"
            onClick={() => handleApplyCommunity()}
          >
            Apply
          </Button>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default CollaborationComponent;
