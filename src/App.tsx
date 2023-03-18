import "~/App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "~/navigation/MainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
