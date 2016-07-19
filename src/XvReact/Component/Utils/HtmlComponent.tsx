import * as React from "react";
import TestComponent from "./TestComponent";

export interface HtmlComponentProps {
    compiler:string;
    framework:string;
}

interface HtmlComponentState {
    counter:number[],
    test:string
}

export default class HtmlComponent extends React.Component<HtmlComponentProps, HtmlComponentState> {

    constructor(props:HtmlComponentProps, context:any) {
        super(props, context);
        this.state = this.getInitialState();
    }

    getInitialState():HtmlComponentState {
        return {
            counter: [],
            test: "test lorem ipsum"
        };
    }

    getComponent() {
        return React.createElement(TestComponent, {
            test : "Test simple lorem ipsum"
        });
    };

    getHtml() {
        return 'Fuck fuck fuck fuck fuck <lorem></lorem>';
    }

    render() {
        return <div dangerouslySetInnerHTML={{ '__html' : this.getHtml()}}>
        </div>;
    }
}

