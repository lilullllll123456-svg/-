import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

type ErrorBoundaryState = {
  hasError: boolean
  message: string
}

class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    message: ''
  }

  public static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    const message = error instanceof Error ? error?.message ?? 'Unknown error' : 'Unknown error'
    return {
      hasError: true,
      message
    }
  }

  public componentDidCatch(error: unknown): void {
    console.error('Portfolio render error:', error)
  }

  public render(): React.ReactNode {
    if (this.state?.hasError) {
      return (
        <main className="min-h-screen bg-abyss-950 px-10 py-16 text-slate-100">
          <section className="mx-auto max-w-[900px] rounded-lg border border-cyan-300/25 bg-slate-950/80 p-8 shadow-jelly-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Render Error</p>
            <h1 className="mt-4 text-3xl font-semibold text-white">页面组件渲染失败，但应用没有黑屏。</h1>
            <p className="mt-4 rounded-md bg-red-950/50 p-4 text-sm leading-7 text-red-100">
              {this.state?.message ?? 'Unknown error'}
            </p>
          </section>
        </main>
      )
    }

    return this.props?.children
  }
}

const rootElement = document?.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  )
}
