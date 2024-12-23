function showNavbar() {
    const container = document.getElementById("navigationContainer")
    container.innerHTML = `
        <nav class="navbar bg-body-secondary fixed-top justify-content-center">
            <div class="container-fluid row justify-content-center">
                <div class="col-lg-2 col-md-4 col-sm-6 d-none d-lg-block d-flex justify-content-end">
                    <a class="navbar-brand " href="./index.html">
                        <img src="./IMG/Logos del local/Centromoto Logo.png" height="50">
                    </a>
                </div>

                <div class="col-lg-2 col-md-4 col-sm d-lg-none d-flex justify-content-between">         <!-- sm logo -->
                    <a class="navbar-brand" href="./index.html">
                        <img src="./IMG/Logos del local/Centromoto Logo.png" height="50">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <i class="bi bi-cart" width="40"></i>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h5>Iniciar Sesión</h5>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <label for="exampleDropdownFormEmail1" class="form-label">Usuario</label>
                                            <input type="email" class="form-control" id="exampleDropdownFormEmail1">
                                        </li>
                                        <li>
                                           <label for="exampleDropdownFormPassword1" class="form-label">Contraseña</label>
                                            <input type="password" class="form-control" id="exampleDropdownFormPassword1">
                                        </li>
                                        <li>
                                            <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                            <label class="form-check-label" for="dropdownCheck">
                                                Recordar cuenta
                                            </label>
                                            </div>
                                        </li>
                                        <li>
                                            <button type="submit" class="btn btn-secondary">Iniciar sesión</button>
                                        </li>
                                        
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Crea tu cuenta</a>
                                            <a class="dropdown-item" href="#">Recupera tu contraseña</a>
                                        </li>
                                        
                                    </ul>                      
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Motos
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Honda</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Suzuki</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Yamaha</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Bajaj</a></li>
                                    </ul>                      
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Repuestos
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">General</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Luces</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Plásticos</a></li>                                                                        
                                    </ul>                      
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accesorios
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Cascos y Vesrimenta</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Trancas</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Kit de Emergencias</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Aceites</a></li>                                                                 
                                    </ul> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div class="col-lg-6 col-md-12">
                    <form class="d-flex bg-white rounded border" role="search">
                        <input class="form-control me-0 border-white" type="search"
                            placeholder="Buscá tu moto, marca o pieza" aria-label="Search">
                        <button class="btn" type="submit"><img src="./IMG/Logos generales/Search.png" class="iconImg"
                                alt=""></button>
                    </form>
                </div>
                <div class="col-lg-2 col-md-2 d-flex d-none d-lg-block justify-content-start">
                    <div class="dropdown">
                        <a class="nav-link dropdown-toggle btn" data-bs-toggle="dropdown" aria-expanded="false">
                            Iniciar sesión
                        </a>
                        <div class="dropdown-menu">
                            <form class="px-4 py-3">
                                <div class="mb-3">
                                    <label for="exampleDropdownFormEmail1" class="form-label">Usuario</label>
                                    <input type="email" class="form-control" id="exampleDropdownFormEmail1">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleDropdownFormPassword1" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="exampleDropdownFormPassword1">
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                        <label class="form-check-label" for="dropdownCheck">
                                            Recordar cuenta
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-secondary">Iniciar sesión</button>
                            </form>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Crea tu cuenta</a>
                            <a class="dropdown-item" href="#">Recupera tu contraseña</a>
                        </div>
                    </div>
                </div>
                <div class=" col-lg-1 col-md-1 d-flex justify-content-lg-start d-none d-lg-block justify-content-md-center">
                    <i class="bi bi-cart" width="40"></i>
                </div>
            </div>
            <div class="col-3 d-none d-lg-block d-flex justify-content-end">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Motos
                    </a>
                    <div class="dropdown-menu storeDropdown">
                        <ul>
                            <li><a class="dropdown-item" href="#">Honda</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Honda 50</a></li>
                            <li><a class="dropdown-item" href="#">Honda C70</a></li>
                            <li><a class="dropdown-item" href="#">Honda C70 Econopower</a></li>
                            <li><a class="dropdown-item" href="#">Honda CG 125</a></li>
                        </ul>
                        <ul>
                            <li><a class="dropdown-item" href="#">Yamaha</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Yamaha DT</a></li>
                            <li><a class="dropdown-item" href="#">Yamaha RDC 125</a></li>
                            <li><a class="dropdown-item" href="#">Yamaha XJ 650</a></li>
                        </ul>
                        <ul>
                            <li><a class="dropdown-item" href="#">Suzuki</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">AX 100</a></li>
                            <li><a class="dropdown-item" href="#">AX 115</a></li>
                            <li><a class="dropdown-item" href="#">FB 100</a></li>
                            <li><a class="dropdown-item" href="#">Gixxer</a></li>
                        </ul>
                        <ul>
                            <li><a class="dropdown-item" href="#">Bajaj</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Pulsar 125</a></li>
                            <li><a class="dropdown-item" href="#">Pulsar 135</a></li>
                            <li><a class="dropdown-item" href="#">Pulsar 200</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <li class="col-3 d-flex d-none d-lg-block justify-content-center">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Repuestos
                    </a>
                    <div class="dropdown-menu storeDropdown">
                        <ul>
                            <li><a class="dropdown-item" href="#">General</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Bujías</a></li>
                            <li><a class="dropdown-item" href="#">Cadenas</a></li>
                            <li><a class="dropdown-item" href="#">Pistones</a></li>
                        </ul>
                        <ul>
                            <li><a class="dropdown-item" href="#">Luces</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Delanteras</a></li>
                            <li><a class="dropdown-item" href="#">Traseras</a></li>
                            <li><a class="dropdown-item" href="#">Luces de Freno</a></li>
                            <li><a class="dropdown-item" href="#">señalero</a></li>
                        </ul>
                        <ul>
                            <li><a class="dropdown-item" href="#">Plásticos</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Cubre piernas</a></li>
                            <li><a class="dropdown-item" href="#">Guardabarros</a></li>
                            <li><a class="dropdown-item" href="#">Panel lateral</a></li>
                            <li><a class="dropdown-item" href="#">Tapa</a></li>
                    </div>
                </div>
            </li>
            <li class="col-3 d-flex d-none d-lg-block justify-content-start">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Accesorios
                    </a>
                    <div class="dropdown-menu storeDropdown">
                        <ul>
                            <li><a class="dropdown-item" href="#">Accesorios</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Cascos</a></li>
                            <li><a class="dropdown-item" href="#">Trancas</a></li>
                            <li><a class="dropdown-item" href="#">Kits de Emergrncias</a></li>
                            <li><a class="dropdown-item" href="#">Aceites</a></li>
                            <li><a class="dropdown-item" href="#">Stickers</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </nav>
    `
}

document.addEventListener("DOMContentLoaded", () => {
  showNavbar()
})