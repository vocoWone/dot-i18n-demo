import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DotI18N from "dot-i18n";
import locales from "./locales";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Inex = () => {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const changeEn = () => setLang("en")
  const changeZh = () => setLang("zh");

  return (
    <DotI18N.Provider locales={locales[lang]}>
      <button onClick={changeEn}>切换为英文</button>
      <button onClick={changeZh}>切换为中文</button>
      <App />
    </DotI18N.Provider>
  )
}

root.render(<Inex />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
