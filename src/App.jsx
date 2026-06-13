import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AllArticlesPage from './pages/AllArticlesPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<AllArticlesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="article/:id" element={<ArticlePage />} />
        <Route path=":slug" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
