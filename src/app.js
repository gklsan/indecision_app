console.log('App.js is runnging!!!!!!');

// This is the JSX code
var app = {
    title: 'Indecision APP',
    subtitle: 'Learning the React'
};

var template =  (
    <div>
        <h1>{app.title.toUpperCase()}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>First</li>
            <li>Second</li>
        </ol>
    </div>
);

var user = {
    name: 'Gokul P',
    age: 28,
    location: 'Bangalore'
}


var userName = 'Gokul P';
var userAge = 28;
var userLocation = 'Bangalore';
var templateTwo =
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>

var appRoot = document.getElementById("app_root");

ReactDOM.render(template, appRoot);
