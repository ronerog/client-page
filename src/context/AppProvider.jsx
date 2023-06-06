// import PropTypes from 'prop-types';
// import React, { useCallback, useMemo, useState } from 'react';
// import AppContext from './AppProvider';

// function AppProvider({ children }) {
//   const [User, setUser] = useState('');

//     async function loadUser(){
//     const request = await fetch('http://jiapi-wpp.vps-kinghost.net:3003/searchmat?DataBaseName=sigef_web_teste&MAT=11000')
//     const result = await request.json();
//     setUser(result)
//     return User;
// };

//   const contexto = useMemo(() => ({
//     User,
//     loadUser,
//    }), [
//     User,
//     loadUser,
//   ]);

//   return (
//     <AppContext.Provider value={ contexto }>{children}</AppContext.Provider>
//   );
// }

// AppProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default AppProvider;
