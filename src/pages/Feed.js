import React, { Component } from 'react';
import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render(){
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Nome do usuario</span>
                            <span className="place">Rio do Sul</span>
                        </div>
                        <img src={more} alt="Mais" className="icon-buttons" />
                    </header>
                    <img src="http://localhost:3333/files/zelda.jpg" alt="template inicial" />
                
                <footer>
                    <div className="actions">
                        <img src={like} alt="Curtir" className="icon-buttons" />
                        <img src={comment} alt="Comentar" className="icon-buttons" />
                        <img src={send} alt="Enviar" className="icon-buttons" />
                    </div>

                    <strong>1000 Likes</strong>
                    <p>Um post muito top! 
                        <span className="hashtags"> #FR4Geek #Top! #RedeSocialFR4Geek</span>
                    </p>

                </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Nome do usuario</span>
                            <span className="place">Rio do Sul</span>
                        </div>
                        <img src={more} alt="Mais" className="icon-buttons" />
                    </header>
                    <img src="http://localhost:3333/files/zelda.jpg" alt="template inicial" />
                
                <footer>
                    <div className="actions">
                        <img src={like} alt="Curtir" className="icon-buttons" />
                        <img src={comment} alt="Comentar" className="icon-buttons" />
                        <img src={send} alt="Enviar" className="icon-buttons" />
                    </div>

                    <strong>1000 Likes</strong>
                    <p>Um post muito top! 
                        <span className="hashtags"> #FR4Geek #Top! #RedeSocialFR4Geek</span>
                    </p>

                </footer>
                </article>
            </section>
        );
    };
}

export default Feed;