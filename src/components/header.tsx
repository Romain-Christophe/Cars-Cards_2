const menus = [
  { home: "Home", id: "1" },
  { home: "Gérer mes réservations", id: "2" },
  { home: "Véhicules", id: "3" },
  { home: "connextion", id: "4" },
];
function Header() {
  const listItem = menus.map((produit) => {
    return <li key={produit.id}>{produit.home}</li>;
  });
  return (
    <>
      <ul className="meunpran">
        {" "}
        <img
          className="logo"
          src="https://img.freepik.com/vecteurs-libre/logo-concessionnaire-automobile-design-plat_23-2149338507.jpg?t=st=1730125084~exp=1730128684~hmac=90925dcde1baae71a3a39caa272379100c31cabc489801ddec4b3aa8b66b5b8c&w=740"
          alt=""
        />{" "}
        {listItem}
      </ul>
      <section className="inputB">
        <input></input>
        <button>Search</button>
      </section>
    </>
  );
}
export default Header;
