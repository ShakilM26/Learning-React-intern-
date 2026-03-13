const Greeting = (props) => {
    return(
        <div>
            <h3>This is, {props.user}</h3>
            <p>Today I'm learning: <strong>{props.topic}</strong></p>
        </div>
    )
}

const Parent = () => {
    return(
        <div>
            <h2>Learning Journey</h2>
            <Greeting user="shakil" topic="Components and Props"></Greeting>
            <Greeting user='talha' topic='State and Life Cycle'></Greeting>
        </div>
    );
}

export default Parent;