import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineBody,
    TimelineHeader,
} from "@material-tailwind/react";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { TbListDetails } from "react-icons/tb";
import { MdOutlinePayments, MdAccessTime } from 'react-icons/md';
import styles from './styles.module.scss'
import { Fade } from 'react-awesome-reveal';
export const OrderTimeline = () => {
    return (
        <div className={`${styles.timeline} w-[32rem]`}>
            <Timeline>
                <Fade cascade direction='up'>
                    <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader>
                            <TimelineIcon className="p-2">
                                <AiOutlineWhatsApp size={30} />
                            </TimelineIcon>
                            <Typography variant="h5" color="blue-gray">
                                <p>Chat Kami di Whatsapp</p>
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography color="gray" className="font-normal text-left text-gray-600">
                                <span>The key to more success is to have a lot of pillows. Put it this way, it took me
                                    twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                    I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                    luv.
                                </span>
                            </Typography>
                        </TimelineBody>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader>
                            <TimelineIcon className="p-2">
                                <TbListDetails size={30} />
                            </TimelineIcon>
                            <Typography variant="h5" color="blue-gray">
                                <p>  Kirimkan Detail Tugas</p>
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8 text-left">
                            <Typography color="gray" className="font-normal text-gray-600">
                                <span>The key to more success is to have a lot of pillows. Put it this way, it took me
                                    twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                    I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                    luv.
                                </span>
                            </Typography>
                        </TimelineBody>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader>
                            <TimelineIcon className="p-2">
                                <MdOutlinePayments size={30} />
                            </TimelineIcon>
                            <Typography variant="h5" color="blue-gray">
                                <p>Lakukan Pembayaran</p>
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody>
                            <Typography color="gray" className="font-normal text-sm text-gray-600 text-left">
                                <span>The key to more success is to have a lot of pillows. Put it this way, it took me
                                    twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                    I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                    luv.
                                </span>
                            </Typography>
                        </TimelineBody>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader>
                            <TimelineIcon className="p-2">
                                <MdAccessTime size={30} />
                            </TimelineIcon>
                            <Typography variant="h5" color="blue-gray">
                                <p>Tunggu Tugas Kamu Selesai</p>
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody>
                            <Typography className="font-normal text-sm text-gray-600 text-left">
                                <span>The key to more success is to have a lot of pillows. Put it this way, it took me
                                    twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                    I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                    luv.
                                </span>
                            </Typography>
                        </TimelineBody>
                    </TimelineItem>
                </Fade>
            </Timeline>
        </div >
    );
}
