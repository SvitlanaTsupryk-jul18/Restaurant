import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Modal from "./Components/Modal";
import data from "./dishes";

class App extends React.Component {
  state = {
    isShown: false,
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
    console.log(copy);
    this.setState({ shownDishes: copy });
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        isShown: !prevState.isShown
      };
    });
  };

  addNewDish = newDish => {
    this.setState(prevState => {
      return {
        dishes: [...prevState.dishes, newDish],
        shownDishes: [...prevState.dishes, newDish]
      };
    });
  };

  render() {
    {
      console.log(this.state);
    }
    const { shownDishes, isShown, query } = this.state;
    return (
      <div>
        <Header value={query} setFilterQuery={this.setFilterQuery} />
        <Menu
          cards={shownDishes}
          loadMore={this.loadMore}
          toggleModal={this.toggleModal}
        />
        {isShown && (
          <Modal toggleModal={this.toggleModal} addNewDish={this.addNewDish} />
        )}
      </div>
    );
  }
}

export default App;
