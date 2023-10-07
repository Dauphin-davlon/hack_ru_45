import React from "react";  
import { ReactDOM } from "react";
import './Upload.css';

function Upload(){
    return(
        <div class="container">
            <h1>Upload Your Information</h1>
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label for="university">University:</label>
                    <input type="text" id="university" name="university" required />
                </div>
                <div class="form-group">
                    <label for="courses">Courses:</label>
                    <textarea id="courses" name="courses" required></textarea>
                </div>
                <div class="form-group">
                    <label for="file">Upload File:</label>
                    <input type="file" id="file" name="file" accept=".pdf" required />
                </div>
                <div class="form-group">
                    <button type="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default Upload;