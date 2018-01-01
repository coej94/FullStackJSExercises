import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    renderSongs(){
        return this.props.data.songs.map(song =>{
            return (
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            );
        });
    }

    render() {
        if(this.props.data.loading) { return <div>Loading...</div>; }

        return (
        <ul className="collection">
            {this.renderSongs()}
        </ul> 
        )
    }
}

// Dette er data fra vores graphql server, skrevet i ES6 syntaks. det biver gjort med ` ` det bliver kaldt en template string
const query = gql`
    {
        songs {
            title
            id
        }
    }
`;
// graphql(query) tager querien vi skrev over, og executer den når SongList komponenten bliver kaldt
// Komponenten bliver rendered, hvorefter din Query bliver sent videre til din server
export default graphql(query)(SongList);