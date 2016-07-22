import * as React from 'react';

export interface HtmlComponentProps { compiler:string; framework:string;
}

export class HtmlComponent extends React.Component<HtmlComponentProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
