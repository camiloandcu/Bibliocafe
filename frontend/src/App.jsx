import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainPage } from './pages/MainPage'
import { Provider as UIProvider } from './components/ui/provider'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <MainPage />
      </UIProvider>
    </QueryClientProvider>
  )
}
