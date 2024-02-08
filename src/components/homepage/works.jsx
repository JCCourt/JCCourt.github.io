import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ECC.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">ECC コンピュータ専門学校</div>
							<div className="work-subtitle">
								IT English Tutor / Game Audio Tutor
							</div>
							<div className="work-duration">2016 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./Berlitz.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Berlitz Japan</div>
							<div className="work-subtitle">
								Business English Tutor
							</div>
							<div className="work-duration">2016 - 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
}; 


export default Works; 