import "./MainPage.css"

export default function MainPage({unit}) {
    return (
        <>
            <h1>Main Page</h1>
            <p>The application displays the current weather for the different locations.</p>
            <p>Enter the name of the city into the input field</p>
            <p>Or select the city name from the list on the left side</p>
            <br />
            <h3>This application uses the {unit} measurement system</h3>
            

        </>        
    );
}