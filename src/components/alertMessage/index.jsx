import { useEffect, useState } from 'react'
import './alertMessage.scss'


function AlertMessage({typeAlert, messageAlert, style, durationTime = 3000, onClose}){

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if(onClose) onClose();
        }, durationTime);

        return () => clearTimeout(timer);
    }, [durationTime])

    if(!visible) return null;

    const colorContainer = {
        sucess: 'green',
        error: '#ff1717ab',
        info: 'orange'
    }
    const colorText ={
        sucess: '#FFF',
        error: '#FFF',
        info: '#000'
    }

    return(
        <div className='containerAlert'
        style={{
            backgroundColor: colorContainer[typeAlert] || '#FFF',
            color: colorText[typeAlert] || '#000',
            padding: '6px 12px',
            borderRadius: '18px',
            width: 'auto',
            position: 'absolute',
            textAlign : 'center',
            top: '25px',
            right: '10px',
            transition: 'opacity 0.3S',
            ...style
        }}
        >
            <span>{messageAlert}</span>
        </div>
    )
}

export default AlertMessage;