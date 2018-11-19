import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard>
                <CommentDetail  author="Sam" timeAgo="today at 5:54OM" avatar={faker.image.avatar()} text="testar" />
           </ApprovalCard>
           <CommentDetail author="Alex" timeAgo="today at 5:54OM" avatar={faker.image.avatar()} text="testar" />
           <CommentDetail author="Jane" timeAgo="today at 5:54OM" avatar={faker.image.avatar()} text="testar" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));