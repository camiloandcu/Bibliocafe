import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainPage } from './MainPage'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  )
}
