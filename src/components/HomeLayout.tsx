import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const tabs = [
  { to: '/', label: 'Narrative Landscape', end: true },
  { to: '/stories', label: 'Trending Stories', end: false },
  { to: '/why', label: 'Why This Exists', end: false },
];

export function HomeLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-warm-bg">
      <header>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-5">
            <h1 className="text-2xl font-bold text-white">Project Atlas</h1>
            <p className="text-slate-300 mt-1">
              Zoom out on the news
            </p>
          </div>
        </div>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="-mb-px flex gap-6">
              {tabs.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    [
                      'pt-3 pb-3 text-sm font-medium border-b-2 transition-colors',
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
        </div>
      </header>

      <Outlet />
    </div>
  );
}
