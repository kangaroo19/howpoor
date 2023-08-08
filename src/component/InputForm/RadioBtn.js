export default function RadioBtn(){
    return (
        <div className="nes-container is-dark with-title">
            <p className="title">월급/일급</p>
            <div style={{backgroundColor:'#212529',padding:'1rem 0',}}>
                <label style={{width:'100px'}}>
                    <input style={{width:'4px'}} type="radio" className="nes-radio is-dark" name="answer-dark" checked />
                    <span>월급</span>
                </label>

                <label style={{width:'100px'}}>
                    <input style={{width:'4px'}} type="radio" className="nes-radio is-dark" name="answer-dark" />
                    <span>일급</span>
                </label>
            </div>
        </div>
    )
}