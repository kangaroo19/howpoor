import { styled } from "styled-components"
import InputField from "../component/InputForm/InputField"
import RadioBtn from "../component/InputForm/RadioBtn"
import NesBtn from "../component/InputForm/NesBtn"
import StartBtn from "../component/InputForm/StartBtn"
export default function InputForm(){
    return (
        <Wrapper>
            <Inner>
                <Title>애걔?</Title>
                <RaioBtnContainer>
                    <RadioBtn/>
                </RaioBtnContainer>
                <InputContainer>
                <InputTitle>근무일수</InputTitle>
                    <InputContent>
                        <InputField name="근무일수"/>
                    </InputContent>
                </InputContainer>
                <InputContainer>
                <InputTitle>근무시간</InputTitle>
                    <InputContent>
                        <InputField name="근무시간"/>
                    </InputContent>
                </InputContainer>
                <InputContainer>
                    <InputTitle>출근일수</InputTitle>
                    <InputContent>
                        <InputField name="출근일수"/>
                    </InputContent>
                </InputContainer>
                <ButtonContainer>
                    <ButtonTitle>세금적용</ButtonTitle>
                    <ButtonContent>
                        <NesBtn name="없음" color="nes-btn is-primary"/>
                        <NesBtn name="10%" color="nes-btn is-success"/>
                        <NesBtn name="3.3%" color="nes-btn is-warning"/>
                    </ButtonContent>
                </ButtonContainer>
                <StartContainer>
                    <StartBtn/>
                </StartContainer>
            </Inner>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    padding:50px 10px;
`

const Inner=styled.div`
    padding-left:10px;
    padding-right:10px;
    // border:1px solid white;
`

const Title=styled.div`
    font-size:2rem;
    font-weigth:700;
    text-align:center;
`

const InputContainer=styled.div`
    width:100%;
    height:90px;
    // margin-top:30px;
    display:flex;
    // border:1px solid white;
    justify-content:space-between;
    align-items:center;
`

const InputTitle=styled.div`

`

const InputContent=styled.div`
    width:80%;
`


const RaioBtnContainer=styled.div`
// border:1px solid white;
width:100%;
font-size:1.2rem;
`

const ButtonContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const ButtonTitle=styled.div`

`

const ButtonContent=styled.div`
    width:80%;
    // border:1px solid white;
    display:flex;
    justify-content:space-between;
`

const StartContainer=styled.div`
    margin-top:80px;
`