import React from 'react';
import './newsarticle.css';

class NewsArticle extends React.Component{
    constructor( props ){
        super( props );
        this.hideModal = this.hideModal.bind( this );
        this.showModal = this.showModal.bind( this );
        this.state = {
            modalShowing: false,
            viewed: props.checkCallback( props.data.url )
        }
    }
    generateModal(){
        return (
            <div className="modalShadow">
                <div className="modalBody">
                    <div className="modalClose" onClick={this.hideModal}>X</div>
                    <div className="modalContent">
                        <a target="_blank" href={this.props.data.url} rel="noopener noreferrer">
                        <img alt={this.props.data.title} className="modalImage" src={this.props.data.urlToImage}/>
                        { this.props.data.content || this.props.data.description}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    hideModal(){
        this.setState({
            modalShowing: false
        })
    }
    showModal(){
        this.setState({
            viewed: true,
            modalShowing: true
        })
        this.props.markCallback( this.props.data.url );
    }
    render(){
        let {title, urlToImage: imageURL} = this.props.data;
        const style = {
            'backgroundImage' : `url(${imageURL})`
        }
        return(
            <div className="article" style={ style }>
                <div className="articleText" onClick={this.showModal}>{title}</div>
                { this.state.modalShowing ? this.generateModal() : null}
                { this.state.viewed ? <i className="viewedIcon far fa-eye"></i> : null }
            </div>
        );
    }
}

export default NewsArticle;