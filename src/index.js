import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="app">
            <h2 className="ui center aligned icon header">
            <i className="circular users icon"></i>
            Approval Cards
            </h2>   
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail  author="Sam" timeAgo="today at 5:54OM" avatar={faker.image.avatar()} text="testar" />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Alex" timeAgo="today at 5:54OM" avatar={faker.image.avatar()} text="testar" />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Jane" timeAgo="today at 5:54OM" avatar={faker.image.avatar()} text="testar" />
                </ApprovalCard>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));