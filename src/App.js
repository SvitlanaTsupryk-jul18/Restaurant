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
  // setFilterQuery = event => {
  //   this.setState({ query: event.target.value });
  // };

  // filterPosts(posts, query) {
  //   return (
  //     posts &&
  //     posts.filter(
  //       post => post.title.includes(query) || post.body.includes(query)
  //     )
  //   );
  // }

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
        <Header value={query} />
        <Menu cards={shownDishes} loadMore={this.loadMore} />
        <Modal />
      </div>
    );
  }
}

export default App;
