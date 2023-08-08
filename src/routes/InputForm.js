import { styled } from "styled-components"
import InputField from "../component/InputForm/InputField"
import RadioBtn from "../component/InputForm/RadioBtn"
export default function InputForm(){
    return (
        <Wrapper>
            <Title>애걔?</Title>
            <Inner>
                <RaioBtnContainer>
                    <RadioBtn/>
                </RaioBtnContainer>
                <InputContainer>
                    <InputField name="월급"/>
                </InputContainer>
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
    width:297px;
    margin-top:30px;
    // border:1px solid white;
`
const RaioBtnContainer=styled.div`
// border:1px solid white;
width:100%;
font-size:1.2rem;
`
