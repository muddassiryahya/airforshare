import { CiFileOn } from "react-icons/ci";
import "./index.scss";
import DropZone from "./DropZone";
import { GoPlus } from "react-icons/go";


function FilesList() {
    return (
        <div className="files-list">
            <div>
                <CiFileOn />
                <span>index.html</span>
            </div>
            <div>
                <DropZone textElement={
                    <span className="add-more-files">
                        <GoPlus />
                        <p>Add File</p>
                        <span>(Upto 5 MB)</span>
                    </span>
                } />
            </div>
        </div>
    )
}

export default FilesList;