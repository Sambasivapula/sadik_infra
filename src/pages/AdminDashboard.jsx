import React, { useState, useEffect } from 'react';
import { Download, FileJson, FileSpreadsheet, FileText, Search, ArrowUpDown, Calendar } from 'lucide-react';
import MetaWrapper from '../components/MetaWrapper';

const AdminDashboard = () => {
    const [leads, setLeads] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [stats, setStats] = useState({ total: 0, today: 0, topService: '-' });

    useEffect(() => {
        // Load leads from local storage (or default empty)
        const storedLeads = JSON.parse(localStorage.getItem('sadik_leads_backup') || '[]');

        // Sort by date descending (newest first)
        storedLeads.sort((a, b) => new Date(b.date) - new Date(a.date));
        setLeads(storedLeads);

        // Calculate Stats
        const todayStr = new Date().toISOString().split('T')[0];
        const todayLeads = storedLeads.filter(lead => lead.date.startsWith(todayStr));

        // Calculate most requested service
        const servicesCount = {};
        storedLeads.forEach(lead => {
            const service = lead.project_type || 'Unknown';
            servicesCount[service] = (servicesCount[service] || 0) + 1;
        });

        // Find top service safely
        let topService = 'None';
        let maxCount = 0;
        Object.entries(servicesCount).forEach(([service, count]) => {
            if (count > maxCount) {
                maxCount = count;
                topService = service;
            }
        });

        setStats({
            total: storedLeads.length,
            today: todayLeads.length,
            topService: topService
        });
    }, []);

    const filteredLeads = leads.filter(lead => {
        const searchLower = searchTerm.toLowerCase();
        return (
            (lead.user_name || '').toLowerCase().includes(searchLower) ||
            (lead.phone || '').toLowerCase().includes(searchLower) ||
            (lead.project_type || '').toLowerCase().includes(searchLower) ||
            (lead.location || '').toLowerCase().includes(searchLower)
        );
    });

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const d = new Date(dateString);
        return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
            d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white font-sans selection:bg-[#f97316]/30">
            <MetaWrapper title="Admin Dashboard | CrawlUP" description="Admin Dashboard for lead management." />

            {/* Admin Header */}
            <header className="border-b border-gray-800 bg-[#0a0f1c] sticky top-0 z-50">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 relative top-[5px]">
                        <div className="text-2xl font-black font-heading tracking-tight text-white mb-2">
                            Crawl<span className="text-[#f97316]">UP</span>
                        </div>
                        <span className="bg-[#f97316]/10 text-[#f97316] text-[10px] font-bold px-2 py-0.5 rounded border border-[#f97316]/20 uppercase tracking-widest relative -top-1">Admin</span>
                    </div>

                    {/* Navigation Tabs */}
                    <nav className="hidden md:flex items-center gap-6 h-full">
                        <button className="h-full px-2 text-sm font-semibold text-[#f97316] border-b-2 border-[#f97316] transition-colors relative top-[1px]">Submissions</button>
                        <button className="h-full px-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative top-[1px]">Users</button>
                        <button className="h-full px-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative top-[1px]">Settings</button>
                    </nav>

                    {/* User Profile */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-400">Hi, <span className="text-[#f97316]">SuperAdmin</span></span>
                        <button className="text-xs font-semibold px-4 py-1.5 border border-gray-700 rounded text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-8">

                {/* Title & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold font-heading">Submissions</h1>
                    <button onClick={() => window.location.reload()} className="flex items-center gap-2 px-4 py-2 border border-gray-700 bg-[#161c2d] hover:bg-[#1f2937] transition-colors rounded text-sm text-gray-300 font-medium shadow-sm">
                        <ArrowUpDown size={14} className="opacity-50" /> Refresh
                    </button>
                </div>

                {/* KPI Stats Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#161c2d] border border-gray-800 rounded-xl p-6 shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 relative z-10">Total Submissions</h3>
                        <p className="text-4xl font-black text-[#f97316] font-heading relative z-10">{stats.total}</p>
                    </div>
                    <div className="bg-[#161c2d] border border-gray-800 rounded-xl p-6 shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 relative z-10">Today</h3>
                        <p className="text-4xl font-black text-[#f97316] font-heading relative z-10">{stats.today}</p>
                    </div>
                    <div className="bg-[#161c2d] border border-gray-800 rounded-xl p-6 shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 relative z-10">Most Requested</h3>
                        <p className="text-xl md:text-2xl font-black text-[#f97316] font-heading truncate relative z-10 mt-1">{stats.topService}</p>
                    </div>
                </div>

                {/* Export Toolbar */}
                <div className="flex items-center gap-2 mb-4 text-xs">
                    <span className="text-gray-500 font-medium mr-2">Export:</span>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-800 bg-[#161c2d] hover:bg-[#1f2937] hover:text-white transition-colors rounded text-gray-300 font-medium">
                        <FileText size={12} className="opacity-70" /> CSV
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-800 bg-[#161c2d] hover:bg-[#1f2937] hover:text-white transition-colors rounded text-gray-300 font-medium">
                        <FileJson size={12} className="opacity-70" /> JSON
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-800 bg-[#161c2d] hover:bg-[#1f2937] hover:text-white transition-colors rounded text-gray-300 font-medium">
                        <FileSpreadsheet size={12} className="text-green-500/80" /> Excel
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-800 bg-[#161c2d] hover:bg-[#1f2937] hover:text-white transition-colors rounded text-gray-300 font-medium">
                        <Download size={12} className="text-red-500/80" /> PDF
                    </button>
                    <div className="ml-auto text-gray-500 text-xs">
                        Showing {filteredLeads.length} of {leads.length}
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-[#161c2d] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">

                    {/* Table Header Area */}
                    <div className="p-4 md:p-6 border-b border-gray-800 flex justify-between items-center">
                        <h2 className="text-lg font-bold">All Inquiries</h2>
                        <button className="text-xs px-3 py-1.5 border border-gray-700 rounded hover:bg-gray-800 transition-colors text-gray-300">
                            Clear Filters
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                {/* Headings */}
                                <tr className="border-b border-gray-800 bg-[#111827]">
                                    <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Ref ID <ArrowUpDown size={10} className="inline ml-1 opacity-50" /></th>
                                    <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Name <ArrowUpDown size={10} className="inline ml-1 opacity-50" /></th>
                                    <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Phone <ArrowUpDown size={10} className="inline ml-1 opacity-50" /></th>
                                    <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Service <ArrowUpDown size={10} className="inline ml-1 opacity-50" /></th>
                                    <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap min-w-[200px]">Message <ArrowUpDown size={10} className="inline ml-1 opacity-50" /></th>
                                    <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Location <ArrowUpDown size={10} className="inline ml-1 opacity-50" /></th>
                                    <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-orange-500 whitespace-nowrap">Time ▼</th>
                                </tr>
                                {/* Filters Row */}
                                <tr className="border-b border-gray-800 bg-[#111827]">
                                    <td className="px-3 pb-3 pt-1"><input type="text" placeholder="Search..." className="w-full bg-[#161c2d] border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-[#f97316] transition-colors" /></td>
                                    <td className="px-3 pb-3 pt-1"><input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className="w-full bg-[#161c2d] border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-[#f97316] transition-colors" /></td>
                                    <td className="px-3 pb-3 pt-1"><input type="text" placeholder="Search..." className="w-full bg-[#161c2d] border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-[#f97316] transition-colors" /></td>
                                    <td className="px-3 pb-3 pt-1">
                                        <select className="w-full bg-[#161c2d] border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-[#f97316] transition-colors appearance-none">
                                            <option>All</option>
                                        </select>
                                    </td>
                                    <td className="px-3 pb-3 pt-1"><input type="text" placeholder="Search..." className="w-full bg-[#161c2d] border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-[#f97316] transition-colors" /></td>
                                    <td className="px-3 pb-3 pt-1"><input type="text" placeholder="Search..." className="w-full bg-[#161c2d] border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-[#f97316] transition-colors" /></td>
                                    <td className="px-3 pb-3 pt-1 relative">
                                        <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-[#161c2d] border border-gray-700 rounded pl-2 pr-7 py-1 text-xs text-gray-300 focus:outline-none focus:border-[#f97316] transition-colors" />
                                        <Calendar size={12} className="absolute right-5 top-2.5 text-gray-500 pointer-events-none" />
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredLeads.length > 0 ? (
                                    filteredLeads.map((lead, idx) => (
                                        <tr key={idx} className="border-b border-gray-800/50 hover:bg-[#111827] transition-colors group">
                                            <td className="py-4 px-4 text-xs font-mono text-gray-500 group-hover:text-gray-400">{lead.reference || '-'}</td>
                                            <td className="py-4 px-4 text-sm font-semibold text-white">{lead.user_name || '-'}</td>
                                            <td className="py-4 px-4 text-sm text-gray-300">{lead.phone || '-'}</td>
                                            <td className="py-4 px-4">
                                                <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                                                    {lead.project_type || 'Unknown'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-xs text-gray-400 max-w-[200px] truncate" title={lead.message}>{lead.message || '-'}</td>
                                            <td className="py-4 px-4 text-xs text-gray-400">{lead.location || '-'}</td>
                                            <td className="py-4 px-4 text-xs text-gray-500 whitespace-nowrap">{formatDate(lead.date)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="py-12 text-center text-gray-500 text-sm">
                                            No tracking records found. Try submitting an inquiry via the Contact form.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
