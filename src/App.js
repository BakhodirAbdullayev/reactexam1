import RoutesWrapper from "./Routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorderSecondary: "#d1d1d1",
        },
      }}
    >
      <div className="App">
        <RoutesWrapper />
      </div>
    </ConfigProvider>
  );
}

export default App;
