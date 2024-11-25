// src/pages/Room.tsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Room: React.FC = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // "create" or "join"
  const [roomId, setRoomId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRoomAction = async () => {
    setIsLoading(true);
    try {
      if (type === "create") {
        // Logic for creating a room
        const newRoomId = "abc123"; // Placeholder for actual Firebase logic
        setRoomId(newRoomId);
        alert(`Room created! Room ID: ${newRoomId}`);
      } else if (type === "join" && roomId) {
        // Logic for joining a room
        alert(`Joined room: ${roomId}`);
      } else {
        alert("Please enter a valid Room ID");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        {type === "create"
          ? "Create a New Meeting Room"
          : "Join an Existing Room"}
      </h1>
      {type === "join" && (
        <Input
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-80"
        />
      )}
      <Button
        className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700"
        onClick={handleRoomAction}
        disabled={isLoading || (type === "join" && !roomId)}
      >
        {isLoading
          ? type === "create"
            ? "Creating..."
            : "Joining..."
          : type === "create"
          ? "Create Room"
          : "Join Room"}
      </Button>
    </div>
  );
};

export default Room;
