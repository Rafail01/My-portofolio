import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { ssgParams } from 'hono/ssg'
import { Layout } from './pages/layout'
import { HomePage } from "./pages/home"
import { JobPage } from "./pages/job"


const app = new Hono()

app.all('*', jsxRenderer(({ children }) => <Layout>{children}</Layout>, {
    docType: '<!DOCTYPE html>'
}))

app.get('/', (c) => c.render(<HomePage />))
app.get('/home', (c) => c.render(<HomePage />))
app.get('/jobs', (c) => c.render(<JobPage />))




export default app
