import React from 'react';
import './App.css';
import NewsArticle from './components/NewsArticle/NewsArticle.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.markArticle = this.markArticle.bind( this );
    this.getArticleStatus = this.getArticleStatus.bind( this );
    this.state = {
      data : []
    }
    this.prepStorage();
  }
  prepStorage(){
    if(localStorage.articles === undefined ){
      localStorage.articles = JSON.stringify({});
    }
  }
  markArticle( articleURL ){
    debugger;
    const articleData = JSON.parse( localStorage.articles );
    if(!articleData.hasOwnProperty( articleURL )){
      articleData[ articleURL ] = {
        read: Date.now(),
      }
    }
    localStorage.articles = JSON.stringify( articleData );
  }
  getArticleStatus( articleURL ){
    const articleData = JSON.parse( localStorage.articles );    
    return articleData.hasOwnProperty( articleURL );
  }
  componentDidMount(){
    console.log('firing');
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=5c8e21ff646c40f8af7f340cf4281975';
    var req = new Request(url);
    fetch(req)
        .then( response => response.json() )
        .then( response => 
          this.setState( {
            data: response.articles
          })
        );
  }
  makeArticleColumn( data , index){
    return (
      <div className="articleColumn" key={index}>
        {data.map( articleData => 
          {
            debugger;
            return (<NewsArticle key={articleData.url} data={articleData} markCallback={this.markArticle} checkCallback={this.getArticleStatus}/>)
          }
        )}
      </div>
    );
  }
  render(){
    const data =this.state.data;
    const breakLength = Math.floor(data.length/3) + data.length%3;

    return(
      <div className="articleContainer">
        { data.map( articleData => <NewsArticle key={articleData.url} data={articleData} markCallback={this.markArticle} checkCallback={this.getArticleStatus}/>)}
      </div>
    )
  }
}

export default App;
