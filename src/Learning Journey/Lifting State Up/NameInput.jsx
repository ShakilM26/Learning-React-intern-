export default function NameInput({value, onChange}) {
    return (
        <div>
            <label className="block">Name: </label>

            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="border p-2 w-full" />
        </div>
    )
};