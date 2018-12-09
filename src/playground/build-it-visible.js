console.log("Build in visible");

class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleAction = this.handleAction.bind(this);
        this.state = { visibility: false }
    }

    handleAction() {
        this.setState((prevState) => {
            return { visibility: !prevState.visibility }
        });
    }

    render() {
        return (
            <div>
                <h1> Visiblity Toggle </h1>
                <button onClick={this.handleAction}>{this.state.visibility ? <p>Hide Details</p> : <p>Show Details</p>}</button>
                {this.state.visibility && (<p>This is my visiblity details</p>)}
            </div>
        )
    }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app_root'))


// const appRoot = document.getElementById('app_root');
// let visiblity = false;
//
// const updateVisiblity = () => {
//     // visiblity = visiblity ? false : true;
//     visiblity = !visiblity;
//     console.log(visiblity);
//     render();
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1> Visiblity Toggle</h1>
//             <button onClick={updateVisiblity}>{visiblity ? 'Hide details' : 'Show details'}</button>
//             {/*<p>{visiblity ? 'This is my visiblity details' : undefined}</p>*/}
//             {/*<p>{visiblity && 'This is my visiblity details'}</p>*/}
//             {visiblity && (<div><p> This is the visiblity details</p> </div>)}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }
//
//
// render();