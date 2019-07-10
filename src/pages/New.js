import React, { Component } from 'react';
import './New.css';

class New extends Component {
    render(){
        return (
            <form id="new-post">
                <input type="file" />
                
                <input 
                    type="text"
                    name="author"
                    placeholder="Autor do Post" 
                />

                <input 
                    type="text"
                    name="place"
                    placeholder="Local do Post" 
                />

                <input 
                    type="text"
                    name="description"
                    placeholder="Descrição do Post" 
                />

                <input 
                    type="text"
                    name="hashtags"
                    placeholder="HashTags do Post" 
                />

                <button type="submit">Enviar</button>

            </form>
        );
    };
}

export default New;