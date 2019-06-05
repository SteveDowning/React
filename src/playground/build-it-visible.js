// console.log('BuildItVisible is running');

// const app = {
//     title: 'Visibility Toggle',
//     details: ''
// };


// const onShowDetails = () => {
//     app.details = "Woohoo here are some stinking details!"
//     renderBuildItVisible();
// };

// const onHideDetails = () => {
//     app.details = "";
//     renderBuildItVisible();
// };


// const renderBuildItVisible = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={app.details === '' ? onShowDetails : onHideDetails}>{app.details === ''?
//              'Show Details' : 'HideDetails'}</button>
//             <p>{app.details}</p>
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// };

// renderBuildItVisible();


let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide Details' : 'Show Details'}
            </button>
           {visibility && (
               <div>
            <p>Woohoo here are some stinking details!</p>
            </div>
           )}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();