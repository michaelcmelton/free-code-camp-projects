import * as React from "react";
import "../styles/App.scss";
import Editor from "./Editor";
import Previewer from "./Previewer";

const App = () => {
  const [markdown, setMarkdown] = React.useState<string>(
    "# Heading 1\n\n## Heading 2\n\n**Testing**\n\n* 1234\n\n![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)\n\n[Google](https://google.com)\n\n> asdfasdf asdfasdfasdf\n\n`var testing = 1234;`\n\n```\nfunction() {}\n```"
  );

  return (
    <div className="App">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer markdown={markdown} />
    </div>
  );
};

export default App;
