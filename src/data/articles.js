import React from "react";

function article_1() {
	return {
		date: "TBD",
		title: "TBD",
		description:
			"TBD",
		keywords: [
			"TBD",
			"Jack ",
			"Jack C",
			"Jack Courtenay",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src=""
						alt=""
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "TBD",
		title: "TBD",
		description:
			"TBD",
		style: ``,
		keywords: [
			"TBD",
			"Jack",
			"Jack C",
			"Jack Courtenay",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
