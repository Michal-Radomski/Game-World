import "./Footer.css";
import Facebook from '@material-ui/icons/Facebook';

const Footer = () => {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					{/* Column 1 */}
					<div className="col">
						<h4>Nasz serwis z grami GameWorld !</h4>
						<ul className="list">
							<li>Nowości</li>
							<li>Najlepiej oceniane gry</li>
							<li>Klasyka gier</li>
						</ul>
					</div>

					{/* column2 */}
					<div className="col">
						<h4>O serwisie</h4>
						<ul className="list">
							<li>Kontakt</li>
							<li>Reklama</li>
						<li><Facebook/></li>
						</ul>
					</div>
					{/* column3 */}
					<div className="col">
						<h4>Adres</h4>
						<ul className="list">
							<li>Warszawa</li>
							<li>ul. Słowackiego 27</li>
							<li>22 562 563</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<p className="info">
						&copy;{new Date().getFullYear()} GAMEWORLD | ALL right
						reserved | Terms of service | Privacy
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;







