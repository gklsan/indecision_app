console.log('App.js is runnging!!!!!!');

// This is the JSX code
const app = {
    title: 'Indecision APP',
    subtitle: 'Learning the React',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option)
        e.target.elements.option.value = '';
    }
    render();
}

const onRemoveAll = () => {
    app.options = [];
    render();

}

// const orderList = () => {
//     return app.options.map((opt) => { return <li key={opt}>{opt}</li>})
// }

const appRoot = document.getElementById("app_root");

const render = () => {
    const template = (
        <div>
            <h1>{app.title.toUpperCase()}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}!</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>Count: {app.options.length} </p>
            <button onClick={onRemoveAll}>Remove All Options</button>
            <ol>
                {app.options.map((opt) => <li key={opt}>{opt}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

