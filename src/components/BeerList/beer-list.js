import React, { Component } from 'react';

//component
import GiphyImage from '../GiphyImage/giphy-image';

//css
import './beer-list.css'

class BeerList extends Component {
    state = {
        beers: [],
        isLoading: false
    }

    headers = {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Accept': 'Application/json; charset=utf-8',
        'Referer':'http://localhost:5000/',
        'Origin':'http://localhost:5000'
    }

    componentDidMount = () => {
        this.setState({
            isLoading: true
        })

        fetch('http://localhost:8080/server/beers?page=0&size=5&sort=name,desc',
             {
                headers : this.headers
             })
            .then((response) => response.json())
            .then(data => this.setState({
                beers: data._embedded.beers,
                isLoading: false
            }))
    }


    render() {

        if (this.state.isLoading) {
            return (<div>Loading...</div>)
        }

        return (
            <div className="beer-list">
                {this.state.beers.map((beer)=> (
                    <div key = {beer.id}>
                        {beer.name}
                        <GiphyImage name={beer.name}/>
                    </div>
                ))}
            </div>
        )
    }
}


export default BeerList;
