import Card from "./Card";
export default function Composition(){
    return(
        <div>
            <h2>Composition Practice</h2>
            <Card>
                <h2>User Profile</h2>
                <p>Name: Shakil</p>
            </Card>

            <Card>
                <h2>Notification</h2>
                <p>You have 3 unread messages</p>
            </Card>
        </div>
    );
}