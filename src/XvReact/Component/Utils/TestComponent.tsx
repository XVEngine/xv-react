import * as React from "react";


export interface TestComponentProps {
    test : string
}

interface TestComponentState {
    test:string
}

export default class TestComponent extends React.Component<TestComponentProps, TestComponentState> {

    constructor(props:TestComponentProps, context:any) {
        super(props, context);
        this.state = this.getInitialState();
    }

    getInitialState():TestComponentState {
        return {
            test: "Lorem ipsum do sor"
        };
    }

    render() {
        return <div>
            {this.state.test}
        </div>;
    }
}

