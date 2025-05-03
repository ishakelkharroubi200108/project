import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
const OAuth = () => {
  const { signupWithGoogle } = useAuthStore();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      await signupWithGoogle(
        result.user.email,
        result.user.displayName.split(" ")[0],
        result.user.displayName.split(" ")[1],
        result.user.photoURL
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
      <div>
        <div className=' w-full flex items-center justify-between gap-3 mt-5 mb-3'>
            <hr className='flex-1 h-[0.5px] bg-gray-800'/>
            <span className="font-medium text-slate-400 ">Or</span>
            <hr className='flex-1 h-[0.5px] bg-gray-800' />
        </div>
        <button
      type="button"
      onClick={handleGoogleClick}
      className="w-full py-3 px-4 mt-5 bg-slate-200 text-gray-800 font-bold rounded-lg outline-none border-slate-200 bordr-2 hover:bg-slate-300 hover:border-slate-300 hover:text-gray-900 transition-all duration-300"
        >
        Continue with Google
        </button>
    </div>
  );
};

export default OAuth;
