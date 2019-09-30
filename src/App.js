import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Modal from "./Components/Modal";
import data from "./dishes";

class App extends React.Component {
  state = {
    isModalOpen: false,
    dishes: [],
    query: ""
  };

  componentDidMount() {
    this.setState({
      dishes: data
    });
  }

  loadMore = () => {
    let double = [...this.state.dishes, ...this.state.dishes];
    console.log(double);
    this.setState({
      dishes: double
    });
  };

  setFilterQuery = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen
      };
    });
  };

  addNewDish = newDish => {
    this.setState(prevState => {
      return {
        dishes: [...prevState.dishes, newDish]
      };
    });
  };

  filterDishes() {
    const { dishes, query } = this.state;
    return (
      dishes &&
      dishes.filter(
        dish => dish.name.includes(query) || dish.ingredients.includes(query)
      )
    );
  }

  render() {
    {
      console.log(this.state);
    }
    const { isModalOpen, query } = this.state;
    const visibleDishes = this.filterDishes();

    return (
      <div>
        <Header value={query} setFilterQuery={this.setFilterQuery} />
        <Menu
          cards={visibleDishes}
          loadMore={this.loadMore}
          toggleModal={this.toggleModal}
        />
        {isModalOpen && (
          <Modal toggleModal={this.toggleModal} addNewDish={this.addNewDish} />
        )}
      </div>
    );
  }
}

export default App;
