console.log('App.js is runnging!!!!!!');

// This is the JSX code
var app = {
    title: 'Indecision APP',
    subtitle: 'Learning the React',
    options: ['one', 'two']
};

var template =  (
    <div>
        <h1>{app.title.toUpperCase()}</h1>
        {app.subtitle && <p>Subtitle: {app.subtitle}!</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
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

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    }
}
var templateTwo =
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 25) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>

var appRoot = document.getElementById("app_root");

ReactDOM.render(templateTwo, appRoot);
