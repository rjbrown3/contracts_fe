import React from "react";
import { useDropzone } from "react-dropzone";
import {IoMdCloudUpload} from "react-icons/io";

function Dropzone({ open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
      useDropzone({});
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
    return (
        <div {...getRootProps({ className: "dropzoneStyle" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">
              Release to drop the files here
            </p>
            
          ) : (
            <h1 className="dropzone-content">
              <IoMdCloudUpload  className="textColor"/>
            </h1>
          )}
          <button type="button" onClick={open} className="btn">
            Drag & drop file here or click to select file
          </button>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
    );
  }

export default Dropzone;