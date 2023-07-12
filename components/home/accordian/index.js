import { React, useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export const Accordian = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className=' bg-light-blue-900' onClick={() => handleOpen(1)}>
                    <span>Bagaimana Cara Melakukan Order Tugas?</span>
                </AccordionHeader>
                <AccordionBody>
                    <span className='mx-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptate.
                    </span>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    <span>Apakah Saya Bisa Berkonsultasi Langsung ?</span>
                </AccordionHeader>
                <AccordionBody>
                    <span className='mx-2'>
                        Lorem ipsum dolor sit amet.

                    </span>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    <span>Tugas Apa Saja Yang Diterima?</span>
                </AccordionHeader>
                <AccordionBody>
                    <span className='mx-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                </AccordionBody>
            </Accordion>
        </>
    )
}

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}