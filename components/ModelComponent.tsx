import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Card } from 'react-native-elements';
import {Subject} from 'rxjs';

export const MODEL_STATE = new Subject<boolean>();

export default function(props:any){
    const [isClosed, updateState] = useState<boolean>(false);

    MODEL_STATE.subscribe(v=>{
        updateState(v)
    })
    
    return(
        <Modal 
        animationType="slide"
        presentationStyle="formSheet"
        visible={isClosed}
        >
            <Card>
                {props.children}
            </Card>
        </Modal>
    )
}