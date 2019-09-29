import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Modal from "./Components/Modal";
import data from "./dishes";

class App extends React.Component {
  state = {
    isShown: true,
    dishes: [],
    query: "",
    shownDishes: []
  };

  componentDidMount() {
    this.setState({
      dishes: data,
      shownDishes: data
    });
  }

  loadMore = () => {
    let double = [...this.state.shownDishes].concat([...this.state.dishes]);
    console.log(double);
    this.setState({
      shownDishes: double
    });
  };

  setFilterQuery = event => {
    this.setState({ query: event.target.value.toLowerCase() });
    this.dishFilter();
  };

  dishFilter = () => {
    let copy = [...this.state.shownDishes].filter(
      dish =>
        dish.name.includes(this.state.query) ||
        dish.description.includes(this.state.query)
    );

    this.setState({ shownDishes: copy });
  };

  // handleClick = () => {
  //   this.setState(prevState => {
  //     return {
  //       isShown: !prevState.isShown
  //     };
  //   });
  //   console.log(id);
  // };

  render() {
    {
      console.log(this.state);
    }
    const { shownDishes, isShown, query, loadMore } = this.state;
    return (
      <div>
        <Header value={query} setFilterQuery={this.setFilterQuery} />
        <Menu cards={shownDishes} loadMore={this.loadMore} />
        <Modal />
      </div>
    );
  }
}

export default App;
