export default function AgeInput({value, onChange}) {
    return(
        <div>
            <label className="block">Age: </label>

            <input type="number" value={value} onChange={(e) => onChange(e.target.value)} className="border p-2 w-full" />
        </div>
    )
;}