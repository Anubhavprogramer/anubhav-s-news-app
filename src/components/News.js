import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  
  static defaultProps ={
    country:"in",
    category:"business",
    pageSize:13 
  }

  static propTypes ={
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }

  
  constructor(props) {
    super(props);
    this.state = {
      articles:[],
      page: 1,
      loading: false,
      totalResults: 0
    };
  }
  async componentDidMount() {
    this.updatenews()
  }
  async updatenews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
      this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(50);
      let parsedata = await data.json();
      this.setState({ articles: parsedata.articles });
      this.setState({totalResults:parsedata.totalResults})
      document.title=this.props.category;
      this.props.setProgress(100);
    }
 
  
   fetchMoreData = async () => {
      this.setState({page: this.state.page+1});
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
      this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedata.articles) });
    this.setState({totalResults:parsedata.totalResults})
    document.title=this.props.category;
    
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:"100px"}}>Anubhav's Web App presents Top headLines on {this.props.category} </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<=this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  tittle={element.title}
                  discreption={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  newsurl={element.url}
                  ImageURL={element.urlToImage}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    );
  }
}
