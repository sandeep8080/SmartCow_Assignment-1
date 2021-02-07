import { Component } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/navBar";
import SideBar from "./Components/Sidebar/sideBar";
import Content from "./Components/Content/content";

class App extends Component {
  // Setting the default state
  state = {
    sideBarOpen: false,
    expandContent: true,
  };
  // @handle toggle functionality of Sidebar & main content
  handleSideBarOpen = () => {
    this.setState((prevState) => {
      return {
        sideBarOpen: !prevState.sideBarOpen,
        expandContent: !prevState.expandContent,
      };
    });
  };

  render() {
    return (
      <div>
        <NavBar onToggleBtnClick={this.handleSideBarOpen} />
        <SideBar showSB={this.state.sideBarOpen} />
        <Content expand={this.state.expandContent} />
        <div class="video">
          <iframe
            width="900"
            height="506"
            src="https://www.youtube.com/embed/M6DMuiCrFoE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default App;
