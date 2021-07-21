import * as React from "react";
import "../styles/Editor.scss";

interface IEditorProps {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const Editor = (props: IEditorProps) => {
  const { markdown, setMarkdown } = props;
  return (
    <div className="editorContainer">
      <h2>Markdown Editor:</h2>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => {
          e.preventDefault();
          setMarkdown(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Editor;
