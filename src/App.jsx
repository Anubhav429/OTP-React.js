import OtpCard from './components/OtpCard';

const App = () => {
  return (
    // Full-page container with flexbox
    <div className="flex flex-col items-center justify-center relative bg-[#020202] h-[100vh]">
      
      {/* Main Div with rounded border and padding */}
      <div className="border-4 bg-[#1a1a1a] border-none rounded-3xl p-6 py-36 flex flex-col items-center relative">
        
        {/* Logo  Image */}
        <div className="mt-3">
          <img src="/assets/IMG2.svg" alt="Poker Chip" className="w-56 mb-10" />
        </div>

        {/* OTP Input Card */}
        <div className="mt-5 z-10">
          <OtpCard />
        </div>

        {/* Background image */}
        <div className="absolute bottom-0 w-full flex justify-center">
          <img src="/assets/IMAGE1.png" alt="Poker Chip" className="w-80 h-64" />
        </div>
      </div>
    </div>
  );
};

export default App;
