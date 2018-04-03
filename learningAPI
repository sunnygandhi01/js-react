#
js - react
React Readme & amp;
Fundamentals

React js Fundamentals
1. React Libraries
1. Office UI Fabric
2. Material - UI
3. React - bootstrap
4. More on github.com / enagx / awesome - react
5. React Routing--React Router like express.js
6. Flow Of libraries - Redux and Mobx
7. Testing - Jest
8. RestFull API - GraphQl
9. Server Side with Node - NEXT.js

2. React Component - They are 2 types Function Component and class Component.
For online we can use jscomplete.com to test the code.

Example - 1
class StoryBox extends React.Component {
        render() {
            return ( < div > Story Box < /div>);
            }
        }

        a.Here component name is written in upper CamelCase
        b.Component class inherits from a React base class.
        c.Every component needs to provide a render

        function
        d.we need the html called JSX
        e.This is small
        case means, this is a rendered as HTML elements
        f.JSX is a way of writing JS with a transpile step.
        g.This will call React.createElement('div', null, 'Story Box')

        Example - 2
        class StoryBox extends React.Component {
            render() {
                return ( <
                    div >
                    <
                    h3 > Stories App < /h3> <
                    p className = "lead" > Sample Paragraph < /p> < /
                    div >
                );
            }

            This JSX will be transpiled into
            React.createElement("div".null React.createElement("h3", null, "Stories App") React.createElement("p", {
                className: "lead"
            }, "Sample Paragraph"));
        }

        h.Now this JS is rendered by web into html.
        i In JSX we need to use className will be transpiled into class in HTML.

        Example - 3
        class StoryBox extends React.Component {
            render() {

                var
                const = new Date();
                return ( <
                    div >
                    <
                    h3 > Stories App < /h3> <
                    p className = "lead" >
                    Current Time: {
                        now.toTimeString()
                    } <
                    /p> < /
                    div >
                );
            }

            This will be transpired into:
                React.createElement("div".null React.createElement("h3", null, "Stories App") React.createElement("p", {
                        className: "lead"
                    }, "3/15/2018")

                );




            After we need to call a Render

            function i: e
            ReactDOM.render( <
                StoryBox / > , document.getElementById('story-app')
            )

            a.Here < StoryBox / > invokes StoryBox

            function
            b.second argument of this render

            function needs the target container information where it component needs will be rendered into.
            c.This will transpiled into React.createElement(StoryBox, null)



            A.Function Component - Simple form of
            function a simple

            function with a simple contract.

            3. PROPS

            Example - 4
                -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- => CommentBox Component -
                -
                - -
                - /////////////////////////////////////////=>Comment Component  -
                -/                                        / -
                -/                                        / -
                - /////////////////////////////////////////  -
                - -
                -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


                In above example we have 2 components with us CommentBox Component which work as root component and comment Component which will change with every comment.
            step: 01 Always make a New Class for creating a components.

            step: 02 Now look at the html and check
            for which part will be root component and common component like in above comments can be reuse.

            step03 In example 4 the outer box will be root components as other components are added to it, and the comment div is common component, hence we will select that comment first.

            step04 Try to name className as same as components.

            step05 Also, it is also good practice to name the component as same as html class names.

            step - 06 Now create component for common component which in this example is Comment.

            step07 Now create the root component, using the common JSX in this root component.

            step08: What if we have more than one comment component, like we have in pur example, then we can add arguments in comment components called Props.

            step09: if dynamic data is passed then we need to add a function starting with
            custom(_customFunction()) which will return a JSX array of object or JSX Object. Add this function in the class CommentBox and call it output using this keyword.

            step-10 If this is not given for property we can use this.props.author =  this._getComments()

            example:
                class NewComponent extends React.Component {
                    render() {
                        return {};
                    }
                }
            HTML
                <
                div class = "comment-box" >
                <
                h3 > Comments < /h3> <
                h4 class = "common-count" > 2 Comments < /h4> <
                div class = "comment-list" >
                <
                div class = "comment" >
                <
                p class = "comment-header" > Sunny < /p> <
                p class = "comment-body" > Hello < /p> <
                div class = "-comment-footer" >
                <
                a href = "#"
            class = "comment-footer-delete" > Delete Comments < /a> <
                /div> <
                /div> <
                /div>

            React
            class Comment extends React.Component {
                render() {
                    return ( <
                        div className = "comment> <
                        p className = "comment-header" > Sunny < /p> <
                        p className = "comment-body" > Hello < /p> <
                        div className = "-comment-footer" >
                        <
                        a href = "#"
                        className = "comment-footer-delete" > Delete Comments < /a> <
                        /div> <
                        /div>
                    );
                }
            }

            class CommentBox extends React.Component {
                render() {
                    return ( <
                        div className = "comment-box" >
                        <h3 > Comments < /h3>
                        <h4 className = "common-count" > 2 Comments < /h4>
                        <div className = "comment-list" >
                        <Comment author = "Sunny"body = "Great" / > // This Refer to common React component
                        <Comment author = "Honey body="
                        Awesome " />
                        </div>
                        </div>
                    );
                }
            }

            Now the comment component will change to include 'this'
            to sent that information
            as props to root component.

            class Comment extends React.Component {
                render() {
                    return ( <
                        div className = "comment> <
                        p className = "comment-header" > { this.props.author } < /p> <
                        p className = "comment-body" > { this.props.body } < /p> <
                        div className = "-comment-footer" >
                        <
                        a href = "#"
                        className = "comment-footer-delete" > Delete Comments < /a> <
                        /div> <
                        /div>
                    );
                }
            }

            4. Dynamic Props : Typically the data comes back from API is Array of Objects
               For Example
               var dynamicProps = [
               { id: 1, author: "Sunny", body: "Hello" },
               { id: 2, author: "Honey", body: "Hello" }]

               class CommentBox extends React.Component {
                   var comments = this._getComments();
                   render() {
                    return ( <
                        div className = "comment-box" >
                        <h3 > Comments < /h3>
                        <h4 className = "common-count" > {comments.length} comments < /h4>
                        <div className = "comment-list" >
                          {comments} // The JSX knows how to render arrays.
                        </div>
                        </div>
                    );
                }

                _getComments() {
                    return commentList.map((comment) =>{
                        return (<Comment author={comment.author} body={comment.body}
                         "key=comment.id              />);
                    });
                }
            }

               In this example the comments is always '2 comments' or '0 comments' the comments is always plural , but if there is no comments it should be singular like '0 comment'. So we will be adding another function.

            class CommentBox extends React.Component {
                   var comments = this._getComments();
                   render() {
                    return ( <
                        div className = "comment-box" >
                        <h3 > Comments < /h3>
                        <h4 className = "common-count" > {this._getCommentsTitle(comments.length)} < /h4>
                        <div className = "comment-list" >
                          {comments} // The JSX knows how to render arrays.
                        </div>
                        </div>
                    );
                }

                _getComments() {
                    return commentList.map((comment) =>{
                        return (<Comment author={comment.author} body={comment.body}
                         key={comment.id}              />);
                    });
                }

                _getCommentsTitle(commentCount) {
                    if (commnetCount === 0) {
                        return 'No Comments';
                    } 
                    return '${commentCount} comments';
                }
            }

5. Handling Data Changes with State -  For this we will add a button on our app which hide or show the comment based on click.State represents data that changes over time.
   
   In react there is state manipulation which manipulates the DOM. Unlike Jquery which use event listners we use
   state manupilation in react.
       The state is JS object which lives inside each component.we can access this via this.state;
       We declare an inital state in the component's constructor
       We update state by calling this.setState()

       class CommentBox extends React.Component {
           render() {
               const comments = this._getComments();
               let commentNodes;
               if(this.state.showComments) {
                commentNodes = <div className='comment-List'>{comments}</div>
               }
               return return ( <
                        div className = "comment-box" >
                          <h3 > Comments < /h3>
                          <h4 className = "h4"> {this._getCommentsTitle(comments.length)} < /h4>
                            {commentNodes}
                        </div>
                    );
                }
            }

        As we want to start with our comments hidden the inital state should be hidden
        Here how we can set it

        class CommentBox extends React.Component {
           render() {
               const comments = this._getComments();
               let commentNodes;
               if(this.state.showComments) {
                commentNodes = <div className='comment-List'>{comments}</div>
               }
               return return ( <
                        div className = "comment-box" >
                          <h3 > Comments < /h3>
                          <h4 className = "h4"> {this._getCommentsTitle(comments.length)} < /h4>
                            {commentNodes}
                        </div>
                    );
                }
            
            getCommentsTitle(commentCount) {
                    if (commnetCount === 0) {
                        return 'No Comments';
                    } 
                    return '${commentCount} comments';
            }

            constructor() {
                super();  // super() must be called in our constructor

                this.state = {
                    showComments: false  // Initial states hides comments
                };
            }

            };

       this.state.showComments = true // will not work in react
       this.setState({ showComments: true }) //calling setState will only update the properties of an argument
                                               and not replace the entire state object.

        Now we will bind a on click event to render function.

        class CommentBox extends React.Component {
           render() {
               const comments = this._getComments();
               let commentNodes;
               if(this.state.showComments) {
                commentNodes = <div className='comment-List'>{comments}</div>
               }
               return() { 
                   <button onClick={this._handleClick.bind(this)}>Show comments</button>
                   // This is a bind event which will call function handleClick() to set the state of comments true or false on click.
                   
                        <div className = "comment-box" >
                          <h3 > Comments < /h3>
                          <h4 className = "h4"> {this._getCommentsTitle(comments.length)} < /h4>
                            {commentNodes}
                        </div>
               };


               _handleClick() {
                   this.setState({
                       showComments: {this.state.showComments}
                   });
               }
                }

            };

        Now we will add a function to change the button text to show comments to hide comments.
        class CommentBox extends React.Component {
           render() {
               const comments = this._getComments();
               let commentNodes;
               const buttonText = 'Show Comments'
               if(this.state.showComments) {
                buttonText = 'Hide Comments';   
                commentNodes = <div className='comment-List'>{comments}</div>
               }
               return() { 
                   <button onClick={this._handleClick.bind(this)}>Show comments</button>
                   // This is a bind event which will call function handleClick() to set the state of comments true or false on click.
                   
                        <div className = "comment-box" >
                          <h3 > Comments < /h3>
                          <h4 className = "h4"> {this._getCommentsTitle(comments.length)} < /h4>
                            {commentNodes}
                        </div>
               };


               _handleClick() {
                   this.setState({
                       showComments: {this.state.showComments}
                   });
               }
                }

            };

        Final Answer:
        class CommentBox extends React.Component {
            render() {
                const comments = this._getComments() || [];
                return(
                <div className="comment-box">
                    <h3>Comments</h3>
                    {this._getPopularMessage(comments.length)}
                    <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                    <div className="comment-list">
                    {comments}
                    </div>
                </div>
                );
            }

            _getPopularMessage(commentCount) {
                const POPULAR_COUNT = 10;
                if (commentCount > POPULAR_COUNT) {
                return (
                    <div>This post is getting really popular, don't miss out!</div>
                );
                }
            }
            
            _getComments() {
                const commentList = [
                { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png' },
                { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'images/default-avatar.png' }
                ];

                return commentList.map((comment) => {
                return (<Comment
                        author={comment.author}
                        body={comment.body}
                        avatarUrl={comment.avatarUrl}
                        key={comment.id} />);
                });
            }

            _getCommentsTitle(commentCount) {
                if (commentCount === 0) {
                return 'No comments yet';
                } else if (commentCount === 1) {
                return '1 comment';
                } else {
                return `${commentCount} comments`;
                }
            }
            }

            class Comment extends React.Component {
            constructor() {
                super();
                this.state = {
                isAbusive: false
                };
            }

            render() {
                return(
                <div className="comment">
                    <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
                    <p className="comment-header">{this.props.author}</p>
                    <p className="comment-body">
                    {this.props.body}
                    </p>
                    <div className="comment-actions">
                    <a href="#">Delete comment</a>
                    <a href="#">Report as Abuse</a>
                    </div>
                </div>
                );
            }
            }
6. Synthetic Events: This section we will allow users to add new comments  to app.
    Here we will be writing a new Component CommentForm.
    This component will be child of CommetBox Component
       
       class CommentForm extends React.Component {
           render() {
             return (
              <form className="comment-form"> 
                <label> Join the discussion</label>
                <div className="comment-form-fields">
                  <input placeholder="Name:"/>
                  <textarea name="extra-comment" placeholder="Comment:" cols="30" rows="10"></textarea>
                </div>
              <div className="comment-form-actions">
                <button type="submit">
                  Post Comments.
                </button>  
              </div>
             </form>    
             );  
           }
       }

    Right now the app is static, to make it listen to user action we need to add on submit method.
       class CommentForm extends React.Component {
           render() {
             return (
              <form className="comment-form"> onSubmit={this._handleSubmit.bind(this)};
                <label> Join the discussion</label>
                <div className="comment-form-fields">
                  <input placeholder="Name:"/>
                  <textarea name="extra-comment" placeholder="Comment:" cols="30" rows="10"></textarea>
                </div>
              <div className="comment-form-actions">
                <button type="submit">
                  Post Comments.
                </button>  
              </div>
             </form>    
             );  
           }

          _handleSubmit(event) {
              event.preventDefault();
          } 
       }

    Now we need to way to get the user input (input and textarea)
    To access this fields we will use refs and assign the values to properties.
       class CommentForm extends React.Component {
           render() {
             return (
              <form className="comment-form"> onSubmit={this._handleSUbmit.bind(this)};
                <label> Join the discussion</label>
                <div className="comment-form-fields">
                  <input placeholder="Name:" ref= {(input) => this._author = input}/>
                  <textarea name="body" placeholder="Comment:" cols="30" rows="10" ref= {(textarea) => this._body = textarea}></textarea>
                </div>
              <div className="comment-form-actions">
                <button type="submit">
                  Post Comments.
                </button>  
              </div>
             </form>    
             );  
           }

          _handleSubmit(event) {
              event.preventDefault();
          } 
       } 
    Now refs have access to input information, this information will be called in _handleSubmit method.
    We will create a new local variable in handleSubmit method and pass the prefs data
    As this are now elements we need to call a .props method to access them.
        class CommentForm extends React.Component {
           render() {
             return (
              <form className="comment-form"> onSubmit={this._handleSUbmit.bind(this)};
                <label> Join the discussion</label>
                <div className="comment-form-fields">
                  <input placeholder="Name:" ref= {(input) => this._author = input}/>
                  <textarea name="body" placeholder="Comment:" cols="30" rows="10" ref= {(textarea) => this._body = textarea}></textarea>
                </div>
              <div className="comment-form-actions">
                <button type="submit">
                  Post Comments.
                </button>  
              </div>
             </form>    
             );  
           }

          _handleSubmit(event) {
              event.preventDefault();

              let author = this._author;
              let body = this._body;

              this.props.addComment(author.value, body.value);
          } 
       }

    Now this Form should add a New comment in the commentBox , so when a user add a new comment that information should be propagate to commentBox container. So we need to transfer the data from commentForm to commentBox on user input. 
       This can be done as in JS function can be pass as arguments.

       class CommentBox extends React.Component {
            render() {
                
                return(
                <div className="comment-box">
                <CommentForm addComment= {this._addComment.bind(this)}>
                   
                </div>
                );
            }

            ._addComment(author, body) {
                const comment = {      // New Comment Object
                    id: this.state.comments.length+1,
                    author,
                    body
                }
                this.setState( {
                    comments: this.state.comments.concat([comment])
                }); // Updates the state when function is called by adding a           new comment, we have used concat instead of push as it will add the new comment in the end. 
            }
        }

        Now we have get comments function , which add the comments to commentsBox , ket change this to dynamic and move to constructor to capture change of state and add comment to commetBox 


            class CommentBox extends React.Component {
                ....

                _getComments() {
                    return this.state.comments.map((comment) => {
                      return (
                          <Comment
                            author= {comment.author}
                            body= {comment.body}
                            key= {comment.id}>
                      )
                    })
                }
            }

            class Comment extends React.Component {
                constructor() {
                    super();
                    this.state = {
                    isAbusive: false
                    };
                }

                render() {
                    let commentBody;
                    if (!this.state.isAbusive) {
                    commentBody = this.props.body;
                    } else {
                    commentBody = <em>Content marked as abusive</em>;
                    }
                    return(
                    <div className="comment">
                        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
                        <p className="comment-header">{this.props.author}</p>
                        <p className="comment-body">
                        {commentBody}
                        </p>
                        <div className="comment-actions">
                        <a href="#">Delete comment</a>
                        <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
                        </div>
                    </div>
                    );
                }

                _toggleAbuse(event) {
                    event.preventDefault();

                    this.setState({
                    isAbusive: !this.state.isAbusive
                    });
                }
                }

                class CommentBox extends React.Component {
                constructor() {
                    super();

                    this.state = {
                    showComments: false,
                    comments: [
                        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!', avatarUrl: 'images/default-avatar.png' },
                        { id: 2, author: 'Bending Bender', body: 'Excellent stuff', avatarUrl: 'images/default-avatar.png' }
                    ]
                    };
                }

                render() {
                    const comments = this._getComments();
                    return(
                    <div className="comment-box">
                        <CommentForm addComment={this._addComment.bind(this)} />
                        <h3>Comments</h3>
                        {this._getPopularMessage(comments.length)}
                        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                        <div className="comment-list">
                        {comments}
                        </div>
                    </div>
                    );
                }

                _getPopularMessage(commentCount) {
                    const POPULAR_COUNT = 10;
                    if (commentCount > POPULAR_COUNT) {
                    return (
                        <div>This post is getting really popular, don't miss out!</div>
                    );
                    }
                }

                _getComments() {
                    return this.state.comments.map((comment) => {
                    return (<Comment
                            author={comment.author}
                            body={comment.body}
                            avatarUrl={comment.avatarUrl}
                            key={comment.id} />);
                    });
                }

                _getCommentsTitle(commentCount) {
                    if (commentCount === 0) {
                    return 'No comments yet';
                    } else if (commentCount === 1) {
                    return '1 comment';
                    } else {
                    return `${commentCount} comments`;
                    }
                }

                _addComment(commentAuthor, commentBody) {
                    let comment = {
                    id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
                    author: commentAuthor,
                    body: commentBody
                    };

                    this.setState({
                    comments: this.state.comments.concat([comment])
                    });
                }
                }
            Final Example -01
                class CommentForm extends React.Component {
                constructor() {
                    super();
                    this.state = {
                    characters: 0
                    };
                }

                render() {
                    return (
                    <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                        <label>New comment</label>
                        <div className="comment-form-fields">
                        <input placeholder="Name:" ref={input => this._author = input} />
                        <textarea
                            placeholder="Comment:"
                            ref={textarea => this._body = textarea}
                            onKeyUp={this._getCharacterCount.bind(this)}></textarea>
                        </div>
                        <p>{this.state.characters} characters</p>
                        <div className="comment-form-actions">
                        <button type="submit">
                            Post comment
                        </button>
                        </div>
                    </form>
                    );
                }

                _handleSubmit(event) {
                    event.preventDefault();

                    this.props.addComment(this._author.value, this._body.value);

                    this._author.value = '';
                    this._body.value = '';

                    this.setState({ characters: 0 });
                }

                _getCharacterCount() {
                    this.setState({
                    characters: this._body.value.length
                    });
                }
                };

            class Comment extends React.Component {
                constructor() {
                    super();
                    this.state = {
                    isAbusive: false
                    };
                }

                render() {
                    let commentBody;
                    if (!this.state.isAbusive) {
                    commentBody = this.props.body;
                    } else {
                    commentBody = <em>Content marked as abusive</em>;
                    }
                    return(
                    <div className="comment">
                        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
                        <p className="comment-header">{this.props.author}</p>
                        <p className="comment-body">
                        {commentBody}
                        </p>
                        <div className="comment-actions">
                        <a href="#">Delete comment</a>
                        <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
                        </div>
                    </div>
                    );
                }

                _toggleAbuse(event) {
                    event.preventDefault();

                    this.setState({
                    isAbusive: !this.state.isAbusive
                    });
                }
                }

                class CommentBox extends React.Component {
                constructor() {
                    super();

                    this.state = {
                    showComments: false,
                    comments: [
                        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!', avatarUrl: 'images/default-avatar.png' },
                        { id: 2, author: 'Bending Bender', body: 'Excellent stuff', avatarUrl: 'images/default-avatar.png' }
                    ]
                    };
                }

                render() {
                    const comments = this._getComments();
                    return(
                    <div className="comment-box">
                        <CommentForm addComment={this._addComment.bind(this)} />
                        <h3>Comments</h3>
                        {this._getPopularMessage(comments.length)}
                        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                        <div className="comment-list">
                        {comments}
                        </div>
                    </div>
                    );
                }

                _getPopularMessage(commentCount) {
                    const POPULAR_COUNT = 10;
                    if (commentCount > POPULAR_COUNT) {
                    return (
                        <div>This post is getting really popular, don't miss out!</div>
                    );
                    }
                }
                
                _getComments() {
                    return this.state.comments.map((comment) => {
                    return (<Comment
                            author={comment.author}
                            body={comment.body}
                            avatarUrl={comment.avatarUrl}
                            key={comment.id} />);
                    });
                }

                _getCommentsTitle(commentCount) {
                    if (commentCount === 0) {
                    return 'No comments yet';
                    } else if (commentCount === 1) {
                    return '1 comment';
                    } else {
                    return `${commentCount} comments`;
                    }
                }
                
                _addComment(commentAuthor, commentBody) {
                    let comment = {
                    id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
                    author: commentAuthor,
                    body: commentBody
                    };
                    
                    this.setState({
                    comments: this.state.comments.concat([comment])
                    });
                }
                }
           Final Example -02
                class CommentForm extends React.Component {
                constructor() {
                    super();
                    this.state = {
                    characters: 0
                    };
                }
                
                render() {
                    return (
                    <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                        <label>New comment</label>
                        <div className="comment-form-fields">
                        <input placeholder="Name:" ref={c => this._author = c} />
                        <textarea placeholder="Comment:" ref={c => this._body = c} onChange={this._getCharacterCount.bind(this)}></textarea>
                        </div>
                        <p>{this.state.characters} characters</p>
                        <div className="comment-form-actions">
                        <button type="submit">
                            Post comment
                        </button>
                        </div>
                    </form>
                    );
                }
                
                _getCharacterCount(e) {
                    this.setState({
                    characters: this._body.value.length
                    });
                }
                
                _handleSubmit(event) {
                    event.preventDefault();
    

                    this.props.addComment(this._author.value, this._body.value);
                    
                    this._author.value = '';
                    this._body.value = '';
                    
                    this.setState({ characters: 0  });
                }
                }
    
    7. Lifecycles or Dynamic Inputs.
        Right now the comments are hard coded, in future we need to integrate a API which will provide the comments for this we need to follow this steps
            
         a. The first step is to make comments in commentBox as empty array so that data from the api can fill this up

           class CommentBox extends React.Component {
               constructor() {
                   super();

                   this.state = {
                       showComments: false,
                       comments: []  // Initialze with empty array.
                   }
               }
           }

        b. Jquery ajax will fetch result.
            class CommentBox extends React.Component {
               ....

               _fetchCommens() {
                   $.ajax({
                     method: 'GET'
                     url: '/api/comments'
                     success: _(comments) => { // Arrow function preserve the this binding to our class. 
                         this.setState({ comments }) // Here this refers to CommentBox Class 
                     } 
                   })
               }
           }

        c. Now we need to call this _fetchComments() 
           method but we cannot call this from
           CommentBox Class render method as        
           _fetchComments() method is calling render   
           function and render function is calling     
           _fetchComments() method.

          Hence we will use lifecycle methods, this methods are functions
          that get called while the component is rendered first time
          or removed from the DOM.
          Example 
                 Class CommentBox extends React.Components {

                   constructor();

                   componentWillMount();

                   render();

                   componentDidMount()

                   componentWillUnMount()
                 }
              
                 class CommentBox extends React.Component {
                   ...
                   ComponentWIllMount() {
                     _fetchComments(); // This is the Best place to make ajax call
                   }

                    _fetchCommens() {
                        $.ajax({
                          method: 'GET'
                          url: '/api/comments'
                          success: _(comments) => { // Arrow function preserve the this binding to our class. 
                              this.setState({ comments }) // Here this refers to CommentBox Class 
                          } 
                        })
                    }
                }
          
          In order to check whether the new comments are added, we can periodically check 
          the server for new updates. This is called Polling. Where we keep a watch on server
          that new information is added to the server or not.
          
          The best place to this in lifecycle method componentDidMount()
                  class CommentBox extends React.Component {
                   ...
                   ComponentWIllMount() {
                     _fetchComments(); // This is the Best place to make ajax call
                   }
                  
                   ComponentDidMount() {
                     setInterval(() => this._fetchComments(), 5000); 
                      // Now we will call fetchComments every 5 seconds
                      // But this can lead to memory leaks hence we will clear the timer after time interval.


                   }
                    _fetchComments() {
                        $.ajax({
                          method: 'GET'
                          url: '/api/comments'
                          success: _(comments) => { // Arrow function preserve the this binding to our class. 
                              this.setState({ comments }) // Here this refers to CommentBox Class 
                          } 
                        })
                    }
                }


                Answer:

                class CommentBox extends React.Component {

                  constructor() {
                    super();

                    this.state = {
                      showComments: false,
                      comments: []
                    };
                  }
                  
                  componentWillMount() {
                    this._fetchComments();
                  }

                  render() {
                    const comments = this._getComments();
                    return(
                      <div className="comment-box">
                        <CommentForm addComment={this._addComment.bind(this)} />
                        <CommentAvatarList avatars={this._getAvatars()} />
                        {this._getPopularMessage(comments.length)}
                        <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
                        <div className="comment-list">
                          {comments}
                        </div>
                      </div>
                    );
                  }
                  
                  _getAvatars() {
                    return this.state.comments.map(comment => comment.avatarUrl);
                  }

                  _getPopularMessage(commentCount) {
                    const POPULAR_COUNT = 10;
                    if (commentCount > POPULAR_COUNT) {
                      return (
                        <div>This post is getting really popular, don't miss out!</div>
                      );
                    }
                  }
                  
                  _getComments() {
                    return this.state.comments.map((comment) => {
                      return (<Comment
                              id={comment.id}
                              author={comment.author}
                              body={comment.body}
                              avatarUrl={comment.avatarUrl}
                              key={comment.id} />);
                    });
                  }

                  _getCommentsTitle(commentCount) {
                    if (commentCount === 0) {
                      return 'No comments yet';
                    } else if (commentCount === 1) {
                      return '1 comment';
                    } else {
                      return `${commentCount} comments`;
                    }
                  }
                  
                  _addComment(commentAuthor, commentBody) {
                    let comment = {
                      id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
                      author: commentAuthor,
                      body: commentBody,
                      avatarUrl: 'images/default-avatar.png'
                    };
                    
                    this.setState({
                      comments: this.state.comments.concat([comment])
                    });
                  }
                  
                  _fetchComments() {
                    $.ajax({
                      method: 'GET',
                      url: 'comments.json',
                      success: (comments) => {
                        this.setState({ comments });
                      }
                    });
                  }
                        
                  _deleteComment(commentID) {
                    const comments = this.state.comments.filter(
                      comment => comment.id !== commentID
                    );

                    this.setState({ comments });
                  }
                }

                class Comment extends React.Component {
                  constructor() {
                    super();
                    this.state = {
                      isAbusive: false
                    };
                  }

                  render() {
                    let commentBody;

                    if (!this.state.isAbusive) {
                      commentBody = this.props.body;
                    } else {
                      commentBody = <em>Content marked as abusive</em>;
                    }

                    return(
                      <div className="comment">
                        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
                        <p className="comment-header">{this.props.author}</p>
                        <p className="comment-body">
                          {commentBody}
                        </p>
                        <div className="comment-actions">
                          <a href="#">Delete comment</a>
                          <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
                        </div>
                      </div>
                    );
                  }

                  _toggleAbuse(event) {
                    event.preventDefault();

                    this.setState({
                      isAbusive: !this.state.isAbusive
                    });
                  }

                  _handleDelete(event) {
                    event.preventDefault();

                    if (confirm('Are you sure?')) {
                      this.props.onDelete(this.props.id);
                    }
                  }
                }

                class CommentForm extends React.Component {
                  constructor() {
                    super();
                    this.state = {
                      characters: 0
                    };
                  }
                  
                  render() {
                    return (
                      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                        <label>New comment</label>
                        <div className="comment-form-fields">
                          <input placeholder="Name:" ref={c => this._author = c} />
                          <textarea placeholder="Comment:" ref={c => this._body = c} onChange={this._getCharacterCount.bind(this)}></textarea>
                        </div>
                        <p>{this.state.characters} characters</p>
                        <div className="comment-form-actions">
                          <button type="submit">
                            Post comment
                          </button>
                        </div>
                      </form>
                    );
                  }
                  
                  _getCharacterCount(e) {
                    this.setState({
                      characters: this._body.value.length
                    });
                  }
                  
                  _handleSubmit(event) {
                    event.preventDefault();
                            
                    if (!this._author.value || !this._body.value) {
                      alert('Please enter your name and comment.');
                      return;
                    }

                    this.props.addComment(this._author.value, this._body.value);
                    
                    this._author.value = '';
                    this._body.value = '';
                    
                    this.setState({ characters: 0  });
                  }
                }

                class CommentAvatarList extends React.Component {
                  render() {
                    const { avatars = [] } = this.props;
                    return (
                      <div className="comment-avatars">
                        <h4>Authors</h4>
                        <ul>
                          {avatars.map((avatarUrl, i) => (
                            <li key={i}>
                              <img src={avatarUrl} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                }

  8. Adding and delete Comments on the server side.
     To start with we will add a new method called _deleteComment

            class CommentBox extends React.Component {
              ...

              _deleteComment( comment ) {
                $.ajax({
                  method: DELETE,
                  url 'something/${comment.id}'
                })
              }
            }
      Optimistic update: Before the Backend reply we will give user a immediate visual feedback.

            class CommentBox extends React.Component {
              ...

              _deleteComment( comment ) {
                $.ajax({
                  method: DELETE,
                  url 'something/${comment.id}'
                })
              }
            }

      Answer: 
            class CommentBox extends React.Component {
              constructor() {
                super();

                this.state = {
                  showComments: false,
                  comments: []
                };
              }
              
              componentWillMount() {
                this._fetchComments();
              }

              render() {
                const comments = this._getComments();
                return(
                  <div className="comment-box">
                    <CommentForm addComment={this._addComment.bind(this)} />
                    <CommentAvatarList avatars={this._getAvatars()} />
                    
                    {this._getPopularMessage(comments.length)}
                    <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
                    <div className="comment-list">
                      {comments}
                    </div>
                  </div>
                );
              }
              
              _getComments() {
                return this.state.comments.map((comment) => {
                  return (<Comment
                          id={comment.id}
                          author={comment.author}
                          body={comment.body}
                          avatarUrl={comment.avatarUrl}
                          onDelete={this._deleteComment.bind(this)}
                          key={comment.id} />);
                });
              }
              
              _getAvatars() {
                return this.state.comments.map(comment => comment.avatarUrl);
              }

              _getPopularMessage(commentCount) {
                const POPULAR_COUNT = 10;
                if (commentCount > POPULAR_COUNT) {
                  return (
                    <div>This post is getting really popular, don't miss out!</div>
                  );
                }
              }

              _getCommentsTitle(commentCount) {
                if (commentCount === 0) {
                  return 'No comments yet';
                } else if (commentCount === 1) {
                  return '1 comment';
                } else {
                  return `${commentCount} comments`;
                }
              }
              
              _addComment(commentAuthor, commentBody) {
                let comment = {
                  id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
                  author: commentAuthor,
                  body: commentBody,
                  avatarUrl: 'images/default-avatar.png'
                };
                
                this.setState({
                  comments: this.state.comments.concat([comment])
                });
              }
              
              _fetchComments() {
                $.ajax({
                  method: 'GET',
                  url: 'comments.json',
                  success: (comments) => {
                    this.setState({ comments });
                  }
                });
              }
              
              _deleteComment(commentID) {
                if (!commentID) {
                  return;
                }
                
                const comments = this.state.comments.filter(
                  comment => comment.id !== commentID
                );
                
                this.setState({ comments });
              } 
            }

            class Comment extends React.Component {
              constructor() {
                super();
                this.state = {
                  isAbusive: false
                };
              }

              render() {
                let commentBody;

                if (!this.state.isAbusive) {
                  commentBody = this.props.body;
                } else {
                  commentBody = <em>Content marked as abusive</em>;
                }

                return(
                  <div className="comment">
                    <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
                    <p className="comment-header">{this.props.author}</p>
                    <p className="comment-body">
                      {commentBody}
                    </p>
                    <div className="comment-actions">
                      <a href="#" onClick={this._handleDelete.bind(this)}>Delete comment</a>
                      <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
                    </div>
                  </div>
                );
              }

              _toggleAbuse(event) {
                event.preventDefault();

                this.setState({
                  isAbusive: !this.state.isAbusive
                });
              }
              
              _handleDelete(event) {
                event.preventDefault();
                
                if (confirm('Are you sure?')) {
                  this.props.onDelete(this.props.id);
                }
              }
            }

            class CommentForm extends React.Component {
              constructor() {
                super();
                this.state = {
                  characters: 0
                };
              }
              
              render() {
                return (
                  <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                    <label>New comment</label>
                    <div className="comment-form-fields">
                      <input placeholder="Name:" ref={c => this._author = c} />
                      <textarea placeholder="Comment:" ref={c => this._body = c} onChange={this._getCharacterCount.bind(this)}></textarea>
                    </div>
                    <p>{this.state.characters} characters</p>
                    <div className="comment-form-actions">
                      <button type="submit">
                        Post comment
                      </button>
                    </div>
                  </form>
                );
              }
              
              _getCharacterCount(e) {
                this.setState({
                  characters: this._body.value.length
                });
              }
              
              _handleSubmit(event) {
                event.preventDefault();
                        
                if (!this._author.value || !this._body.value) {
                  alert('Please enter your name and comment.');
                  return;
                }

                this.props.addComment(this._author.value, this._body.value);
                
                this._author.value = '';
                this._body.value = '';
                
                this.setState({ characters: 0  });
              }
            }

            class CommentAvatarList extends React.Component {
              render() {
                const { avatars = [] } = this.props;
                return (
                  <div className="comment-avatars">
                    <h4>Authors</h4>
                    <ul>
                      {avatars.map((avatarUrl, i) => (
                        <li key={i}>
                          <img src={avatarUrl} />
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            }      
