import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NewsItem from "./NewsItem";
import axios from "axios";
import SearchBar from "./SearchBar";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import LoadMoreBtn from "./LoadMoreBtn";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

class News extends Component {
  state = {
    result: null,
    searchTerm: 'redux'
  };

  componentDidMount = async () => {
    const response = await axios.get(url);
    this.setState({ result: response.data.hits });
  };

  renderListOfSearchedTopics = () => {
    const { result } = this.state;
    if (!result) {
      return <LinearProgress color="secondary" />;
    }
    return result.map((listItem, i) => {
      return result ? (
        <NewsItem key={i} listItem={listItem} />
      ) : (
        <LinearProgress />
      );
    });
  };

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
    console.log(this.state.searchTerm)
  };

  handleSubmit= (e) => {
    e.preventdefault()
  }

  render() {
    return (
      <>
        <Container fixed style={{ marginTop: "100px" }}>
          <Typography variant="h6">
            <Box>News</Box>
            <Divider />
            <SearchBar value={this.state.searchTerm} onChange={this.handleChange} onClick={this.handleSubmit} />
          </Typography>
          {this.renderListOfSearchedTopics()}
          {this.state.result && <LoadMoreBtn />}
        </Container>
      </>
    );
  }
}

export default News;
