import React from "react";
import "./PublicLayout.scss";
import { HiMenu, } from 'react-icons/hi';
import ProfileDropDown from "components/ProfileDropDown/ProfileDropDown.js";
import TopBar from "components/TopBar/TopBar.js";
import Logo from "components/Logo/Logo"
import SubHeader from "components/SubHeader/SubHeader.js";
import PropTypes from "prop-types";
// const PublicLayout = ({ children }) => {
// const PublicLayout = () => {

const PublicLayout = ({ children }) => {

	// const dashboardRoutes = [];
// 
	// const { ...rest } = props;

	console.log('dsaddddd',children)
	return (
		<div className="us_public-layout d-flex flex-column">

				 <TopBar
					color="primary"
					// routes={dashboardRoutes}
					brand={<Logo />}
					leftLinks={<HiMenu color="#fff" size={30} />}
					rightLinks={<ProfileDropDown />}
					fixed
					changeColorOnScroll={{
						height: 400,
						color: "primary",
					}}
				/>  

				<SubHeader  />

			<div className="us_container"> 
				{children} 
				{/* here to put the containers and containers' footer */}
			</div>
			{/* here to put the  footer */}
		</div>
	);
};

export default PublicLayout;

PublicLayout.propTypes = {
	children: PropTypes.node,
};
