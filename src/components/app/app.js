import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';
import '../app-header/app-header.css';
import '../post-list-item/post-list-item.css';


const App = () => {

    const data = [
        {label: "Going to learn React", important: true, id: 'wow'},
        {label: "That is good", important: false, id: 'sksksk'},
        {label: "I need a break...", important: false, id: 'xixixix'}
    ];
    return (
   <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data} />
        <PostAddForm/>
   </div>
    )
}

export default App;