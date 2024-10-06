import React from 'react'

const Card = ({ service }) => {
    return (
        <div className="px-6 py-4 bg-gray-100 rounded-lg">
            <div className="flex flex-row gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-full" />
                <div>
                    <p className="font-bold">{service.Link}</p>
                    <p className="text-sm text-gray-400">{service.About}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
