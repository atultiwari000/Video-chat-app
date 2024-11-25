import { useNavigate } from "react-router-dom";
import { Monitor, Users } from "lucide-react";
import { Button } from "../components/ui/button";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Connect, Share, and Collaborate Seamlessly
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Start a meeting or join one to collaborate with your team in real
            time.
          </p>
          <div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3rem",
            }}
          >
            <Button
              size="lg"
              className="group"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              onClick={() => navigate("/room?type=create")}
            >
              <Monitor className="mr-2 h-5 w-5" />
              Create Meeting
            </Button>
            <Button
              variant="outline"
              size="lg"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              onClick={() => navigate("/room?type=join")}
            >
              <Users className="mr-2 h-5 w-5" />
              Join Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
