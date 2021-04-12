import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "./components/loader/Loader";

class App extends Component {
	render() {
		console.log(this.props.stt.isLoading);
		const component = this.props.stt.isLoading ? <Loader /> : <Layouts />;
		return <Router>{component}</Router>;
	}
}

const MapStateToProps = (state) => {
	return {
		stt: state,
	};
};

export default connect(MapStateToProps)(App);
