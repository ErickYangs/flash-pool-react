import {FC} from "react";
import check from '../../assets/images/checkbox-outline.svg'
import active from '../../assets/images/checkbox.svg'

type PropType = {
    checked: boolean;
    onCheck?: (val: boolean) => void
}
export const BaseCheckBox: FC<PropType> = ({checked, onCheck}) => {
    const switchCheck = ()=> {
        if (onCheck) {
            onCheck(!checked)
        }
    }
  return  <img className="checkbox" src={checked?active: check} alt="" onClick={switchCheck} />
}