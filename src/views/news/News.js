import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NewsItem from "./NewsItem";
import axios from "axios";
import SearchBar from "./SearchBar";
import Box from "@material-ui/core/Box";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

class News extends Component {
  state = {
    result: null,
    searchTerm: DEFAULT_QUERY
  };

  componentDidMount = async () => {
    const response = await axios.get(url);
    this.setState({ result: response.data.hits });
  };

  renderListOfSearchedTopics = () => {
    const {result} = this.state
    if(!result) {
      return (<div>No data</div>)
    }
    return result.map((listItem, i) => {
      return result ? (<NewsItem key={i} listItem={listItem} />) : (<div>No data</div>);
    });
  };

  render() {
    return (
      <>
        <Container fixed style={{ marginTop: "100px" }}>
          <Typography variant="h6">
            <Box>News</Box>
            <Divider />
            <SearchBar />
          </Typography>
          {this.renderListOfSearchedTopics()}
        </Container>
      </>
    );
  }
}

export default News;
