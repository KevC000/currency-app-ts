import { Disclosure } from '@headlessui/react'

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <p className="text-white">Currency Exchange Rates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}