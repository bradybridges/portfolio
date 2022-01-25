import { useState, useEffect } from "react";
import "./Header.scss";

function Header() {
	const [show, setShow] = useState(true);

	useEffect(() => {
	const controlNavVisibility = () => {
		if (window.scrollY > 66) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	window.addEventListener("scroll", controlNavVisibility, false);

	return () =>
		window.removeEventListener("scroll", controlNavVisibility, false);
	});

	const renderLinks = () => {
		const links = ['About', 'Experience', 'Work', 'Contact'];
		const linksHtml = links.map(link => {
			return (
				<a href={`#${link.toLowerCase()}`} className="nav__link" key={link}>
					<span className="nav__link-label">{ link }</span>
				</a>
			);
		});

		return (
			<div className="nav__links">
				{ linksHtml }
			</div>
		);
	};

	return (
	<nav className={`nav${!show ? " hidden" : ""}`}>
		<div className="nav__left">
			<span>Logo Here</span>
		</div>
		<div className="nav__right">
			{ renderLinks() }
			<span>social here</span>
		</div>
	</nav>
	);
}

export default Header;
