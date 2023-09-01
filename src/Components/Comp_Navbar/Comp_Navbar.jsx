import "./Comp_Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdSearch, MdHelp } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Comp_Navbar = ({ Page, children }) => {
	const pageName = Page;
	const navigate = useNavigate();
	const [search, setSearch] = useState("");

	const handleKeyDownSearch = (event, search) => {
		if (event.key === "Enter") {
			handleSearch(search);
		}
	};
	const handleSearch = (search) => {
		if (
			search === "OTP" ||
			search === "login" ||
			search === "signup" ||
			search === "reset" ||
			search === "dashboard" ||
			search === "account" ||
			search === "home" ||
			search === "agenda" ||
			search === "users" ||
			search === "funcionarios" ||
			search === "definicoes"
		) {
			navigate("../" + search); //run search function with enter button press
		} else if (!search && !search.value) {
			//NotificationManager.error('A barra de pesquisa está vazia');
		} else if (search === "") {
			//NotificationManager.error('A barra de pesquisa está vazia');
		} else {
			//NotificationManager.info(search);
		}
	};

	const goDash = () => {
		navigate("/dashboard");
	};

	return (
		<>
			<div className="navbar-left titulo">{pageName}</div>
			<div className="navbar-right">
				<div className="search-all">
					<div className="navbar-search">
						<MdSearch
							size={40}
							className="navbar-iconSearch"
							onClick={() => handleSearch(search)}
						/>
						<input
							className="navbar-searchTerm"
							id="searchfield"
							type="text"
							required
							placeholder="Pesquisar..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={(event) =>
								handleKeyDownSearch(event, search)
							}
						/>
					</div>
				</div>
				<div className="navbar-help">
					<MdHelp size={30} className="navbar-icon" />
				</div>
				<div className="name-icon" onClick={goDash}>
					<div className="navbar-UserName">Nome</div>
					<div>
						<MdManageAccounts size={30} />
					</div>
				</div>
			</div>

			<section className="home-section">
				<main>{children}</main>
			</section>
		</>
	);
};

export default Comp_Navbar;
