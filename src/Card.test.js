import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', ()=>{
    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title="some title" content="some content" key="1"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(< Card title="Card Title"
                    content="lorem ipsum"
                    key="a"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});



