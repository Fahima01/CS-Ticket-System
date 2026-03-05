import calender from '../../assets/calendar.png'

const TicketCard = ({ ticket, onSelect, isActive }) => {

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

        <div
            onClick={onSelect}
            className={`cursor-pointer ${isActive}'
                `}
        >
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
                <div className="flex justify-between items-center text-[14px] font-semibold tracking-wider">
                    <div className="flex gap-3 items-center">
                        <span className="text-gray-500">#{ticket.id}</span>
                        <span className={priorityColors[ticket.priority.toUpperCase()] || "text-gray-500"}>
                            {ticket.priority.toUpperCase()} PRIORITY
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <span>{ticket.customer}</span>
                        <div className="flex items-center gap-1">
                            {/* Simple Calendar Icon Placeholder */}
                            <img src={calender} className='w-5' alt="" srcset="" />
                            <span>{ticket.createdAt}</span>
                        </div>
                    </div>

                </div>
                {/* card end */}
            </div>
        </div>
    );
};

export default TicketCard;