import React, { MouseEvent, useState } from 'react';

import './Loader.css';

import { cnLoader } from './Loader.classname';

export interface ILoaderProps {
   onLoadEnd: () => void;
}

let eventMouseDown: boolean;

export const Loader: React.FC<ILoaderProps> = ({ onLoadEnd }) => {
    const [position, setPosition] = useState(0);

    const handlerMouseDown = (event: MouseEvent) => {
        eventMouseDown = true;
    }

    const handlerMouseMove = (event: MouseEvent) => {
        if (eventMouseDown) {
            setPosition(event.clientX);
        }
        if (position === 600) {
            setPosition(600);
            onLoadEnd();
        }
    }

    const handlerMouseUp = (event: MouseEvent) => {
        eventMouseDown = false;
    }

    return (
        <div 
            className={cnLoader()} 
            onMouseMove={handlerMouseMove}
            onMouseDown={handlerMouseDown}
            onMouseUp={handlerMouseUp}
        >
            <div className={cnLoader('Stripe')} style={{width: position}}></div>
        </div>
    );
}
