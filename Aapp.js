import React from "react";
import ReactDOM from "react-dom/client";

//React Element => React.createElement => JS Object => HTML Element(render)

const heading=React.createElement("h1",{id:"heading"},"Namaste React");
console.log(heading);


//JSX- JSX is a JavaScript syntax which is easier to create React element
//JSX is HTML like or XML like syntax
//JSX(transpiled before it reaches the JS)-PARCEL-Babel(package) => it converts JSX program to React Element
//JSX => React.createElement => JS Object => HTML Element(render)
const jsxHeading=<h1 className="head" tabIndex="5"> Namaste React using JSX</h1>;
console.log(jsxHeading);
 
const elem=<span>React Element</span>;

const Title=()=>(
    <h1 className="head" tabIndex="5">
        {elem} Namaste React using JSX
    </h1>
);

const data=api.getData();
//React Component
//Class Component-OLD
//Functional Component-NEW
const HeadingComponent=()=>{
    return <h1 className="heading">Namaste React Functional Component</h1>;
};


const HeadingComponent2=()=>(
    <div id="container">
        <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    );


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);


