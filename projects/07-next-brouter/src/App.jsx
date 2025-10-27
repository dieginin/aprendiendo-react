import { Suspense, lazy } from "react"

import { Route } from "./components/Route"
import { Router } from "./components/Router"

const AboutPage = lazy(() => import("./pages/About"))
const HomePage = lazy(() => import("./pages/Home"))
const Page404 = lazy(() => import("./pages/404"))
const SearchPage = lazy(() => import("./pages/Search"))

const appRoutes = [
  { path: "/", component: HomePage },
  { path: "/:lang/about", component: AboutPage },
  {
    path: "/member/:id/brawlers/:brawlerId",
    component: ({ params }) => (
      <>
        <h1>Member {params.id}</h1>
        <h2>Brawler {params.brawlerId}</h2>
      </>
    ),
  },
]

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* TODO Mejorar el loading */}
        <Router routes={appRoutes} errorPage={Page404}>
          <Route path='/about' component={AboutPage} />
          <Route path='/search/:query' component={SearchPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
