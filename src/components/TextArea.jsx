import { useRef } from "react";
import "./index.scss";
function TextArea({ onChange }) {
    const textAreaRef = useRef();

    const resizeTextArea = (e) => {
        textAreaRef.current.style.height = "24px";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 12 + "px";
        console.log(textAreaRef.current.style.height);
    }
    return (
        <textarea
            onChange={onChange}
            ref={textAreaRef}
            onInput={resizeTextArea}
            placeholder="Type something..."
            className="text-area"
        ></textarea>
    )
}

export default TextArea;