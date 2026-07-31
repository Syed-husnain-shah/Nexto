"use client";

import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-[90%] max-w-3xl rounded-md shadow-lg z-50">
        
        <div className="flex justify-end p-4 border-b">
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
          </button>
        </div>

        <div className="flex items-center justify-center h-75 text-gray-500 text-lg">
          No items found.
        </div>
      </div>
    </div>
  );
}