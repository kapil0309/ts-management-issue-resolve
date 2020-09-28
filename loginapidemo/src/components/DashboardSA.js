import React, { Component } from 'react';
import './DashboardSA.css'
import axios from 'axios';

class DashboardSA extends Component {

    constructor() {
        super();
        this.state = {
            count: '',
        }

        axios.get('http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/ProjectCount')
            .then(res => {
                this.setState({ count: res.data[0].projectCount })
            })
    }


    render() {       

        return (
            <div id="wrapper">
                {/* <!-- Navigation --> */}
                <nav class="navbar navbar-default navbar-static-top" role="navigation" style={{ marginbottom: "0" }}>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">TIME MANAGER</a>
                    </div>
                    {/* <!-- /.navbar-header --> */}
                    <ul class="nav navbar-top-links navbar-right">
                        <li class="dropdown">
                            Hi  SuperAdmin !
                </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li>
                                    <a href="/Login/Logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                                </li>
                            </ul>
                            {/* <!-- /.dropdown-user --> */}
                        </li>
                        {/* <!-- /.dropdown --> */}
                    </ul>
                    {/* <!-- /.navbar-top-links --> */}
                    <div class="navbar-default sidebar" role="navigation">
                        <div class="sidebar-nav navbar-collapse">
                            <ul class="nav" id="side-menu">
                                <li>
                                    <a href="/SuperAdmin/Dashboard"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                                </li>
                                <li>
                                    <a href="/Registration/Registration"><i class="fa fa-edit fa-fw"></i> Create User</a>
                                </li>
                                <li>
                                    <a href="/SuperAdmin/CreateAdmin"><i class="fa fa-edit fa-fw"></i> Create Admin</a>
                                </li>
                                <li>
                                    <a href="/SuperAdmin/AssignRoles"><i class="fa fa-edit fa-fw"></i>AssignRoles</a>
                                </li>
                                <li>
                                    <a href="/AllRoles/Roles"><i class="fa fa-table fa-fw"></i> All Roles</a>
                                </li>
                                <li>
                                    <a href="/Project/Add"><i class="fa fa-edit fa-fw"></i> Add Project</a>
                                </li>
                                <li>
                                    <a href="/ResetPassword/Index"><i class="fa fa-gear fa-fw"></i> Reset Password</a>
                                </li>
                                <li>
                                    <a href="/TimeSheetMasterExport/Report"><i class="fa fa-table fa-fw"></i>Export All TimeSheets</a>
                                </li>
                                <li>
                                    <a href="/ExpenseMasterExport/Report"><i class="fa fa-table fa-fw"></i>Export All Expense</a>
                                </li>
                                <li>
                                    <a href="/AddNotification/Add"><i class="fa fa-bell fa-fw"></i>Push Notification</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /.sidebar-collapse --> */}
                    </div>
                    {/* <!-- /.navbar-static-side --> */}
                </nav>
                <div id="page-wrapper">
                    <div class="row">

                        <script src="/Scripts/datetimepicker/jquery-1.12.4.js"></script>

                        <script src="/Scripts/jquery.validate.min.js"></script>
                        <script src="/Scripts/jquery.validate.unobtrusive.min.js"></script>
                        <script src="/Scripts/datetimepicker/jqueryui.js"></script>
                        <script src="/Template/vendor/bootstrap/js/bootstrap.min.js"></script>
                        <script src="/Scripts/datetimexdsoft/build/jquery.datetimepicker.full.min.js"></script>




                        <h4 class="page-header">Dashboard</h4>


                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <i class="fa fa-comments fa-5x"></i>
                                            </div>
                                            <div class="col-xs-9 text-right">
                                                <div class="huge">46</div>
                                                <div>User Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/AllUsers/Users">
                                        <div class="panel-footer">
                                            <span class="pull-left">View Details</span>
                                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                            <div class="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-green">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <i class="fa fa-tasks fa-5x"></i>
                                            </div>
                                            <div class="col-xs-9 text-right">
                                                <div class="huge">10</div>
                                                <div>Admins Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/AllUsers/admin">
                                        <div class="panel-footer">
                                            <span class="pull-left">View Details</span>
                                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                            <div class="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="panel panel-yellow">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <i class="fa fa-shopping-cart fa-5x"></i>
                                            </div>
                                            <div class="col-xs-9 text-right">
                                                <div class="huge">{this.state.count}</div>
                                                <div>Total Projects Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Project/Index">
                                        <div class="panel-footer">
                                            <span class="pull-left">View Details</span>
                                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                            <div class="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <!-- /#page-wrapper --> */}
            </div>
        )
    }
}

export default DashboardSA;