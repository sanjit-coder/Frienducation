"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounceEffect";
import {
  fetchCourses,
  searchCourse,
  resetSearchState,
} from "../../redux/features/courses/coursesSlice";
import Image from "next/image";
import Slider from "react-slick";
import Disclaimer from "@/components/Disclaimer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  commonPlaceholderStyles,
  commonTextFieldStyles,
} from "@/utils/constants";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Rating from "@mui/material/Rating";
import courses1 from "@/assets/images/courses1.svg";
import searchImage from "@/assets/images/searchImage.svg";
import { useRouter } from "next/navigation";

const arrayToCommaSeparatedString = (arr) => {
  if (!Array.isArray(arr)) {
    return "";
  }

  if (arr.length === 0) {
    return "";
  }

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += ", ";
    }
  }

  return result;
};

const Courses = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //REDUX STATES
  const { isLoading, courses, searchResults } = useSelector(
    (state) => state?.coursesReducer
  );

  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (searchTerm !== "") {
      inputRef?.current?.focus();
    }
  }, [searchTerm]);

  const openCourseDetailsPage = (id) => {
    router.push(`courses/${id}`);
  };
  const closeDisclaimer = () => {
    setShowDisclaimer(false);
  };

  const renderCard = (courseItem, numCourses) => {
    return (
      <div
        className="courseCard"
        onClick={() => openCourseDetailsPage(courseItem?._id)}
      >
        <div className="courseCard_imageContainer">
          <Image
            src={courseItem?.photoUrl}
            fill
            alt="courses1"
            style={{
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="courseCard_info">
          <div className="heading">{courseItem?.title}</div>
          <div className="tutorname">
            {arrayToCommaSeparatedString(courseItem?.facultyTeachers)}
          </div>
          <div className="starcontainer">
            <div className="starcontainer_text">{courseItem?.ratings}</div>
            <div className="starcontainer_stars">
              {" "}
              <Rating
                name="read-only"
                value={courseItem?.ratings}
                readOnly
                size="small"
                precision={0.5}
              />
            </div>
            {courseItem?.enrolledStudents &&
              courseItem?.enrolledStudents !== 0 && (
                <div className="starcontainer_enrolledCount">{`${courseItem?.enrolledStudents} Enrolled`}</div>
              )}
            {/* <div className="count">32 Enrolled</div> */}
          </div>
          {/* <div className="pricecontainer">
            <div className="pricecontainer_discounted">
              &#8377;{courseItem?.currentPrice}
            </div>
            <div className="pricecontainer_original">
              &#8377;{courseItem?.actualPrice}
            </div>
          </div> */}
        </div>
      </div>
    );
  };

  const renderSearchResults = () => {
    return (
      <div className="coursessearchcontainer">
        {searchResults &&
          searchResults?.length > 0 &&
          searchResults?.map((searchItem) => {
            return (
              <div className="searchContainer">
                <div className="leftContainer">
                  <div className="leftContainer_imageCard">
                    <img
                      src={searchItem?.photoUrl}
                      alt="searchCardImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="leftContainer_content">
                    <h1>{searchItem?.title}</h1>
                    <h2>{searchItem?.description}</h2>
                    <h2>
                      {arrayToCommaSeparatedString(searchItem?.facultyTeachers)}
                    </h2>
                    <div className="leftContainerrating">
                      &#8377;{searchItem?.currentPrice}
                      <span>&#8377;{searchItem?.actualPrice}</span>
                    </div>
                    <div className="leftContainer_content_rating">
                      <p>{searchItem?.ratings}</p>
                      <Rating
                        name="read-only"
                        value={searchItem?.ratings}
                        readOnly
                        size="small"
                        precision={0.5}
                      />
                      <div className="ratingCount">{`( ${searchItem?.ratingsNumber} )`}</div>
                    </div>
                    <h3>{`${searchItem?.totalHours} total hours . ${searchItem?.totalLectures} lectures . ${searchItem?.level}`}</h3>
                    {!/^ *$/.test(searchItem?.tag) && searchItem?.tag && (
                      <div className="bestSellertag">{searchItem?.tag}</div>
                    )}
                  </div>
                </div>
                <div className="rightContainer">
                  <div className="rightContainer_discount">
                    &#8377;{searchItem?.currentPrice}
                  </div>
                  <div className="rightContainer_original">
                    &#8377;{searchItem?.actualPrice}
                  </div>
                </div>
              </div>
            );
          })}
        {searchResults?.length === 0 && (
          <div className="coursessearchcontainer_noResultContainer">
            <div>
              <SentimentVeryDissatisfiedIcon sx={{ fontSize: 40 }} />
            </div>
            <div> Sorry,we couldn't find any results</div>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const handleSearch = () => {
    console.log("Debounced search with value:", searchTerm);
    if (searchTerm !== "") {
      dispatch(searchCourse(searchTerm));
    } else {
      dispatch(resetSearchState());
    }
  };

  useDebounce(handleSearch, 300, [searchTerm]);

  return (
    <>
      {showDisclaimer && <Disclaimer onClose={() => closeDisclaimer()} />}
      <Header />

      <div className="coursesparentcontainer">
        {courses && courses?.length !== 0 && (
          <div className="coursesparentcontainer_searchbox">
            <TextField
              value={searchTerm}
              inputRef={inputRef}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for courses..."
              sx={commonTextFieldStyles}
              inputProps={commonPlaceholderStyles}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        )}
        {searchResults === null && !isLoading && (
          <div className="coursesparentcontainer_carouselsection">
            {courses &&
              courses?.length > 0 &&
              courses.map((item) => {
                const numCourses = item?.courses?.length;
                const slidesToShow = numCourses < 5 ? numCourses : 5;
                return (
                  <div className="carouselcontainer">
                    <div className="carouselcontainer_heading">
                      {item?.GroupTitle}
                    </div>
                    <Slider
                      centerMode={false}
                      infinite={item?.courses?.length >= 5}
                      slidesToShow={slidesToShow}
                      variableWidth={numCourses >= 5 ? false : true}
                      dots={true}
                      arrows={true}
                      speed={500}
                      responsive={[
                        {
                          breakpoint: 900,
                          settings: {
                            dots: false,
                            slidesToShow: 1,
                            infinite: true,
                            centerMode: true,
                            variableWidth: false,
                            // centerPadding: "50px",
                            // centerPadding: "100px",
                            swipeToSlide: true,
                            arrows: false,
                          },
                        },
                      ]}
                    >
                      {item?.courses?.map((courseItem) => {
                        return renderCard(courseItem, numCourses);
                      })}
                    </Slider>
                  </div>
                );
              })}
          </div>
        )}

        {searchTerm !== "" && renderSearchResults()}
      </div>

      {!isLoading && <Footer />}
      {isLoading && <Loader />}
    </>
  );
};

export default Courses;
