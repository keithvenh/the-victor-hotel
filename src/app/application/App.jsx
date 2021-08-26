import React from 'react';
import Home from './Home';
import Error from './Error';
import Header from './Header';
import School from '../school/School';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Home />
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage = (link) => {

    let page = <Home />;
    switch(link) {
      case 'home':
        page = <Home />
        break;
      case 'school':
        page = <School />
        break;
      default:
        page = <Error />
        break;
    }

    this.setState({page: page})

  }

  render () {

    
    return (
      <div className="App">
  
        <Header navClick={this.changePage}/>
  
        <div className='page'>

          {this.state.page}
          
        </div>
      </div>
    );
  }
}

export default App;
