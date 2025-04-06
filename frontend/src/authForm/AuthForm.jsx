// import React, { useState } from "react";
// import axios from "axios"; // Import Axios
// import "./AuthForm.css";

// function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [userType, setUserType] = useState("");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     userType: "",
//     bloodType: "",
//     id: "",
//   });

//   const handleToggle = () => {
//     setIsLogin(!isLogin);
//     setFormData({
//       username: "",
//       email: "",
//       password: "",
//       userType: "",
//       bloodType: "",
//       id: "",
//     });
//     setUserType("");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "userType") {
//       setUserType(value);
//       setFormData({ ...formData, userType: value, bloodType: "", id: "" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const url = isLogin ? "http://localhost:8080/api/auth/login" : "http://localhost:8080/api/auth/signup";

//     try {
//       const response = await axios.post(url, formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       alert(response.data.message); // Show success message
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       alert("Error: " + (error.response?.data?.message || "Something went wrong"));
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="tab-container">
//         <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
//         <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
//       </div>

//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>

//         {!isLogin && (
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         )}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <select name="userType" value={formData.userType} onChange={handleChange} required>
//           <option value="">Select User Type</option>
//           <option value="donor">Donor</option>
//           <option value="hospital">Hospital</option>
//           <option value="blood bank">Blood Bank</option>
//         </select>

//         {userType === "donor" && (
//           <input
//             type="text"
//             name="bloodType"
//             placeholder="Blood Type"
//             value={formData.bloodType}
//             onChange={handleChange}
//             required
//           />
//         )}

//         {(userType === "hospital" || userType === "blood bank") && (
//           <input
//             type="text"
//             name="id"
//             placeholder={`Enter ${userType === "hospital" ? "Hospital" : "Blood Bank"} ID`}
//             value={formData.id}
//             onChange={handleChange}
//             pattern={userType === "hospital" ? "hos.*" : "bb.*"}
//             title={userType === "hospital" ? "ID should start with 'hos...'" : "ID should start with 'bb...' "}
//             required
//           />
//         )}

//         {isLogin && <a href="#">Forgot password?</a>}

//         <button type="submit">{isLogin ? "Login" : "Signup"}</button>

//         <p>
//           {isLogin ? "Not a member?" : "Already have an account?"}{" "}
//           <span className="toggle-link" onClick={handleToggle}>
//             {isLogin ? "Signup now" : "Login"}
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default AuthForm;


// import React, { useState } from "react";
// import axios from "axios"; 
// import "./AuthForm.css";

// function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     bloodType: "",
//     id: "",
//   });

//   const handleToggle = () => {
//     setIsLogin(!isLogin);
//     setFormData({
//       username: "",
//       email: "",
//       password: "",
//       bloodType: "",
//       id: "",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const url = isLogin ? "http://localhost:8080/api/auth/login" : "http://localhost:8080/api/auth/signup";

//     try {
//       const response = await axios.post(url, formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       alert(response.data.message); 
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       alert("Error: " + (error.response?.data?.message || "Something went wrong"));
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="tab-container">
//         <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
//         <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
//       </div>

//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>

//         {!isLogin && (
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         )}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         {!isLogin && (
//           <>
//             <select name="userType" onChange={handleChange} required>
//               <option value="">Select User Type</option>
//               <option value="donor">Donor</option>
//               <option value="hospital">Hospital</option>
//               <option value="blood bank">Blood Bank</option>
//             </select>

//             {formData.userType === "donor" && (
//               <input
//                 type="text"
//                 name="bloodType"
//                 placeholder="Blood Type"
//                 value={formData.bloodType}
//                 onChange={handleChange}
//                 required
//               />
//             )}

//             {(formData.userType === "hospital" || formData.userType === "blood bank") && (
//               <input
//                 type="text"
//                 name="id"
//                 placeholder={`Enter ${formData.userType === "hospital" ? "Hospital" : "Blood Bank"} ID`}
//                 value={formData.id}
//                 onChange={handleChange}
//                 pattern={formData.userType === "hospital" ? "hos.*" : "bb.*"}
//                 title={formData.userType === "hospital" ? "ID should start with 'hos...'" : "ID should start with 'bb...' "}
//                 required
//               />
//             )}
//           </>
//         )}

//         {isLogin && <a href="#">Forgot password?</a>}

//         <button type="submit">{isLogin ? "Login" : "Signup"}</button>

//         <p>
//           {isLogin ? "Not a member?" : "Already have an account?"}{" "}
//           <span className="toggle-link" onClick={handleToggle}>
//             {isLogin ? "Signup now" : "Login"}
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default AuthForm;



import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./AuthForm.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    bloodType: "",
    id: "",
    userType: "",
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (!isLogin && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, [isLogin]);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: "",
      email: "",
      password: "",
      bloodType: "",
      id: "",
      userType: "",
      latitude: null,
      longitude: null,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting Form Data:", formData); // Debugging step

    if (!isLogin && (formData.latitude === null || formData.longitude === null)) {
        alert("Fetching location... Please try again.");
        return;
    }
    
    const url = isLogin ? "http://localhost:8080/api/auth/login" : "http://localhost:8080/api/auth/signup";

    try {
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert(response.data.message); 
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error: " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="auth-container">
      <div className="tab-container">
        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>

        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {!isLogin && (
          <>
            <select name="userType" onChange={handleChange} required>
              <option value="">Select User Type</option>
              <option value="donor">Donor</option>
              <option value="hospital">Hospital</option>
              <option value="blood bank">Blood Bank</option>
            </select>

            {formData.userType === "donor" && (
              <input
                type="text"
                name="bloodType"
                placeholder="Blood Type"
                value={formData.bloodType}
                onChange={handleChange}
                required
              />
            )}

            {(formData.userType === "hospital" || formData.userType === "blood bank") && (
              <input
                type="text"
                name="id"
                placeholder={`Enter ${formData.userType === "hospital" ? "Hospital" : "Blood Bank"} ID`}
                value={formData.id}
                onChange={handleChange}
                pattern={formData.userType === "hospital" ? "hos.*" : "bb.*"}
                title={formData.userType === "hospital" ? "ID should start with 'hos...'" : "ID should start with 'bb...' "}
                required
              />
            )}
          </>
        )}

        {isLogin && <a href="#">Forgot password?</a>}

        <button type="submit">{isLogin ? "Login" : "Signup"}</button>

        <p>
          {isLogin ? "Not a member?" : "Already have an account?"} {" "}
          <span className="toggle-link" onClick={handleToggle}>
            {isLogin ? "Signup now" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
