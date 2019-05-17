console.log('App.js is running!');



const app = {
    title: 'Indecision App',
    subtitle: 'From Andrew Mead\'s React course',
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

const user = {
    name: 'Steve D.',
    age: 99,
    location: 'Cleveland'
};

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>
    }else{
        return undefined;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name: 'Anonymous'}</h1>
       {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);