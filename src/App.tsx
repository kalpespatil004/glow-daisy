import { Route, Routes } from 'react-router-dom';
import { CustomerLayout } from './layouts/CustomerLayout';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import AdminPlaceholder from './pages/AdminPlaceholder';

function App() {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="admin" element={<AdminPlaceholder />} />
    </Routes>
  );
}

export default App;
