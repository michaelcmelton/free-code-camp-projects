import * as React from "react";
import marked from "marked";
import ReactHtmlParser from "react-html-parser";
import "../styles/Previewer.scss";

interface IPreviewerProps {
  markdown: string;
}

const Previewer = (props: IPreviewerProps) => {
  const { markdown } = props;

  const [parsedInfo, setParsedInfo] = React.useState<string>(markdown);

  React.useEffect(() => {
    marked.setOptions({ breaks: true });
    const tokens = marked.lexer(markdown);
    const html = marked.parser(tokens);
    setParsedInfo(html);
  }, [markdown]);

  return <div id="preview">{ReactHtmlParser(parsedInfo)}</div>;
};
export default Previewer;
