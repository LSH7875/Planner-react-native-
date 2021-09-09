import {useCtx} from '../Providers/AppProvider';
const {dispatch,state} = useCtx();

const closePopup=()=>{
    dispatch({type:'PopupClose'})
}

module.exports = {closePopup}