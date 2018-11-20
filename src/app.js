console.log('App.js is runnging!!!!!!');

// This is the JSX code
var template =  (
    <div>
        <h1>This is jsx type of code!!!!</h1>
        <p> test </p>
        <ul>
            <li>First</li>
            <li>Second</li>
        </ul>
    </div>
);


var templateTwo =
    <div>
        <h1>Gokul P</h1>
        <p>Age: 28</p>
        <p>Location: Bangalore</p>
    </div>

var appRoot = document.getElementById("app_root");

ReactDOM.render(templateTwo, appRoot);
