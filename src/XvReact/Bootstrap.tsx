import * as React from "react";
import * as ReactDOM from "react-dom";

import HtmlComponent from "XvReact/Component/Utils/HtmlComponent";


ReactDOM.render(
    <HtmlComponent compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);