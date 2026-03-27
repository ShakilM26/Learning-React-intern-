export default function Card({children}) {
    return (
        <div style={{border: '1px solid #ddd',
            padding: '16px', borderRadius: '8px',
            marginBottom: '20px'
        }}>
            {children}
        </div>
    )
};