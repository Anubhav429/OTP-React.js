# OTP Input Component

This project provides a fully functional OTP (One-Time Password) input component built using **React** and **Tailwind CSS**. It allows users to enter a 4-digit OTP with smooth navigation, validation, and paste functionality.

---

## Features 🚀

- 📌 **Digit Restriction** – Accepts only numeric input.
- 🔄 **Auto Move Focus** – Automatically moves to the next input field when a digit is entered.
- ⬅ **Backspace Handling** – Clears the current field and moves back if necessary.
- 📋 **Paste Support** – Allows users to paste a 4-digit OTP.
- 🎨 **Stylish UI** – Uses Tailwind CSS for a modern and responsive design.

---

## Installation & Setup 🛠️

### Prerequisites:
- Node.js installed
- A React project set up

### Steps:

1. Clone this repository (or copy the component files into your project):
   ```sh
   git clone https://github.com/your-repo/otp-input.git
   ```

2. Navigate to your React project directory and install dependencies:
   ```sh
   npm install
   ```

3. Copy the `OtpInput.js` and `OtpCard.js` files into your `components` folder.

4. Import the **OtpCard** component inside your main `App.js` file:
   ```jsx
   import OtpCard from './components/OtpCard';

   function App() {
     return (
       <div className="flex items-center justify-center h-screen bg-gray-900">
         <OtpCard />
       </div>
     );
   }

   export default App;
   ```

5. Start the development server:
   ```sh
   npm start
   ```

---

## File Structure 📂
```
.
├── components/
│   ├── OtpInput.js   # OTP Input Field Component
│   ├── OtpCard.js    # OTP Card Wrapper Component
├── public/
│   ├── assets/
│   │   ├── IMG2.svg  # Poker Chip Image
│   │   ├── IMAGE1.png # Background Image
├── App.js            # Main Application
├── package.json
└── README.md
```

---

## Usage 🏗️
### **OtpInput.js** – Handles OTP input fields.
- Uses `useState` for managing OTP values.
- Uses `useRef` to control input focus dynamically.
- Auto-focus, backspace handling, and paste support.

### **OtpCard.js** – Renders the OTP input inside a UI card.
- Displays **"Enter OTP"** heading.
- Integrates `OtpInput` component.
- Includes a **"Resend OTP"** link.

### **App.js** – The main wrapper that includes `OtpCard` inside a centered div.

---


