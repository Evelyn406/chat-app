import React from 'react';
import SearchInput from './SearchInput.jsx';
import Conversations from './Conversations.jsx';
import LogoutButton from './LogoutButton.jsx';

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className="divider px-2 mt-1 mb-0"></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar;

//starter code
// import React from 'react';
// import SearchInput from './SearchInput.jsx';
// import Conversations from './Conversations.jsx';
// import LogoutButton from './LogoutButton.jsx';

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//         <SearchInput />
//         <div className="divider px-2 mt-1 mb-0"></div>
//         <Conversations />
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar;