import React, { use } from 'react';

const Tickets = ({ ticketpromise }) => {

    const ticketData = use(ticketpromise)
    console.log(ticketData)

    const priorityColors = {
        HIGH: "text-red-500",
        MEDIUM: "text-yellow-500",
        LOW: "text-green-500",
    };

    const statusColors = {
        Open: "bg-green-100 text-green-700",
        "In-Progress": "bg-yellow-100 text-yellow-700",
    };

    return (
        <>
            <div className="min-h-screen bg-[#F5F5F5] p-6">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">


                    <section className="lg:col-span-3 order-2 lg:order-1">
                        <h2 className="text-2xl font-semibold text-[#34485A] mb-6">Customer Tickets</h2>

                        {/* Left Column: Tickets */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ticketData.map((ticket) => (

                                <div key={ticket.id}>
                                    <div className="h-48 bg-white border border-gray-200 rounded shadow-lg p-4">
                                        {/* card start */}
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-[18px] font-bold text-[#34485A] leading-tight pr-2">
                                                {ticket.title}
                                            </h3>
                                            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[ticket.status] || 'bg-gray-100 text-gray-600'}`}>
                                                <span className={`w-2 h-2 rounded-full ${ticket.status === 'Open' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                                {ticket.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                                            {ticket.description}
                                        </p>
                                        <div className="flex justify-between items-center text-[11px] font-bold tracking-wider">
                                            <div className="flex gap-3 items-center">
                                                <span className="text-gray-400">#{ticket.id}</span>
                                                <span className={priorityColors[ticket.priority] || "text-gray-400"}>
                                                    {ticket.priority} PRIORITY
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-gray-400">
                                                <span>{ticket.customer}</span>
                                                <div className="flex items-center gap-1">
                                                    {/* Simple Calendar Icon Placeholder */}
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>{ticket.createdAt}</span>
                                                </div>
                                            </div>

                                        </div>
                                        {/* card end */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Right Column: Status Sidebar */}
                    <aside className="lg:col-span-1 order-1 lg:order-2 space-y-8 border-l border-gray-200 p-6 bg-white lg:bg-transparent rounded-lg">
                        <div>
                            <h3 className="text-xl font-semibold text-[#34485A] mb-2">Task Status</h3>
                            <p className="text-sm text-gray-500">Select a ticket to add to Task Status</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#34485A] mb-2">Resolved Task</h3>
                            <p className="text-sm text-gray-500">No resolved tasks yet.</p>
                        </div>
                    </aside>

                </div>
            </div>

        </>

    );
};

export default Tickets;