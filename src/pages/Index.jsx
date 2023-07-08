
function Index(){
    return(
            <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                
                <a className="navbar-brand ps-3" href="/">Start Bootstrap</a>
                
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Ajustes</a></li>
                            <li><a className="dropdown-item" href="#!">Registro de actividades</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Cerrar sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">MODULOS</div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Usuarios
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Conectado como:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Navegación estática</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="/login">Dashboard</a></li>
                                <li className="breadcrumb-item active">Navegación estática</li>
                            </ol>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p className="mb-0">
                                        Esta página es un ejemplo del uso de la navegación estática. Al quitar el
                                        <code>.sb-nav-fixed</code>
                                        clase de la
                                        <code>body</code>
                                        , la navegación superior y la navegación lateral se volverán estáticas al desplazarse. Desplácese hacia abajo en esta página para ver un ejemplo.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="card mb-4"><div className="card-body">Al desplazarse, la navegación permanece en la parte superior de la página. Este es el final de la demostración de navegación estática.</div></div>
                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2023</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Index;