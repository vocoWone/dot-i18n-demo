// App.tsx
import logo from './logo.svg';
import './App.css';

function App() {
return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <i18n>我是xml形式多语言词条，性能更优</i18n>
        </div>
        <div>
            {i18n("我是函数式多语言词条，使用更灵活")}
        </div>
        -------------------------------------------
        <div>
            <i18n namespace="my">我有自己的命名空间</i18n>
        </div>
        <div>
            {i18n("我也有自己的命名空间", {"namespace": "ym"})}
        </div>
        -------------------------------------------
        <div>
            <i18n>我不支持变量</i18n>
        </div>
        <div>
            {i18n("但是我支持变量{value}", {replace: {"{value}": i18n("--新值--")}})}
        </div>
    </header>
    </div>
);
}

export default App;
