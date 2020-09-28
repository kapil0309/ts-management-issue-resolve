import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      loading: true
    }
  }
  async getUsersData() {
    const res = await axios.get('http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/getAllProjects')
    //console.log(res.data)
    this.setState({ loading: false, projects: res.data })
  }
  componentDidMount() {
    this.getUsersData()
  }
  render() {
    const columns = [{
      Header: 'Project ID',
      accessor: 'projectId',
    }
      , {
      Header: 'Project Name',
        accessor: 'projectName',
    }
      , {
        Header: 'Nature of Industry',
        accessor: 'natureofIndustry',
    }
      , {
        Header: 'Project Code',
        accessor: 'projectCode',
    }
    ,{
      Header: 'Delete'
    }
    ]
    return (
      <ReactTable
        data={this.state.projects}
        columns={columns}
      />
    )
  }
}

export default App;