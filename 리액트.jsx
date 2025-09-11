import { useEffect } from "react";


function Child() {
    useEffect(() => {

        console.log("Child Mount");

        return () => {
            console.log("Child Unmount (Cleanup)");            
        };
    }, []);

    return (
        <>
            <div>Child</div>
        </>
    );
}
export default Child;

-----------------------------------------------------------------------------------------------------------------------
import { useState } from 'react';
import Child from './component/Child'

/* 라우터에 레이아웃 적용하기 */
/* Layout을 부모 라우트로 설정하면, 하위 라우트들이 Layout 컴포넌트의 <Outlet /> 위치에 렌더링된다. */

function App() {

    const [show, setShow] = useState(true);
    console.log('show : ', show);    
    
    return (
      <>
          <button type='button' onClick={() => setShow(prev => !prev)}>{show ? '숨기기' : '보이기'}</button>

          { show && <Child /> }

      </>
    );
}

export default App  // default export


--------------------------------------------------------------------------------------------------------------------------------------------
화면 레이아웃
--------------------------------------------------------------------------------------------------------------------------------------------


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import Login from './component/Login';

/* 라우터에 레이아웃 적용하기 */
/* Layout을 부모 라우트로 설정하면, 하위 라우트들이 Layout 컴포넌트의 <Outlet /> 위치에 렌더링된다. */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="index" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App  // default export

--------------------------------------------------------------------------------------------------------------------------------------------


// 리액트에서 레이아웃(Layout)은 웹 페이지의 전체적인 구조를 정의하는 컴포넌트입니다.
// 기본 레이아웃 컴포넌트 만들기


import { Outlet, Link } from "react-router-dom";

function Layout() {
  
    return (
        <div>
            <header style={{ padding: '1rem', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
                <h1>My Awesome Website</h1>
                <Link to="/login">로그인</Link>
            </header>

            <main style={{ padding: '2rem' }}>
                <Outlet />
            </main>

            <footer style={{ padding: '1rem', backgroundColor: '#e0e0e0', textAlign: 'center' }}>
                <p>&copy; 2024. All Rights Reserved.</p>
            </footer>
        </div>
    );

}

export default Layout;  // default export
























