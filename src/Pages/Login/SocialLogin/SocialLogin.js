import React from "react";
import google from "../../../images/icon/google .png";
import facebook from "../../../images/icon/facebook.png";
import github from "../../../images/icon/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

    let errorElement;
  if (error) {
    
    errorElement= <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
   
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
          </div>
          {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-info w-50 mb-2 d-block mx-auto"
      >
        <img width={40} className="px-2 " src={google} alt="" />
        Google Sign In
      </button>
      <button className="btn btn-info w-50 mb-2 d-block mx-auto">
        <img width={40} className="px-2 " src={facebook} alt="" />
        Facebook Sign In
      </button>
      <button className="btn btn-info w-50 mb-2 d-block mx-auto">
        <img width={40} className="px-2 " src={github} alt="" />
        Github Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
