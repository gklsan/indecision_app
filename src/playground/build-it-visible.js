console.log("Build in visible");

const appRoot = document.getElementById('app_root');
let visiblity = false;

const updateVisiblity = () => {
    // visiblity = visiblity ? false : true;
    visiblity = !visiblity;
    console.log(visiblity);
    render();
};

const render = () => {
    const template = (
        <div>
            <h1> Visiblity Toggle</h1>
            <button onClick={updateVisiblity}>{visiblity ? 'Hide details' : 'Show details'}</button>
            {/*<p>{visiblity ? 'This is my visiblity details' : undefined}</p>*/}
            {/*<p>{visiblity && 'This is my visiblity details'}</p>*/}
            {visiblity && (<div><p> This is the visiblity details</p> </div>)}
        </div>
    )
    ReactDOM.render(template, appRoot);
}


render();