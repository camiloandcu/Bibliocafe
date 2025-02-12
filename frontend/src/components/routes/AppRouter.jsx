import { AboutPage } from '@/pages/AboutPage'
import { CreateLibraryCafePage } from '@/pages/CreateLibraryCafePage'
import { LibraryCafeDetailsPage } from '@/pages/LibraryCafeDetailsPage'
import { MainPage } from '@/pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='about' element={<AboutPage />} />

        <Route path='libraryCafes'>
          <Route path='create' element={<CreateLibraryCafePage />} />
          <Route path=':id' element={<LibraryCafeDetailsPage />} />
        </Route>

        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
