class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                    <p>Here are those details ya'll</p>
                    </div>
                )}
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//            {visibility && (
//                <div>
//             <p>Woohoo here are some stinking details!</p>
//             </div>
//            )}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// };

// render();