"use client"
import React  from "react";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
   


 const region = [
  {
    id: 1,
    name: 'Africa',
    
  },
  {
    id: 2,
    name: 'Americas',

  },
  {
    id: 3,
    name: 'Asia',

  },
  {
    id: 4,
    name: 'Europe',

  },
  {
    id: 5,
    name: 'Oceania',

  },
  
] 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Filter({onSelectRegion}) {
  const [selected, setSelected] = React.useState('');

  const handleRegionChange = (region) => {
    setSelected(region);
    onSelectRegion(region.name);
  }

  return (
    <Listbox value={selected} onChange={handleRegionChange}>
      {({ open }) => (
        <>
          
          <div className="relative m-auto w-64 md:mr-5">
            <Listbox.Button className="flex justify-center relative w-full cursor-default rounded-md py-2.5 pl-3 pr-10 text-left  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                
                <span className="ml-3 block truncate">{selected ? selected.name : "Filter by Region"}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {region.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">

                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

 