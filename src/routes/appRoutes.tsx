import { ReactNode } from 'react';

import LeaderBoardIcon from '@assets/svgs/leaderBoardIcon.svg';
import SupportIcon from '@assets/svgs/supportIcon.svg';
import UserProfileIcon from '@assets/svgs/userProfileIcon.svg';
import ReportsAndHistoryIcon from '@assets/svgs/reportsAndHistoryIcon.svg';
import DashboardIcon from '@assets/svgs/dashboardIcon.svg';
import InvestmentPlansIcon from '@assets/svgs/investmentPlansIcon.svg';
import MarketPortfolioIcon from '@assets/svgs/marketPortfolioIcon.svg';

import { Dashboard } from '@pages/dashboard';
import { Invest } from '@pages/invest';
import { Paths } from '@constants/paths';
import { Profile } from '@pages/profile';

export type RouteType = {
  element: ReactNode;
  state: string;
  index?: boolean;
  path?: string;
  child?: RouteType[];
  sidebarProps: {
    displayText: string;
    icon?: ReactNode;
  };
};

const appRoutes: RouteType[] = [
  {
    index: true,
    path: Paths.Dashboard,
    element: <Dashboard />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Dashboard',
      icon: <img src={DashboardIcon} alt="logo SVG" />
    }
  },
  {
    path: Paths.MarketPortfolio,
    element: <Dashboard />,
    state: 'market-portfolio',
    sidebarProps: {
      displayText: 'Market Portfolio',
      icon: <img src={MarketPortfolioIcon} alt="leaderboard SVG" />
    }
  },
  {
    path: Paths.InvestmentPlans,
    element: <Invest />,
    state: 'investment-plans',
    sidebarProps: {
      displayText: 'Investment plans',
      icon: <img src={InvestmentPlansIcon} alt="leaderboard SVG" />
    }
  },
  {
    path: Paths.Leaderboard,
    element: <Dashboard />,
    state: 'leaderboard',
    sidebarProps: {
      displayText: 'Leader board',
      icon: <img src={LeaderBoardIcon} alt="leaderboard SVG" />
    }
  },
  {
    path: Paths.ReportsHistory,
    element: <Dashboard />,
    state: 'reports-and-history',
    sidebarProps: {
      displayText: 'Reports & History',
      icon: <img src={ReportsAndHistoryIcon} alt="leaderboard SVG" />
    }
  },
  {
    path: Paths.FleetActivitySummary,
    element: <Dashboard />,
    state: 'fleet-and-activity-summary',
    sidebarProps: {
      displayText: 'Fleet/Activity Summary',
      icon: <img src={SupportIcon} alt="SupportIcon SVG" />
    }
  },
  {
    path: Paths.Profile,
    element: <Profile />,
    state: 'profile',
    sidebarProps: {
      displayText: 'Profile',
      icon: <img src={UserProfileIcon} alt="UserProfileIcon SVG" />
    }
  },
  {
    path: Paths.Support,
    element: <Dashboard />,
    state: 'support',
    sidebarProps: {
      displayText: 'Support',
      icon: <img src={SupportIcon} alt="SupportIcon SVG" />
    }
  }
];

export default appRoutes;
