import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Experience from "./Experience";

class App extends React.Component {
  constructor(props) {
    super(props);

    // true == preview mode, false == edit mode
    this.state = {
      mode: true
    }
  }

  render() {
    const {mode} = this.state;
    
    return (
      <main className="cv-container">
        <Header mode={mode} />
        <Profile mode={mode} />
        <Experience mode={mode} />
        <div id="toggle-mode">
          {mode ? 
            <>
              <div id="toggle-preview" className="mode-active" onClick={(() => this.setState({mode: true}))}>PREV</div>
              <div id="toggle-edit" onClick={(() => this.setState({mode: false}))}>EDIT</div>
            </>
            :
            <>
              <div id="toggle-preview" onClick={(() => this.setState({mode: true}))}>PREV</div>
              <div id="toggle-edit" className="mode-active" onClick={(() => this.setState({mode: false}))}>EDIT</div>
            </>
          }
        </div>
      </main>
    );
  }
}

export default App;
