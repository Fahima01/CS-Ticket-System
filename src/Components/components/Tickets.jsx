import React, { use } from 'react';
import TicketCard from './TicketCard';

const Tickets = ({ ticketpromise, selectedTicket, onSelect, onComplete, resolvedTasks }) => {

    const ticketData = use(ticketpromise)

    const filteredTickets = ticketData.filter(
        (ticket) => !resolvedTasks.some((task) => task.id === ticket.id)
    );

    return (
        <>
            <div className="min-h-screen bg-[#F5F5F5] p-6">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">


                    <section className="lg:col-span-3 order-2 lg:order-1">
                        <h2 className="text-2xl font-semibold text-[#34485A] mb-6">Customer Tickets</h2>

                        {/* Left Column: Tickets */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredTickets.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    ticket={ticket}
                                    onSelect={() => onSelect(ticket)}
                                    isActive={selectedTicket?.id === ticket.id}
                                ></TicketCard>
                            ))}
                        </div>
                    </section>

                    {/* Right Column: Status Sidebar */}
                    <aside className="lg:col-span-1 order-1 lg:order-2 space-y-8 border-l border-gray-200 p-6 bg-white lg:bg-transparent rounded-lg">
                        <div>
                            <h3 className="text-xl font-semibold text-[#34485A] mb-2">Task Status</h3>

                        </div>

                        {selectedTicket.length === 0 ? (
                            <p className="text-sm text-gray-500">
                                Select a ticket to add to Task Status
                            </p>
                        ) : (
                            selectedTicket.map((ticket) => (
                                <div
                                    key={ticket.id}
                                    className="p-3 bg-base-100 shadow-lg rounded text-[#34485A] font-medium mb-3"
                                >
                                    <span>{ticket.title}</span>

                                    <button
                                        onClick={() => onComplete(ticket)}
                                        className="w-full btn bg-green-600 mt-4 text-white"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))
                        )}

                        <div>
                            <h3 className="text-xl font-semibold text-[#34485A] mb-2">Resolved Task</h3>
                            {resolvedTasks.length === 0 ? (
                                <p className="text-sm text-gray-500">No resolved tasks yet.</p>
                            ) : (
                                resolvedTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="p-3 mb-2 bg-[#E0E7FF] rounded text-[#34485A] font-medium"
                                    >
                                        {task.title}
                                    </div>
                                ))
                            )}
                        </div>
                    </aside>

                </div>
            </div>

        </>

    );
};

export default Tickets;