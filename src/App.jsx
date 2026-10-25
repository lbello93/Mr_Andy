import AppRoutes from "./routes/AppRoutes";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const App = () => {
  return (
    <>
      <LoadingScreen />
      <AppRoutes />
    </>
  );
};

export default App;