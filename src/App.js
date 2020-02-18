import React, {useState} from "react";
import {ConfirmWindow} from "./components/confirmWindow";
import "./styles.css";

const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

export default function App() {
    const [isShow, setIsShow] = useState(false);
    const [paragraph, setParagraph] = useState(lorem);
    const [confirmProps, setConfirmProps] = useState({isShow: false});

    const handleDeleteParagraph = () => {
        setIsShow(true);
        setConfirmProps({
            tile: 'Вы подтверждаете свое действие?',
            handleSuccess: () => setParagraph('ups'),
            handleFailure: () => console.log('Failure'),
            closeWindow: () => setIsShow(false)
        });
    };

    return (
        <div className="App">
            <h1>Confirm Window</h1>
            <button onClick={handleDeleteParagraph}>
                delete
            </button>
            <p>{paragraph}</p>
            <ConfirmWindow isShow={isShow} {...confirmProps}/>
        </div>
    );
}
