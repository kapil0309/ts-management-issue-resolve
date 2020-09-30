import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './PushNotification.css'
import axios from 'axios';


class PushNotification extends Component{
    constructor(){
        super();

      

       this.state = {
            Status: "Active",
            Message: "",
            CreatedOn: "2020-09-23",
            FromDate: "",
            ToDate: ""

        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        
        
    }


  

    handlesubmit = (event) => {
        alert(`Submiited Successfully ${this.state}`);
        event.preventDefault();   
       
        const data = {
            "status": this.state.Status,
            "message": this.state.Message,
            "createdOn": this.state.CreatedOn,
            "fromDate": this.state.FromDate,
            "toDate": this.state.ToDate
        }
        console.log(data)

        axios.post('http://notification-service-git-test-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Notification/insertNotification', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(error=>{
            console.log(error)
        });

    }

   


    render(){
        return(

            <div id="page-wrapper">
                <div className="row">
            

<form onSubmit = {this.handlesubmit}>
    <div className="panel panel-default">
        <div className="panel-heading">Add Notification</div>
        <div className="panel-body">
            <div className="row">
                <div className="col-md-4">
                    <label className="manadatory" for="Message">Message</label>
                    <textarea onChange={this.handleChange}
                    className="form-control" cols="20" data-val="true" data-val-required="Message Required" id="Message" maxlength="50" name="Message" value={this.state.Message} rows="2" style={{"width": "300px", "height": "100px"}}></textarea>
                    <span className="field-validation-valid text-danger" data-valmsg-for="Message" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-4">
                    <label className="manadatory" for="FromDate">FromDate</label>
                    <input 
                   
                    onChange={this.handleChange}
                    className="form-control" data-val="true" data-val-date="The field FromDate must be a date." data-val-required="FromDate Required" id="FromDate" maxlength="50" name="FromDate" type="text" value={this.state.FromDate} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="FromDate" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-4">
                    <label className="manadatory" for="ToDate">ToDate</label>
                    <input 
                    
                    onChange={this.handleChange}
                    
                    className="form-control" data-val="true" data-val-date="The field ToDate must be a date." data-val-required="ToDate Required" id="ToDate" maxlength="50" name="ToDate" type="text" value={this.state.ToDate} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="ToDate" data-valmsg-replace="true"></span>
                </div>
            </div>
            <div className="row">
                <div className="form-group">
                    <div style={{"margin-top":"10px"}} className="col-md-offset-0 col-md-12">
                        <input type="submit"value="Save Details" className="btn btn-success"/>
                        <input type="" className="btn btn-danger" value="Cancel"/>
                        <Link to='/allNotification'>
                
                
                        <input type="button" className="btn btn-info" value="All Notification"/>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</form>

            </div>
            </div>
           

        
        )
    }
}

export default PushNotification;