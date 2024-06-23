import { MaterialUISwitch } from './SwitchMUI';

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { themeTriggerActions } from "../../../redux";

const ChangeTheme = () => {

    const body = document.getElementsByTagName('body')[0];
    const { themeTrigger } = useAppSelector(state => state.themeTrigger);
    const dispatch = useAppDispatch();

    const change = () => {
        if (!themeTrigger) {
            body.style.backgroundColor = '#303030';
            body.style.color = '#D8D8D8';
            dispatch(themeTriggerActions.setThemeTrigger());
        } else {
            body.style.backgroundColor = '';
            body.style.color = '';
            dispatch(themeTriggerActions.setThemeTrigger());
        }
    };
    
    return (
        <div>
            <MaterialUISwitch onClick={change} />
        </div>
    )
};

export { ChangeTheme };