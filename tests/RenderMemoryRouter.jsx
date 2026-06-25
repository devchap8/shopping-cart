import { MemoryRouter, Outlet, Route, Routes } from 'react-router';
import App from '../src/App';
import Store from '../src/Store';

export const RenderMemoryRouter = ({ context, children }) => (
    <MemoryRouter initialEntries={["/store"]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </MemoryRouter>
);