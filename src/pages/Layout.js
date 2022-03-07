import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h4> Exercicis React </h4>
      </header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>
        <nav className="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Inici</Link>
            </li>
            <li>
              <Link to="/Acordio">Acordió Versió 1</Link>
            </li>
            <li>
              <Link to="/SegonAcordio">Acordió Versió 2 </Link>
            </li>
            <li>
              <Link to="/Comptador">Comptador ( sense Reducer ) </Link>
            </li>
            <li>
              <Link to="/Galeria">Galeria </Link>
            </li>
          </ul>
        </nav>
        <aside className="HolyGrail-ads">Aqui hi van més coses </aside>
      </div>
      <footer>by Eduard Fariñas</footer>
    </>
  );
}

export default Layout;
