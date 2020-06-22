
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import './app.css';  
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            posts : [
                {
                  "userId": 1,
                  "id": 1,
                  "name": "H.C Verma(Physics)",
                  "description": " This Course gives the basics of Nuclear Physics and its Application. The prerequisite is a moderate knowledge of Quantum Mechanics."
                },
                {
                  "userId": 1,
                  "id": 2,
                  "name": "Mayashankar Singh(Chemistry)",
                  "description": "Advanced Organic Chemistry: Reactions and Mechanisms covers the four types of reactions substitution  and addition reactio hfh"
                },
                {
                  "userId": 1,
                  "id": 3,
                  "name": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                  "description": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doltiae porro eius odio et labore et velit aut"
                },
                {
                  "userId": 1,
                  "id": 4,
                  "name": "eum et est occaecati",
                  "description": "ullam et saepe reiciendis voluptatem adipisci\nsit  doloremque ipsam iure\nquis sunt voluptatem rerum illo velit  udggggggggggbbbbbbbbb"
                },
                {
                  "userId": 1,
                  "id": 5,
                  "name": "Data Srtucture By Arihant",
                  "description": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatemt tenetur dolor neque fjjhfhjjjjjjj fjhfjhhhhhhhhhh"
                },
                {
                  "userId": 1,
                  "id": 6,
                  "name": "S.Chand Math",
                  "description": "ut aspernatur corporis harum nihil quis provident sequi\nmo jhfffjhhfhjhfjfhusantium quas\nvoluptate dolores velit et doloremque molestiae"
                },
            ]          
        };
    }



    render() {
        const Shivam =this.state.posts;

    
            return(
                <div>
                    <h1 id="user-heading">Products details</h1>
                    <div class="offset-sm-3">
                    <div id="product">
                    <ol className="item">
                    {
                        Shivam.map(product => (
                            <li key={product.userId} align="start">
                                <div>
                                    <p className="title">{product.name}</p>
                                    <p className="body">{product.description}</p>
                                   <Link to='/apply'><button class="btn btn-primary"> Apply coupon</button></Link>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                    </div>
                    </div>
                </div>
            );
        }
      
    }
  
  
 


export default Users;
