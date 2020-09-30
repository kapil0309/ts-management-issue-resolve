import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './PushNotification.css'

class NavigationBar extends Component {
    render() {
        return(
            <div>
            <div id="wrapper">
        {/* <!-- Navigation --> */}
        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{"margin-bottom": 0}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">TIME MANAGER</a>
            </div>
            {/* <!-- /.navbar-header --> */}
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    Hi  SuperAdmin !
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <a href="/Login/Logout"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    {/* <!-- /.dropdown-user --> */}
                </li>
                {/* <!-- /.dropdown --> */}
            </ul>
            {/* <!-- /.navbar-top-links --> */}
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="/SuperAdmin/Dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="/Registration/Registration"><i className="fa fa-edit fa-fw"></i> Create User</a>
                        </li>
                        <li>
                            <a href="/SuperAdmin/CreateAdmin"><i className="fa fa-edit fa-fw"></i> Create Admin</a>
                        </li>
                        <li>
                            <a href="/SuperAdmin/AssignRoles"><i className="fa fa-edit fa-fw"></i>AssignRoles</a>
                        </li>
                        <li>
                            <a href="/AllRoles/Roles"><i className="fa fa-table fa-fw"></i> All Roles</a>
                        </li>
                        <li>
                            <a href="/Project/Add"><i className="fa fa-edit fa-fw"></i> Add Project</a>
                        </li>
                        <li>
                            <a href="/ResetPassword/Index"><i className="fa fa-gear fa-fw"></i> Reset Password</a>
                        </li>
                        <li>
                            <a href="/TimeSheetMasterExport/Report"><i className="fa fa-table fa-fw"></i>Export All TimeSheets</a>
                        </li>
                        <li>
                            <a href="/ExpenseMasterExport/Report"><i className="fa fa-table fa-fw"></i>Export All Expense</a>
                        </li>
                        <li>
                            <a href="/AddNotification/Add"><i className="fa fa-bell fa-fw"></i>Push Notification</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- /.sidebar-collapse --> */}
            </div>
            {/* <!-- /.navbar-static-side --> */}
        </nav>
        


        
                </div></div>

        )
    }
}

export default NavigationBar;

