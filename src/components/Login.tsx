import { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";

const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // For navigation after login

  // Track user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is logged in, set user state
        // navigate("/", { state: { user } });
        // console.log(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setError(null);
    setIsLoading(true);

    try {
      await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error: any) {
      setError("An error occurred during Google Sign-In. Please try again.");
      console.error("Google Sign-In Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // navigate("/");
      setUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="absolute z-10 m-3 mt-6 bg-gradient-to-r from-blue-400 to-purple-500">
      {user ? (
        <div>
          <div className="flex items-center gap-1 mt-3">
            <Avatar className="rounded-full">
              <AvatarImage
                src={user.photoURL}
                style={{
                  borderRadius: "50%",
                  marginTop: "1rem",
                  width: "5.2rem",
                }}
                alt="user avatar"
              />
            </Avatar>
          </div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <div>
          <Button
            onClick={handleLogin}
            className="mt-3"
            style={{ marginTop: "1rem" }}
          >
            Login with Google
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
