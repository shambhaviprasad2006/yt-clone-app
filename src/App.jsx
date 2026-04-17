import { Routes, Route, useLocation, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function PlaceholderPage({ eyebrow, title, description }) {
  return (
    <section className="page-shell">
      <div className="page-card">
        <span className="page-eyebrow">{eyebrow}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-copy">{description}</p>
      </div>
    </section>
  );
}

function HomePlaceholder() {
  return (
    <PlaceholderPage
      eyebrow="Home"
      title="Home page coming next"
      description="The navigation shell is ready. Member 2 can plug the real home feed into this route without changing the app structure."
    />
  );
}

function WatchPlaceholder() {
  const { id } = useParams();

  return (
    <PlaceholderPage
      eyebrow="Watch"
      title={`Watch page for video ${id}`}
      description="The watch experience is not wired yet, but the route is already stable and ready for the real player page."
    />
  );
}

function SearchPlaceholder() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";

  return (
    <PlaceholderPage
      eyebrow="Search"
      title={query ? `Results for "${query}"` : "Search page coming next"}
      description={
        query
          ? "Search navigation is active. Member 2 can replace this placeholder with the real results page later."
          : "Use the navbar search to test the route flow. The page is intentionally lightweight until the results UI is added."
      }
    />
  );
}

function ChannelPlaceholder() {
  const { id } = useParams();

  return (
    <PlaceholderPage
      eyebrow="Channel"
      title={`Channel ${id}`}
      description="The shell is prepared for a full channel page. This placeholder keeps routing safe until that screen is implemented."
    />
  );
}

function LibraryPlaceholder({ title, description }) {
  return <PlaceholderPage eyebrow="Library" title={title} description={description} />;
}

function NotFoundPlaceholder() {
  const location = useLocation();

  return (
    <PlaceholderPage
      eyebrow="Not Found"
      title="That page is not available"
      description={`No route is connected for "${location.pathname}" yet. The shared shell is still running correctly.`}
    />
  );
}

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="app-content" aria-live="polite">
          <Routes>
            <Route path="/" element={<HomePlaceholder />} />
            <Route path="/watch/:id" element={<WatchPlaceholder />} />
            <Route path="/search" element={<SearchPlaceholder />} />
            <Route path="/channel/:id" element={<ChannelPlaceholder />} />
            <Route
              path="/liked"
              element={
                <LibraryPlaceholder
                  title="Liked videos page coming next"
                  description="The liked videos route is reserved and reachable. Member 3 can swap in the real saved-content page later."
                />
              }
            />
            <Route
              path="/history"
              element={
                <LibraryPlaceholder
                  title="History page coming next"
                  description="Watch history routing is connected. The final history screen can be added here without changing the surrounding layout."
                />
              }
            />
            <Route path="*" element={<NotFoundPlaceholder />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
