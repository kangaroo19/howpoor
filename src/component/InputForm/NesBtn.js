export default function NesBtn({name,color}){
    return (
        <button type="button" className={color} style={{width:'30%'}}>{name}</button>
    )
}