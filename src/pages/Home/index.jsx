import LOGO from "../../assets/logo.svg";
import "./css/style.scss";
import TEXT_COLOR from "../../assets/text-color.svg"
import FILE_COLOR from "../../assets/files-color.svg"
import FILE_GREY from "../../assets/files-grey.svg"
import TEXT_GREY from "../../assets/text-grey.svg"
import { useState } from "react";
import TextArea from "../../components/TextArea";
import ThemeButton from "../../components/Button";
import DropZone from "../../components/DropZone";
import FilesList from "../../components/FilesList";
import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




function HomePage() {
    const [type, setType] = useState("text");
    const [textValue, setTextValue] = useState("");

    return (
        <div className="container">

            <div className="header-bar">
                <div className="logo">
                    <img src={LOGO} alt="" />
                </div>
                <div className="menu-bar">
                    <ul>
                        <li>How it works</li>
                        <li>Download</li>
                        <li>Upgrade</li>
                        <li>Feedback</li>
                        <li className="menu-btn">Login / Register</li>
                    </ul>
                </div>
            </div>

            <div className="main-card">
                <div className="card-sidebar">
                    <div onClick={() => setType("text")}>
                        <img src={type === "text" ? TEXT_COLOR : TEXT_GREY} />
                    </div>
                    <div onClick={() => setType("files")}>
                        <img src={type === "files" ? FILE_COLOR : FILE_GREY} />
                    </div>
                </div>
                <div className="card-container">
                    {type === "text" ?
                        <div className="text-section">
                            <h1>Text</h1>
                            <div className="resize-section">
                                <TextArea
                                    value={textValue}
                                    onChange={(e) => setTextValue(e.target.value)}
                                />
                            </div>
                            <div className="save-btn-section">
                                <span>Clear</span>
                                <ThemeButton
                                    disabled={textValue ? false : true}
                                    title={"Save"}
                                />
                            </div>
                        </div>
                        :
                        <div className="files-section">
                            <div className="files-header">
                                <h1>Files</h1>
                                <div className="files-btn"> 
                                    <div className="download-btn">
                                        <FaDownload />
                                        Download All
                                    </div>
                                    <div className="delete-btn">
                                        <MdDelete />
                                        Delete All
                                    </div>
                                </div>
                            </div>
                            {/* <DropZone textElement={
                                <>
                                    Drag and drop any files up to 2 files, 5Mbs each or <span>Browse
                                        Upgrade</span> to get more space
                                </>
                            } /> */}
                            <FilesList />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
export default HomePage;