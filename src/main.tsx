import { render } from 'react-dom';

import axios from 'axios';

const { create, isCancel } = axios;
const http = create({
  baseURL: '/',
  timeout: 15 * 60 * 1000,
  withCredentials: true,
});

const App = () => {
  http.get('/xxx/path/to/api/proxy');
  return <>
    vite proxy repo
  </>
}

// 初始化应用
render(
    <App/>,
    document.getElementById("root"),
);
