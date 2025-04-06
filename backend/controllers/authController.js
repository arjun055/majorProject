import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Donor from "../models/Donor.js";
import Hospital from "../models/Hospital.js";
import BloodBank from "../models/BloodBank.js";

// SIGNUP-API
export const signup = async (req, res) => {
    try {
        const { username, email, password, userType, bloodType, id, latitude, longitude } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Please login!" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        let profile;
        if (userType === "donor") {
            profile = await Donor.create({ username, bloodType});
        } else if (userType === "hospital") {
            profile = await Hospital.create({ hospitalId: id, name: username});
        } else if (userType === "blood bank") {
            profile = await BloodBank.create({ bloodBankId: id, name: username});
        } else {
            return res.status(400).json({ message: "Invalid user type!" });
        }

        // Create user entry
        await User.create({
            email,
            password: hashedPassword,
            userType,
            profileId: profile._id,
            latitude,
            longitude
        });

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// LOGIN-API
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found. Please sign up!" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        res.json({ message: "Login successful!" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


