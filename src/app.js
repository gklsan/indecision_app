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

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
};

const appRoot = document.getElementById("app_root");

const render = () => {
    const template = (
        <div>
            <h1>{app.title.toUpperCase()}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}!</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>What should I do?</button>
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

