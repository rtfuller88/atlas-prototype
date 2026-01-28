import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const tabs = [
  { to: '/', label: 'Narrative Landscape', end: true },
  { to: '/stories', label: 'Trending Stories', end: false },
];

export function HomeLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-warm-bg">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-0">
          <h1 className="text-2xl font-bold text-warm-black">Project Atlas</h1>
          <p className="text-warm-muted mt-1">
            See the full picture on controversial topics
          </p>

          <nav className="-mb-px flex gap-6 mt-4">
            {tabs.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    'pb-3 text-sm font-medium border-b-2 transition-colors',
                    isActive
                      ? 'border-blue-600 text-blue-600 font-bold'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
