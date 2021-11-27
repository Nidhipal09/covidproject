import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Header = () => {
    return (
        <div class="wrapper" >
            {/* Navbar */}
            <nav class="main-header navbar navbar-expand navbar-dark">
                {/* Left navbar links */}
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <Link to="/CountriesDashboard"><a href="#" class="nav-link">Home</a></Link>
                    </li>
                </ul>

                {/* Right navbar links */}
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                   

                </ul>
            </nav>
            {/* /.navbar */}



            {/* Main Footer */}
            <footer class="main-footer">
                <strong>Copyright &copy; 2020-2021 <a href="#">Nidhi pal</a>.</strong>
                All rights reserved.
                <div class="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.1.0
                </div>
            </footer>

        </div>
    );
}

export default withRouter(Header);