import React from "react";

export default function AnnounceMenu() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-NeSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolar sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            saepe eos tenetur nam totam minima corrupti
          </p>
        </div>
        <div className="bg-NePurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolar sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            saepe eos tenetur nam totam
          </p>
        </div>
        <div className="bg-NeYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolar sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            saepe eos tenetur nam totam minima corrupti
          </p>
        </div>
      </div>
    </div>
  );
}
