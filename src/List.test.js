import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


describe('List component', ()=>{
    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="title" cards={[{id:'a', title:'First card', content:'lorem ipsum'}]} key="a"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List header="title" 
                cards={[{id:'a', title:'First card', content:'lorem ipsum'}]} 
                key="a"/>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});




