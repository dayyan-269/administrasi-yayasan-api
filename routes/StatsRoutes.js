import getDashboardStats from "../handlers/Stat/DashboardStat/index.js";

const StatsRoutes = [
    {
        method: 'GET',
        path: '/stats/dashboard-stats',
        handler: getDashboardStats,
    }
];

export default StatsRoutes;