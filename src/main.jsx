import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
export default function CampusMentorApp() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <HomePage onNavigate={setPage} />}
      {page === "login" && <LoginPage onNavigate={setPage} />}
      {page === "signup" && <SignupPage onNavigate={setPage} />}
      {page === "dashboard" && <DashboardPage onNavigate={setPage} />}
    </>
  );
}
{page === "dm" && <DMPage onNavigate={setPage} />}
{page === "community" && <CommunityChatPage onNavigate={setPage} />}
