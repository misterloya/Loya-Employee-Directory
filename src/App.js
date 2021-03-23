
import './App.css';
import {API} from '../src/utils/API'
import React from 'react'
import BootstrapTable from './components/BootstrapTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../src/components/Search'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      search: ""
    };
  }
    componentDidMount(){
      API.getEmployee()
      .then(res => {
        this.setState({ 
          employees: res.data.results
        })
      })
    }


    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };



render(){
  return (
    <div className="App">
{/* 
      <NavBar  />
      <Header /> */}
      <Search search = {this.state.search} handleInputChange={this.handleInputChange} />
      <BootstrapTable employees = {this.state.employees.filter(employee => employee.name.last.toLowerCase().includes (this.state.search.toLowerCase()))}  />

 

    </div>
  );
}}

export default App;
