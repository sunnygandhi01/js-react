# js-react
React Readme &amp; Fundamentals

React js Fundamentals
  1.React Libraries 
    1. Office UI Fabric
    2. Material -UI
    3. React-bootstrap
    4. More on github.com/enagx/awesome-react
    5. React Routing  -- React Router like express.js
    6. Flow Of libraries - Redux and Mobx
    7. Testing - Jest
    8. RestFull API  - GraphQl
    9. Server Side with Node - NEXT.js 

  2. React Component - They are 2 types Function Component and class Component.
     For online we can use jscomplete.com to test the code.
     
     Example-1
     class StoryBox extends React.Component{
       render() {
         return (<div> Story Box </div>);
       }
     }

     a.Here Componenet name is written in upper CamelCase
     b. Component class inherits from a React base class.
     c. Every component needs to provide a render function
     d. we need the html called JSX 
     e. This is small case means, this is a rendered as HTML elements
     f. JSX is a way of writing JS with a transpile step.
     g. This will call React.createElement('div', null, 'Story Box')

     Example -2 
     class StoryBox extends React.Component{
       render() {
         return (
           <div>
             <h3> Stories App</h3>
             <p className="lead">Sample Paragraph</p>
           </div>
          );
       }

       This JSX will be transpiled into 
       React.createElement("div". null
         React.createElement("h3", null, "Stories App")
         React.createElement("p", {className: "lead"}, "Sample Paragraph")
       );
     }
     
     h. Now this JS is rendered by web into html.
     i In JSX we need to use className will be transpiled into class in HTML.

     Example -3 
     class StoryBox extends React.Component{
       render() {

         var const = new Date();
         return (
           <div>
             <h3> Stories App</h3>
             <p className="lead">
               Current Time: {now.toTimeString()}
             </p>
           </div>
          );
       }

     This will be transpired into:
     React.createElement("div". null
         React.createElement("h3", null, "Stories App")
         React.createElement("p", {className: "lead"}, "3/15/2018")
        
       );  

     





     After we need to call a Render function i:e
     ReactDOM.render(
       <StoryBox />, document.getElementById('story-app')
     )

     a. Here <StoryBox /> invokes StoryBox function
     b. second argument of this render function needs the target container information where it component needs will be rendered into.
     c. This will  transpiled into React.createElement(StoryBox, null)
     


     A. Function Component -  Simple form of function a simple function with a simple contract. 