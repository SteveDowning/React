class IndecisionApp extends React.Component {
    render() {

        const title = 'Indecision!!!';
        const subtitle = 'Let the machine decide.';
        const options = ['Thing One', 'Thing Two', 'thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('this is handle pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.clearOptions = this.clearOptions.bind(this);
    }
    clearOptions() {
        console.log(this.props.options);
        // alert('Options cleared')
    }
    render() {
        return (
            <div>
                <button onClick={this.clearOptions}>Clear Options</button>
                {
                    this.props.options.map((item) => <Option key={item} optionText={item} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.UserInput.value.trim();

        if (option) {
            alert(option)
            e.target.elements.UserInput.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input type="text" name="UserInput"/>
                <button>Add Options</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
