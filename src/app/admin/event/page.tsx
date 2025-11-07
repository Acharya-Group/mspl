"use client";

import React, { useState, useEffect, FormEvent } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { EventType, useEvent } from "@/hooks/event";

const Page: React.FC = () => {
  const { addEvent, allEvents, deleteEvent, updateEvent } = useEvent();

  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [editingEvent, setEditingEvent] = useState<EventType | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // 📍 Handle Add Event
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return toast.error("Please enter event title!");
    setLoading(true);

    addEvent.mutate(
      { title },
      {
        onSuccess: () => {
          toast.success("Event added successfully!");
          setTitle("");
          setLoading(false);
        },
        onError: () => {
          toast.error("Failed to add event!");
          setLoading(false);
        },
      }
    );
  };

  // 📍 Handle Delete
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    deleteEvent.mutate(id, {
      onSuccess: () => toast.success("Event deleted successfully!"),
      onError: () => toast.error("Failed to delete event!"),
    });
  };

  // 📍 Handle Edit
  const handleEdit = (event: EventType) => {
    setEditingEvent(event);
    setEditTitle(event.title);
  };

  // 📍 Handle Update
  const handleUpdate = () => {
    if (!editingEvent) return toast.error("No event selected!");
    if (!editTitle.trim()) return toast.error("Title cannot be empty!");

    updateEvent.mutate(
      { id: editingEvent._id, title: editTitle },
      {
        onSuccess: () => {
          toast.success("Event updated successfully!");
          setEditingEvent(null);
          setEditTitle("");
        },
        onError: () => toast.error("Failed to update event!"),
      }
    );
  };

  // 📍 Pagination
  const Events = allEvents.data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Events.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Events.length / itemsPerPage);

  if (allEvents.isLoading)
    return (
      <AdminLayout>
        <p className="text-center mt-4">Loading events...</p>
      </AdminLayout>
    );

  if (allEvents.isError)
    return (
      <AdminLayout>
        <p className="text-center mt-4 text-red-500">
          Error: {allEvents.error?.message}
        </p>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <Toaster />
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Manage Events</h1>

        {/* ➕ Add Event Form */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter event title"
            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 bg-green text-white rounded cursor-pointer ${
              loading ? "opacity-50" : "hover:bg-primary"
            }`}
          >
            {loading ? "Saving..." : "Add Event"}
          </button>
        </form>

        {/* 📋 Events Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[200px] w-full divide-y divide-gray-200">
            <thead className="bg-green text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr no.</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((event: EventType, idx: number) => (
                <tr key={event._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + idx + 1}</td>
                  <td className="px-4 py-2 font-medium">{event.title}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* ✏️ Update Modal */}
        {editingEvent && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-96 relative border">
              <button
                onClick={() => setEditingEvent(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold mb-4">Edit Event</h2>

              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full border px-3 py-2 rounded mb-4"
              />

              <button
                onClick={handleUpdate}
                disabled={updateEvent.status === "pending"}
                className={`px-4 py-2 bg-green text-white rounded cursor-pointer ${
                  updateEvent.status === "pending"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-primary"
                }`}
              >
                {updateEvent.status === "pending" ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
