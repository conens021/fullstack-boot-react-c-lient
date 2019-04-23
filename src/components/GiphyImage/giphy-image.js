import React, { Component } from 'react';



class GiphyImage extends Component {
    state = {
        giphyUrl: "",
        isLoading: false,
        apiUrl: "http://api.giphy.com/v1/gifs/search?api_key=q0EhYlPPis8RAEVOoN0PpLbpuHXqT0HR&limit=1&q="
    }



    componentDidMount = () => {
        this.setState({
            isLoading: true
        })

        fetch(this.state.apiUrl + this.props.name)
           
            .then((response) => response.json())
            .then(response => {
                this.setState({
                    isLoading: true
                })
                if (response.data.length > 0) {
                    console.log("Getting data")
                    this.setState({
                        giphyUrl: response.data[0].images.original.url
                    })
                }
                else {
                    console.log(response.data.length)
                    this.setState({
                        giphyUrl: "https://media1.giphy.com/media/3oEjHP8ELRNNlnlLGM/giphy.gif"
                    })
                }
                this.setState({
                    isLoading: false
                })
            })

    }


    render() {

        if (this.state.isLoading) {
            return (<div>Loading...</div>)
        }

        return (
            <div className="giphy-image">
                <img src={this.state.giphyUrl} alt={this.props.name} />
            </div>
        )
    }
}


export default GiphyImage;