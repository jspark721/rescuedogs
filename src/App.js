const Dog = ({name, breed, gender }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, breed),
        React.createElement("h2", {}, gender),
    ])
}


const App = () => {
    return React.createElement(
        "div",
        { id: "navbar" },
        //whatever children of the div you want to pass in
        [
            React.createElement("h1", {}, "Rescue Dogs"),
            React.createElement(Dog, { 
                name: "Harvey", 
                breed: "Shih Tzu",
                gender: "Male"
            }),
            React.createElement(Dog, { 
                name: "Mochi", 
                breed: "Maltese",
                gender: "Female"
            }),
            React.createElement(Dog, { 
                name: "Rusty", 
                breed: "Toy Poodle",
                gender: "Male"
            }),
        ]
    );
};

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);