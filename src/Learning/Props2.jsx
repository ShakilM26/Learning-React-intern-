// child component
// data received by props object
const EmployeeCard = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2> 
            <p>Profession: {props.profession}</p>
            <p>Company: {props.company}</p>
            <div>{props.children}</div>
        </div>
    )
}

// Parent component
const Parent = () => {
    return(
        <div>
            <h1>My Team Members</h1>

            <EmployeeCard name="Reed Richards" profession="System Engineer" company="ABC Software"></EmployeeCard>
            <hr />
            <EmployeeCard name="Tony Stark" profession="Software Engineer" company="XYZ Software">
                <p style={{color: 'blue'}}>Also he is available for hire</p>
            </EmployeeCard>
        </div>
    )
}

export default Parent;

// ---------------------------------------------------------
// 1.Reusability: EmployeeCard, I write it once but I can using it again and again
// with different data. 
// 2. props.children: it's a special props. component opening and closing tag er majhe
// ja kichu likha thakbe ta child component a chole jabe