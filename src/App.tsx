/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { ComingSoon } from './pages/ComingSoon';
import { Pricing } from './pages/Pricing';
import { Work } from './pages/Work';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="book" element={<Book />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<ComingSoon title="Case Study" />} />
            <Route path="services" element={<ComingSoon title="Services Hub" />} />
            <Route path="services/:slug" element={<ComingSoon title="Service Detail" />} />
            <Route path="process" element={<ComingSoon title="Our Process" />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<ComingSoon title="About Us" />} />
            <Route path="privacy" element={<ComingSoon title="Privacy Policy" />} />
            <Route path="terms" element={<ComingSoon title="Terms of Service" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
