"use client"

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'

export default function Toggle() {
    const [enabled, setEnabled] = useState(false)

    return (
        <Field className="flex items-center pb-0">
            <Label as="span" className="mr-3 text-sm">
                <span className="font-medium text-gray-900">Contractor</span>{' '}
            </Label>

            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                />
            </Switch>
            <Label as="span" className="ml-3 text-sm">
                <span className="font-medium text-gray-900">Business</span>{' '}
            </Label>
        </Field>
    )
}