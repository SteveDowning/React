console.log('App.js is running!');



const app = {
    title: 'Indecision App',
    subtitle: 'From Andrew Mead\'s React course',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

const wipeArray = () => {
    app.options = [];
    renderIndecisionApp();
};


const appRoot = document.getElementById('app');

// const numbers = [55, 101, 69]

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={wipeArray}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Added Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();