"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "@/components/Loader";
import Radio from "@mui/material/Radio";

import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Typography,
  TextField,
  Select,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import toast from "react-hot-toast";
import Disclaimer from "@/components/Disclaimer";
import Header from "@/components/Header";
import Image from "next/image";
import { redirectLink } from "@/utils/helpers/redirectLink";
import owner1 from "@/assets/images/owner1.svg";
import owner2 from "@/assets/images/owner2.svg";

import mapIcon from "@/assets/images/icons/mapIcon.svg";
import phoneIcon from "@/assets/images/icons/phoneIcon.svg";
import faxIcon from "@/assets/images/icons/faxIcon.svg";
import sendIcon from "@/assets/images/sendIcon.svg";
import rightContainerImage from "@/assets/images/rightContainerImage.svg";
import phone from "@/assets/images/contactPage/phone.svg";
import mail from "@/assets/images/contactPage/mail.svg";
import location from "@/assets/images/contactPage/location.svg";
import twitter from "@/assets/images/contactPage/twitter.svg";
import youtube from "@/assets/images/contactPage/youtube.svg";
import facebook from "@/assets/images/contactPage/facebook.svg";
import instagram from "@/assets/images/contactPage/instagram.svg";
import Footer from "@/components/Footer";
import {
  currencies,
  commonTextFieldStyles,
  commonPlaceholderStyles,
  commonRadioButtonStyles,
} from "@/utils/constants";
import {
  createCounselling,
  sendMessage,
} from "@/redux/features/contact/contactSlice";
const TextFieldStyles = {
  flexGrow: 1,
  width: "100%",
  marginBottom: "24px",
  borderRadius: "5px",
  backgroundColor: "#E1EBEE",
  color: "#128C7E",

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#0080CF",
    },
  },
};

const ContactPage = () => {
  const dispatch = useDispatch();

  //REDUX STATES
  const { isLoading } = useSelector((state) => state?.contactReducer);
  const basicInfoCards = [
    {
      id: 1,
      heading: "OUR MAIN OFFICE",
      value: " Bareilly, Uttar Pradesh",
      icon: mapIcon,
    },
    {
      id: 2,
      heading: "PHONE NUMBER",
      value: "+91 7982152940",
      icon: phoneIcon,
    },
    { id: 3, heading: "FAX", value: "123-4544-3333", icon: faxIcon },
    {
      id: 4,
      heading: "OUR MAIN OFFICE",
      value: " Bareilly, Uttar Pradesh",
      icon: mapIcon,
    },
  ];

  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState("91");
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
  };

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleOptionChange = (event) => {
    setGenre(event.target.value); // Update the selected option state
  };

  const bookCounsellingSession = () => {
    const payload = {
      name,
      email,
      mobileNumber: `+${selectedCurrency} ${mobileNumber}`,
      genre,
    };

    const callback = () => {
      setGenre("");
      setName("");
      setEmail("");
      setMobileNumber("");
    };

    name !== "" && email !== "" && mobileNumber !== "" && genre !== ""
      ? email.match(validEmailRegex)
        ? dispatch(createCounselling({ payload, callback }))
        : toast.error("Please enter a valid email")
      : toast.error("One or more fields are empty. Please fill them out.");
  };

  const handleSubmitMessage = () => {
    const payload = {
      name: contactName,
      email: contactEmail,
      message: contactMessage,
    };

    const callback = () => {
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    };

    contactName !== "" && contactEmail !== "" && contactMessage !== ""
      ? contactEmail.match(validEmailRegex)
        ? dispatch(sendMessage({ payload, callback }))
        : toast.error("Please enter a valid email")
      : toast.error("One or more fields are empty. Please fill them out.");
  };

  const renderBookingBox = () => (
    <div className="bookingBox">
      <div className="bookingBox_heading">
        Book a counselling session for <span>free!</span>
      </div>
      <div className="bookingBox_secondaryText">Your topic of interest</div>
      <div className="bookingBox_radioContainer">
        <FormControlLabel
          value="SDE"
          name="interest"
          control={
            <Radio
              size="small"
              name="interest"
              checked={genre === "SDE"}
              onChange={handleOptionChange}
              sx={commonRadioButtonStyles}
            />
          }
          label={
            <Typography
              variant="body1"
              style={{ fontSize: "13px" }}
              sx={{
                fontSize: "13px",
                "@media (max-width: 900px)": {
                  fontSize: "10px !important",
                },
              }}
            >
              Software Development
            </Typography>
          }
        />
        <FormControlLabel
          value="ML"
          name="interest"
          control={
            <Radio
              size="small"
              name="interest"
              checked={genre === "ML"}
              onChange={handleOptionChange}
              sx={commonRadioButtonStyles}
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{
                fontSize: "13px",
                "@media (max-width: 900px)": {
                  fontSize: "10px !important",
                },
              }}
            >
              Data Science & ML
            </Typography>
          }
        />
      </div>
      <TextField
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={commonTextFieldStyles}
        inputProps={commonPlaceholderStyles}
      />
      <TextField
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={commonTextFieldStyles}
        inputProps={commonPlaceholderStyles}
      />
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
                sx={{ display: "inline-block", marginLeft: "7px" }}
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
            const numericValue = e.target.value.replace(/[^0-9]/g, "");
            if (numericValue?.length <= 10) {
              setMobileNumber(numericValue);
            }
          }}
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
          inputProps={{
            ...commonPlaceholderStyles,
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 10,
          }}
        />
      </div>
      <div
        className="bookingBox_bookbutton"
        onClick={() => bookCounsellingSession()}
      >
        Book
      </div>
      {/* <div className="bookingBox_note">
        Already have an account? <span>Click here</span>
      </div> */}
    </div>
  );

  const handleSocialMediaIconClick = (link) => {
    redirectLink(link);
  };

  return (
    <>
      {showDisclaimer && <Disclaimer onClose={() => closeDisclaimer()} />}
      <Header />
      <div className="contactpage">
        <div className="herocontainer">
          <div className="herocontainer_section">
            <div className="leftsection">
              <div className="leftsection_heading">
                Join us to embark your coding journey!
              </div>
              <div className="leftsection_secondaryText">
                Trust us with your dream job…..
              </div>
              <div className="leftsection_imageContainer">
                <div className="leftsection_imageContainer_tutor1">
                  <Image
                    src={owner1}
                    alt="owner1"
                    className="image1"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="leftsection_imageContainer_tutor2">
                  <Image
                    src={owner2}
                    alt="owner1"
                    className="image2"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="rightsection">{renderBookingBox()}</div>
          </div>
        </div>
        <div className="bottomContainer">
          {/* <div className="basicInfoContainer">
            <div className="basicInfoContainer_cardsContainer">
              {basicInfoCards &&
                basicInfoCards?.length > 0 &&
                basicInfoCards.map((item) => (
                  <div className="basicInfoContainer_cardsContainer_card">
                    <div
                      style={{ textAlign: "center" }}
                      className="basicInfoContainer_cardsContainer_card_image"
                    >
                      <Image
                        src={item?.icon}
                        alt={item?.heading}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="basicInfoContainer_cardsContainer_card_heading">
                      {item?.heading}
                    </div>
                    <div className="basicInfoContainer_cardsContainer_card_value">
                      {item?.value}
                    </div>
                  </div>
                ))}
            </div>
          </div> */}
          <div className="messageContainer">
            <div className="messageContainerBox">
              <div className="messageContainerBox_leftSection">
                <h1>Get in Touch</h1>
                <p>We are here for you! How can we help?</p>
                <TextField
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  fullWidth
                  sx={commonTextFieldStyles}
                  placeholder="Enter your name"
                  inputProps={commonPlaceholderStyles}
                />
                <TextField
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  fullWidth
                  sx={commonTextFieldStyles}
                  placeholder="Enter your email address"
                  inputProps={commonPlaceholderStyles}
                />
                <TextField
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  fullWidth
                  sx={commonTextFieldStyles}
                  placeholder="Message"
                  multiline
                  inputProps={commonPlaceholderStyles}
                  rows={6}
                />
                <div
                  className="messageContainerBox_leftSection_submitButton"
                  onClick={() => handleSubmitMessage()}
                >
                  <div style={{ display: "flex", alignSelf: "center" }}>
                    {" "}
                    SUBMIT{" "}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      marginTop: "2px",
                    }}
                  >
                    <Image src={sendIcon} alt="sendIcon" />
                  </div>
                </div>
              </div>
              <div className="messageContainerBox_rightSection">
                <div className="rightContainerImage">
                  <Image
                    src={rightContainerImage}
                    alt="rightContainerImage"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="iconContainer">
                  <div className="iconContainer_icon">
                    <Image src={phone} alt="phone" />
                  </div>
                  <div className="iconContainer_text">+91 7982152940</div>
                </div>
                <div className="iconContainer">
                  <div className="iconContainer_icon">
                    <Image src={mail} alt="mail" />
                  </div>
                  <div className="iconContainer_text">
                    <a href="mailto:frienducationofficial@gmail.com">
                      frienducationofficial@gmail.com
                    </a>
                  </div>
                </div>
                <div className="iconContainer">
                  <div className="iconContainer_icon">
                    <Image src={location} alt="location" />
                  </div>
                  <div className="iconContainer_text">New Delhi</div>
                </div>
                <div className="socialMediaIcons">
                  <Image
                    src={twitter}
                    alt="twitter"
                    onClick={() =>
                      handleSocialMediaIconClick(
                        "https://twitter.com/Frienducation96"
                      )
                    }
                  />
                  <Image
                    src={youtube}
                    alt="youtube"
                    onClick={() =>
                      handleSocialMediaIconClick(
                        "https://www.youtube.com/live/H9QybPsEUKo?si=j6EzI1vNmMXBU-jR"
                      )
                    }
                  />
                  <Image
                    src={facebook}
                    alt="facebook"
                    onClick={() =>
                      handleSocialMediaIconClick(
                        "https://www.facebook.com/Frienducation"
                      )
                    }
                  />
                  <Image
                    src={instagram}
                    alt="instagram"
                    onClick={() =>
                      handleSocialMediaIconClick(
                        "https://instagram.com/frienducationn?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {isLoading && <Loader />}
    </>
  );
};

export default ContactPage;
