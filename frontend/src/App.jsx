import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as UIProvider } from './components/ui/provider'
import { AppRouter } from './components/routes/AppRouter'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <AppRouter />
      </UIProvider>
    </QueryClientProvider>
  )
}
