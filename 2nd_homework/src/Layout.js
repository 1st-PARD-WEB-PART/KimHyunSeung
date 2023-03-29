import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
      <table>
      제목
      <td></td><Link to="/">Home</Link>
      <td></td><Link to="/profiles/Kyj">김유진의 프로필</Link>
      <td></td><Link to="/profiles/Pjk">웹파트의 프로필</Link>
      <td></td><Link to="/profiles/void">존재하지 않는 프로필</Link>

        </table>
      </header>
      <main>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;