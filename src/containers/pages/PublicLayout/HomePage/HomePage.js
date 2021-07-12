import React, { useEffect } from "react";
import "./HomePage.scss";
import { useDispatch  } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  // const { homeCamsList, homeCamsLoading, homeNewsList, homeNewsLoading } =
  //   useSelector((state) => state.homepage);

  useEffect(() => {}, [dispatch]);

  return <></>;
};

export default HomePage;
