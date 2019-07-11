import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    state = {
        feed: [],
    };

    handleLikes = id => {
        api.post(`/posts/${id}/like`);
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        })

        socket.on('like', LikedPost => {
            this.setState({
                feed: this.state.feed.map(post => 
                    post._id === LikedPost._id ? LikedPost : post
                )
            });
        })
    }
    
    async componentDidMount(){
        this.registerToSocket();

        const response = await api.get('posts');

        this.setState({ feed: response.data });
    };

    render(){
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function appendLeadingZeroes(n){
            if(n <= 9){
              return "0" + n;
            }
            return n
          }

        return (
            <section id="post-list">
                { this.state.feed.map(post => (
                    
                    <article key={post._id}>
                        
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img src={more} alt="Mais" className="icon-buttons" />
                        </header>
                        
                        <img src={`http://localhost:3333/files/${post.image}`} alt="template inicial" />
                
                        <footer>
                            <div className="actions">
                                <button type="button">
                                    <img src={like} alt="Curtir" className="icon-buttons" onClick={() => this.handleLikes(post._id)}/>
                                </button>
                                <img src={comment} alt="Comentar" className="icon-buttons" />
                                <img src={send} alt="Enviar" className="icon-buttons" />
                            </div>

                            <strong>{post.likes} Likes</strong>
                        
                            <p>{post.description} 
                                <span className="hashtags"> #{post.hashtags}</span>
                            </p>
                            <p>
                                Publicado em: 
                                        {
                                           " " + new Date(post.createdAt).getDate() + " " 
                                            + months[new Date(post.createdAt).getMonth()] + " " 
                                            + new Date(post.createdAt).getFullYear() + " at "
                                            + appendLeadingZeroes(new Date(post.createdAt).getHours()) + ":" 
                                            + appendLeadingZeroes(new Date(post.createdAt).getMinutes()) + ":" 
                                            + appendLeadingZeroes(new Date(post.createdAt).getSeconds())
                                        } 
                                            <br /> 
                                Última Atualização: 
                                        {
                                            " " + new Date(post.updatedAt).getDate() + " "
                                            + months[new Date(post.updatedAt).getMonth()] + " "
                                            + new Date(post.updatedAt).getFullYear() + " at "
                                            + appendLeadingZeroes(new Date(post.updatedAt).getHours()) + ":" 
                                            + appendLeadingZeroes(new Date(post.updatedAt).getMinutes()) + ":" 
                                            + appendLeadingZeroes(new Date(post.updatedAt).getSeconds())
                                        }
                            </p>

                        </footer>

                    </article>
                    
                    )) 
                }

            </section>
        );
    };
}

export default Feed;