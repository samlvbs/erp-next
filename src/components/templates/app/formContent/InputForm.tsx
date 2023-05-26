export interface InputLabel{
    contentLabel: string
    placeholder: string
    type: string
    id: string
}
export default function InputForm(props:InputLabel){
    return(
        <div className="flex gap-2 text-black">
            <label>{props.contentLabel}</label>
            <input  type={props.type} placeholder={props.placeholder} id={props.id} 
            className="text-center border-b-[1px] border-zinc-300 rounded-lg"
            />
        </div>
    )
}