// import React from "react";
// import logo from "../assets/logo.png";
// import group from "../assets/Group 1.png";
// import google from "../assets/Google.svg";
// import facebook from "../assets/Facebook.svg";

// const SignUp = () => {
//   return (
//     <div className="w-full h-screen flex items-center  bg-[#60A547]">
//       <div className="static w-1/3 h-full flex flex-col">
//         <div>
//           <img
//             src={logo}
//             alt=""
//             className="w-[169.743px] h-[58.757px] ml-[39px] mt-[42px]"
//           />
//         </div>
//         <div className="pt-[30px] pl-[3
//           9px] text-white text-[44.39px] ">
//           <h1
//             style={{
//               color: `#FFF`,
//               fontFamily: `Poppins`,
//               fontSize: `44.394px`,
//               fontStyle: `normal`,
//               fontWeight: `600`,
//               lineHeight: ` 52.229px` /* 117.647% */,
//             }}>
//             LOG INTO{" "}
//           </h1>
//           <h1
//             style={{
//               color: `#FFF`,
//               fontFamily: `Poppins`,
//               fontSize: `44.394px`,
//               fontStyle: `normal`,
//               fontWeight: `600`,
//               lineHeight: ` 52.229px` /* 117.647% */,
//             }}>
//             RIDE
//             <span
//               style={{
//                 color: `#2F313C`,
//                 fontFamily: `Poppins`,
//                 fontSize: `44.394px`,
//                 fontStyle: `normal`,
//                 fontWeight: `600`,
//                 lineHeight: ` 52.229px` /* 117.647% */,
//               }}>
//               {" "}
//               EVEE
//             </span>
//           </h1>
//         </div>
//         <div className="pl-[39px] pt-[13px] text-white uppercase">
//           <h1
//             style={{
//               color: `#FFF`,
//               fontFamily: `MTT Milano`,
//               fontSize: `26.114px`,
//               fontStyle: `normal`,
//               fontWeight: `500`,
//               lineHeight: `normal`,
//             }}>
//             ​India's Leading One-Way Inter-
//             <br />
//             City Cab Service Provider
//           </h1>
//         </div>
//         <div>
//           <img
//             src={group}
//             alt=""
//             className="absolute bottom-0 left-0 w-[700px] "
//             style={{
//               background: `linear-gradient(199deg, #60A547 49.27%, #D5F5C9 100%)`,
//             }}
//           />
//         </div>
//       </div>
//       <div
//         className="w-2/3 h-full flex flex-col bg-white p-20 justify-between text-center"
//         style={{
//           borderRadius: `39.171px 0px 0px 39.171px`,
//         }}>
//         <div className=" pt-[130px] text-center ">
//           <h1
//             style={{
//               color: `#2F313C`,
//               fontFamily: `Poppins`,
//               fontSize: `36.56px`,
//               fontStyle: `normal`,
//               fontWeight: `600`,
//               lineHeight: `normal`,
//             }}>
//             Create Account
//           </h1>
//         </div>
//         <div className="flex justify-between items-center px-[180px] space-x-[30px]">
//           <div
//             className="w-[287.257px]
// h-[52.229px]  text-[#060606] my-2 font-semibold bg-white p-4 text-center flex items-center justify-center"
//             style={{
//               borderRadius: `7.834px`,
//               border: `1.306px solid #E8E8E8`,
//             }}>
//             <button className="flex justify-between items-center align-middle">
//               <img src={google} alt="" className="h-6 mr-2" />
//               Continue with Google
//             </button>
//           </div>
//           <div
//             className="w-[287.257px]
// h-[52.229px] text-[#060606] my-2 font-semibold bg-white p-4 text-center flex items-center justify-center"
//             style={{
//               borderRadius: `7.834px`,
//               border: `1.306px solid #E8E8E8`,
//             }}>
//             <button className="flex ">
//               <img src={facebook} alt="" className="h-6 mr-2" />
//               Continue with FaceBook
//             </button>
//           </div>
//         </div>
//         <div className="w-full flex items-center justify-center relative py-2">
//           <p className="text-lg abosulte text-black/80 bg-[#f5f5f5]">- OR -</p>
//         </div>

//         <div className="w-full items-center justify-center flex flex-col">
//           <input
//             type="name"
//             placeholder="Name"
//             className="w-[605px] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-[605px] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//           />
//           <input
//             type="Password"
//             placeholder="Password"
//             className="w-[605px] py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//           />
//         </div>

//         <div className="  justify-center items-center flex flex-col h-[52.229px]">
//           <button className="w-[605.851px] bg-[#60A547] my-2 rounded-md p-4 text-center flex items-center justify-center">
//             <p
//               className="text-center"
//               style={{
//                 color: ` #FFF`,
//                 textAlign: `center`,
//                 fontFamily: `Poppins`,
//                 fontSize: `20.891px`,
//                 fontStyle: `normal`,
//                 fontWeight: `600`,
//                 lineHeight: `normal`,
//               }}>
//               Create Account
//             </p>
//           </button>
//         </div>
//         <div className="pl-[180px] pt-[32px]">
//           <p className="pt-[32px] pb-[117px] pr-[391px] items-center">
//             Already have an Account?
//             <a href="/login" className="text-[#60A547]">
//               LogIn
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import './Signup.css';
import React from "react";
import logo from "../assets/logo.png";
import group from "../assets/Group 1.png";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";


const Signup = () => {
  return (
    <div className="container">
       <div className="left-panel">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="title">
          <h1>SIGNUP INTO RIDE <span>EVEE</span></h1>
        </div>
        <div className="description">
          <p>India's Leading One-Way Inter-City Cab Service Provider</p>
        </div>
        <div className="background-image">
          <img src={group} alt="" />
        </div>
      </div>
      <div className="right-panel">
        <div className="title">
          <h1>Create Account</h1>
        </div>
        <div className="social-buttons">
          <div className="button">
            <img src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" alt="" />
            Continue with Google
          </div>
          <div className="button">
            <img src="data:image/png;base64,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" alt="" />
            Continue with Facebook
          </div>
        </div>
        <div className="or-divider">
          <p>- OR -</p>
        </div>
        <div className="input-fields">
          <input type="name" placeholder="Name"/>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-button">
          <button>Create Account</button>
        </div>
        <div className="signup-link">
          Already have an Account? <a href="/Login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;