export default function InputField({name}){
    return (
        // <div className="nes-container is-dark with-title">
            <div style={{backgroundColor:'#212529'}} class="nes-field is-inline">
                <input type="text" id="dark_field" class="nes-input is-warning" placeholder="숫자만 입력해 주세요"/>
            </div>
        // </div>
    )
}