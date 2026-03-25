/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  PieChart, 
  BarChart2, 
  AlertCircle, 
  Folder, 
  ChevronDown, 
  X,
  FileText
} from 'lucide-react';

export default function App() {
  const tableData = [
    { id: 1, dot: 'red', priority: 'Set priority', priorityDropdown: true, alerts: 'Transaction volume', age: '12 days', subject: 'Ellison Mosshart (S)', transaction: 'Single' },
    { id: 2, dot: 'red', priority: 'HIGH', alerts: 'Number of transactions', age: '12 days', subject: 'Mathew Ihavelongsurname (R)', transaction: 'Single' },
    { id: 3, dot: 'red', priority: 'HIGH', alerts: 'Transaction volume', age: '15 days', subject: 'Ellison Mosshart (S)', transaction: 'Multi' },
    { id: 4, dot: 'red', priority: 'HIGH', alerts: 'Transaction volume', age: '12 days', subject: 'Ellison Mosshart (S)', transaction: 'Single' },
    { id: 5, dot: 'orange', priority: 'MEDIUM', alerts: 'Transaction volume', age: '12 days', subject: 'Ellison Mosshart (S)', transaction: 'Multi' },
    { id: 6, dot: 'orange', priority: 'MEDIUM', alerts: 'Transaction volume', age: '102 days', subject: 'Ellison Mosshart (S)', transaction: 'Single' },
    { id: 7, dot: 'orange', priority: 'MEDIUM', alerts: 'Transaction volume', age: '12 days', subject: 'Ellison Mosshart (S)', transaction: 'Single' },
    { id: 8, dot: 'orange', priority: 'MEDIUM', alerts: 'Transaction volume', age: '12 days', subject: 'Ellison Mosshart (S)', transaction: 'Single' },
    { id: 9, dot: 'gray', priority: 'LOW', alerts: 'Transaction volume', age: '12 days', subject: 'Ellison Mosshart (S)', transaction: 'Single', hasTooltip: true },
    { id: 10, dot: 'gray', priority: 'LOW', alerts: 'Transaction volume', age: '12 days', subject: 'Ellison Mosshart (S)', transaction: 'Single' },
  ];

  return (
    <div className="min-h-screen bg-[#dcdcdc] flex items-center justify-center p-8 font-sans text-[#1a1a1a]">
      {/* Main App Container */}
      <div className="w-full max-w-[1400px] h-[850px] bg-[#f5f1ec] rounded-xl shadow-2xl flex overflow-hidden relative">
        
        {/* Left Sidebar */}
        <div className="w-[80px] bg-[#e69d66] flex flex-col items-center py-8 justify-between z-20">
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Logo placeholder */}
            <div className="w-8 h-8 bg-[#1a1a1a] rounded-md rounded-tr-2xl mb-4"></div>
            
            <button className="p-2 text-[#1a1a1a] hover:bg-black/10 rounded-lg transition-colors">
              <PieChart size={24} strokeWidth={2.5} />
            </button>
            <button className="p-2 text-[#1a1a1a] hover:bg-black/10 rounded-lg transition-colors">
              <BarChart2 size={24} strokeWidth={2.5} />
            </button>
            
            {/* Active Item */}
            <div className="w-full flex justify-center bg-[#1a1a1a] py-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1a1a1a]"></div>
              <AlertCircle size={24} className="text-[#e69d66] fill-[#1a1a1a]" strokeWidth={2} />
            </div>
            
            <button className="p-2 text-[#1a1a1a] hover:bg-black/10 rounded-lg transition-colors">
              <Folder size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* User Avatar */}
          <div className="relative">
            <img 
              src="https://i.pravatar.cc/150?img=11" 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-[#e69d66]"
            />
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#e69d66]"></div>
          </div>
        </div>

        {/* Center Content (Alerts) */}
        <div className="flex-1 flex flex-col px-12 py-10 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
            <div className="flex items-center gap-6">
              <Search size={20} className="text-gray-600 cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-[#d49d6a] text-white flex items-center justify-center text-sm font-medium cursor-pointer">
                M
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-start">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">917</span>
                  <span className="text-sm text-green-600 font-medium">+36%</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">All current period alerts</p>
              </div>
              <div className="w-10 h-8 bg-[#fdf5f0] rounded flex items-center justify-center">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L7 5L11 9L19 1" stroke="#d49d6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 1H19V5" stroke="#d49d6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-start">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">31</span>
                  <span className="text-sm text-green-600 font-medium">+23</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Assigned to Me Alerts</p>
              </div>
              <div className="w-10 h-8 bg-[#fdf5f0] rounded flex items-center justify-center">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L7 5L11 9L19 1" stroke="#d49d6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 1H19V5" stroke="#d49d6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-start">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">272</span>
                  <span className="text-sm text-red-500 font-medium">-53</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">90 Days Old Alerts</p>
              </div>
              <div className="w-10 h-8 bg-[#fceef0] rounded flex items-center justify-center">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L11 3L19 11" stroke="#e15f4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11H19V7" stroke="#e15f4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="w-full">
            {/* Table Header */}
            <div className="grid grid-cols-[60px_140px_2fr_100px_2fr_120px] gap-4 pb-4 border-b border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2">
              <div className="flex items-center justify-center gap-1 cursor-pointer">A <ChevronDown size={12} /></div>
              <div className="flex items-center gap-1 cursor-pointer">PRIORITY <ChevronDown size={12} /></div>
              <div className="flex items-center gap-1 cursor-pointer">ALERTS <ChevronDown size={12} /></div>
              <div className="flex items-center gap-1 cursor-pointer">AGE <ChevronDown size={12} /></div>
              <div className="flex items-center gap-1 cursor-pointer">SUBJECT <ChevronDown size={12} /></div>
              <div className="flex items-center gap-1 cursor-pointer">TRANSACTION <ChevronDown size={12} /></div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col">
              {tableData.map((row, index) => (
                <div key={row.id} className="grid grid-cols-[60px_140px_2fr_100px_2fr_120px] gap-4 py-4 border-b border-gray-200/60 hover:bg-white/50 transition-colors items-center text-sm relative px-2">
                  <div className="flex justify-center">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      row.dot === 'red' ? 'bg-[#e15f4e]' : 
                      row.dot === 'orange' ? 'bg-[#d49d6a]' : 'bg-[#e5e5e5]'
                    }`}></div>
                  </div>
                  
                  <div className="font-medium flex items-center gap-1">
                    {row.priority}
                    {row.priorityDropdown && <ChevronDown size={14} className="text-gray-500" />}
                  </div>
                  
                  <div className="text-gray-800">{row.alerts}</div>
                  <div className="text-gray-600">{row.age}</div>
                  <div className="text-gray-800">{row.subject}</div>
                  <div className="text-gray-600">{row.transaction}</div>

                  {/* Tooltip for row 9 */}
                  {row.hasTooltip && (
                    <div className="absolute top-10 left-[20%] z-30 bg-[#111111] text-white text-xs p-4 rounded-md w-[320px] shadow-xl leading-relaxed">
                      High transaction volume (<span className="font-bold">$10M</span>) from one sender and elevated transaction volume (<span className="font-bold">$8M</span>) from one sender to one single recipient
                      {/* Tooltip Arrow */}
                      <div className="absolute -top-2 left-10 w-4 h-4 bg-[#111111] transform rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel (Details) */}
        <div className="w-[420px] bg-white border-l border-gray-200 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.02)] z-10 relative">
          
          {/* Panel Header */}
          <div className="p-10 pb-6 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">Details</h2>
              <p className="text-xs text-gray-400">Transaction ID #258693219</p>
            </div>
            <button className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <X size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-10 pb-24">
            
            {/* Tags */}
            <div className="flex gap-2 mb-8">
              <span className="px-3 py-1 bg-[#fceee8] text-[#e15f4e] text-sm font-bold rounded-md">
                $64,897
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-bold rounded-md">
                UK
              </span>
            </div>

            {/* Description Section */}
            <div className="mb-10">
              <h3 className="font-bold text-[15px] mb-3">High Transaction Volume</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                High transaction volume from one sender and elevated transaction volume to single recipient.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                The combination of source of fund and relationship answers did not match.
              </p>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">ASSIGN TO</p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#e69d66]"></div>
                  M. Leonas
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">PRIORITY</p>
                <p className="text-sm font-medium">HIGH</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">STATUS</p>
                <p className="text-sm font-medium text-gray-600">Validation</p>
              </div>
            </div>

            {/* Chart Section */}
            <div className="mb-10">
              <h3 className="font-bold text-[15px] mb-4">Transaction History</h3>
              <div className="flex gap-4 mb-6">
                <button className="text-xs font-medium text-gray-600 flex items-center gap-1">
                  Amount Sent <ChevronDown size={12} />
                </button>
                <button className="text-xs font-medium text-gray-600 flex items-center gap-1">
                  3-month Volume <ChevronDown size={12} />
                </button>
              </div>

              {/* Custom Bar Chart */}
              <div className="relative h-[180px] w-full mt-10">
                {/* Y-axis labels */}
                <div className="absolute -right-2 top-0 bottom-8 flex flex-col justify-between text-[10px] text-gray-400 text-right">
                  <span>$60,000</span>
                  <span>$40,000</span>
                  <span>$20,000</span>
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0 bottom-8 flex flex-col justify-between z-0">
                  <div className="w-[85%] border-b border-gray-200"></div>
                  <div className="w-[85%] border-b border-gray-200"></div>
                  <div className="w-[85%] border-b border-gray-200"></div>
                  <div className="w-full border-b border-gray-300"></div>
                </div>

                {/* Bars Container */}
                <div className="absolute inset-0 bottom-8 flex justify-between px-4 z-10 items-end">
                  
                  {/* March */}
                  <div className="flex gap-2 items-end h-full relative group">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">$45,210</div>
                    <div className="w-3 bg-[#d49d6a] rounded-t-sm h-[45%]"></div>
                    
                    <div className="absolute -top-8 right-0 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">$48,450</div>
                    <div className="w-3 bg-[#4a4a4a] rounded-t-sm h-[50%]"></div>
                  </div>

                  {/* April */}
                  <div className="flex gap-2 items-end h-full relative group">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">$49,811</div>
                    <div className="w-3 bg-[#d49d6a] rounded-t-sm h-[55%]"></div>
                    
                    <div className="absolute -top-8 right-0 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">$58,850</div>
                    <div className="w-3 bg-[#4a4a4a] rounded-t-sm h-[70%]"></div>
                  </div>

                  {/* May */}
                  <div className="flex gap-2 items-end h-full relative mr-12">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400">$58,150</div>
                    <div className="w-3 bg-[#d49d6a] rounded-t-sm h-[70%]"></div>
                    
                    {/* Highlighted Bar */}
                    <div className="relative h-[85%] flex flex-col justify-end">
                      {/* Tooltip */}
                      <div className="absolute -top-10 -left-6 bg-[#111111] text-white text-[10px] font-bold py-1.5 px-3 rounded z-20 whitespace-nowrap">
                        $64,897
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111111] transform rotate-45"></div>
                      </div>
                      {/* Dashed line connecting tooltip to bar */}
                      <div className="absolute -top-2 left-1/2 w-[1px] h-4 border-l-2 border-dashed border-[#e15f4e] z-10"></div>
                      
                      {/* The bar itself */}
                      <div className="w-3 bg-[#e15f4e] rounded-t-sm h-full opacity-80"></div>
                      {/* Striped pattern overlay for the highlighted bar */}
                      <div className="absolute inset-0 rounded-t-sm overflow-hidden opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }}></div>
                    </div>
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-12 flex justify-between px-6 text-xs font-medium text-gray-400">
                  <span>March</span>
                  <span>April</span>
                  <span>May</span>
                </div>
              </div>
            </div>

            {/* Attachments */}
            <div>
              <h3 className="font-bold text-[15px] mb-4">Attachments</h3>
              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="p-2 bg-gray-100 rounded-md text-gray-500">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Personal Information Doc</p>
                  <p className="text-xs text-gray-400 mt-0.5">12th of March</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-10 py-6 bg-white border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">STATUS</span>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#fdf5f0] text-[#d49d6a] text-sm font-bold rounded-md hover:bg-[#fae8dc] transition-colors">
              Validation <ChevronDown size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
