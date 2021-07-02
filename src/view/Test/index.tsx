import React, { useEffect, useState } from 'react'
import {BaseButton, ButtonType} from "../../components/Button";
import {BaseCheckBox} from "../../components/CheckBox";
import {NavArea} from "../../components/Nav";

export const HomePage: React.FC = () => {
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const handlerLog = () => {
        console.log(111111)
    }
    useEffect(()=> {
        console.log('isCheck', isCheck)
    },[isCheck])
    return <div><BaseButton onClick={handlerLog} type={ButtonType.Go} label={'Submit'} />
        <BaseCheckBox checked={isCheck} onCheck={setIsCheck} />
        <NavArea />
    </div>
}