import React from 'react';

// it's a Child Component: UserCard
// props অবজেক্টের মাধ্যমে ডেটা রিসিভ হচ্ছে

const UserCard = (props) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '15px',
            margin: '10px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            {/*props.name এর মাধ্যমে পাঠানো নাম রিসিভ করা হচ্ছে */}
            <h2>Name: {props.name}</h2>

            {/*props.profession এর মাধ্যমে পেশা*/}
            <p>Profession: {props.profession}</p>

            {/* props.children একটি স্পেশাল প্রপ, যা কম্পোনেন্টের মাঝের কন্টেন্ট দেখায় */}
            <div>{props.children}</div>
        </div>
    );
};


const Profile = () => {
    return (
        <div style={{padding: '20px'}}>
            <h1>My Team Members</h1>

            <UserCard name="Ariful Islam" profession="Frontend Developer">
                <button onClick={() => alert('Contacting Ariful...')}>Contact Me</button>
            </UserCard>

            <UserCard name='Sara Ahmed' profession='UI/UX Designer'>
            <p style={{color: 'blue'}}>Available for hire</p>
            </UserCard>

            <UserCard name='Rakib Hasan' profession='Backend Developer' />
        </div>
    );
};

export default Profile;