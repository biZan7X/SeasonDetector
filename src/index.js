import react from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import SeasonsDisplay from "./SeasonsDisplay";

class App extends react.Component {
   state = { lat: null, errorMessage: "" };

   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         (position) => {
            this.setState({ lat: position.coords.latitude }); //*updating the state
         },
         (err) => {
            this.setState({ errorMessage: err.message });
         }
      );
   }

   renderContent() {
      if (!this.state.errorMessage && this.state.lat)
         return <SeasonsDisplay lat={this.state.lat} />;

      if (this.state.errorMessage && !this.state.lat)
         return <div>Error : {this.state.errorMessage}</div>;

      return <Loader message="Please allow the location access." />;
   }

   render() {
      return <div>{this.renderContent()}</div>;
   }
}

ReactDOM.render(<App />, document.getElementById("root"));
