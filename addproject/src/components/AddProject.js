import React, { Component } from 'react';
import './AddProject.css'
import axios from 'axios';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            ProjectCode: '',
            ProjectName: '',
            NatureofIndustry: '',
            ProjectAdded: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //API URL= http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/createProject
        axios.post('http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/createProject/',{
                "projectName": this.state.ProjectName,
                "natureofIndustry": this.state.NatureofIndustry,
                "projectCode": this.state.ProjectCode
        })
            .then(function (response) {
                console.log(response);
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>



                <div id="wrapper">
                    {/* <!-- Navigation --> */}
                    <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{'margin-bottom': 0}}>
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
                    <div id="page-wrapper">
                        <div className="row">

                            <h4 className="page-header">Add Project</h4>


                            <div className="col-lg-6">

                                <form onSubmit={this.handleSubmit}>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">Add Project Details</div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <label className="manadatory" for="ProjectCode">ProjectCode</label>
                                                <input className="form-control" id="ProjectCode" maxlength="90" name="ProjectCode" type="text" onChange={this.handleChange}/>                                                
                                            </div>

                                            <div className="form-group">
                                                <label className="manadatory" for="ProjectName">ProjectName</label>
                                                <textarea className="form-control" cols="20" id="ProjectName" maxlength="90" name="ProjectName" rows="2" onChange={this.handleChange}></textarea>
                                            </div>

                                            <div className="form-group">
                                                <label className="manadatory" for="NatureofIndustry">NatureofIndustry</label>
                                                <textarea className="form-control" cols="20" id="NatureofIndustry" name="NatureofIndustry" rows="2" onChange={this.handleChange}></textarea>                                                
                                            </div>

                                            <div className="row">
                                                <div className="form-group">
                                                    <div className="col-md-offset-0 col-md-12">
                                                        <input type="submit" value="Save Details" className="btn btn-success" style={{ 'margin-right': 10 }}/>
                                                        <input type="reset" value="Cancel" className="btn btn-danger" style={{ 'margin-right': 10 }}/> 
                                                        <input type="reset" value="All Projects" className="btn btn-info" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>





                                {/* <form onSubmit={this.handleSubmit}>
                                    <div className="panel panel-default">
                                    <div className="panel-heading">Add Project Details</div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label className="manadatory" for="ProjectCode">ProjectCode</label>
                                            <input className="form-control" data-val="true" data-val-required="Enter Project Code" id="ProjectCode" maxlength="90" name="ProjectCode" type="text" value="">
                                                    <span className="field-validation-valid text-danger" data-valmsg-for="ProjectCode" data-valmsg-replace="true"></span>
                                            
                                    
                                    <div className="form-group">
                                        <label className="manadatory" for="ProjectName">ProjectName</label>
                                        <textarea className="form-control" cols="20" data-val="true" data-val-required="Enter ProjectName" id="ProjectName" maxlength="90" name="ProjectName" rows="2"></textarea>
                                    <span className="field-validation-valid text-danger" data-valmsg-for="ProjectName" data-valmsg-replace="true"></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="manadatory" for="NatureofIndustry">NatureofIndustry</label>
                                        <textarea className="form-control" cols="20" data-val="true" data-val-required="Enter Nature of Industry" id="NatureofIndustry" name="NatureofIndustry" rows="2"></textarea>
                                        <span className="field-validation-valid text-danger" data-valmsg-for="NatureofIndustry" data-valmsg-replace="true"></span>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-md-offset-0 col-md-12">
                                                <input type="submit" value="Save Details" className="btn btn-success">

                                                    <a className="btn btn-danger" href="/Project/Add">Cancel</a>

                                                    <a className="btn btn-info" href="/Project/Index">All Projects</a>
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                           </input>
                                           </div>
                                           </div>
                                           </div>
                                           
                                            
                                            
</form>*/}
</div> 


                </div>

            </div>
                                 
    </div >

      
            </div >
        )
    }
}

export default AddProject;
