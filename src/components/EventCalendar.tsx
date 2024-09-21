"use client";
import { events } from "@/data/Event";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div className="">
      <Calendar onChange={setValue} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Event</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-NeSky even:border-t-NePurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
