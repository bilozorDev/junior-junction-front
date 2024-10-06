import Card from "@/app/components/ui/dashboard/business-card"
import React from 'react'

const page = async () => {
    const data = await fetch("https://juniorjunction-40dd81467fa5.herokuapp.com/api/getservices", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const services = await data.json()


    console.log(services)

    return (
        <div className="col-span-9 p-4 flex flex-col gap-2">
            {services.map((service) => {
                return (
                    <Card key={service.id} service={service} />
                )
            })}
        </div>
    )
}

export default page
