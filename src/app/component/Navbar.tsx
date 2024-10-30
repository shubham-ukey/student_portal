// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-blue-800 text-white flex flex-col md:flex-row justify-between items-center p-6">
      <div className="flex flex-col items-center md:items-start">
        <img 
          src="https://s3-alpha-sig.figma.com/img/1851/a76d/5564585b3e54113002a9ffd6e566e393?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gi~7T4kW0Oq~5ivG5TTSVnxzxUdm27neii4fCZRfvd3HxdiHmaN3OCXrWPqtv4~6x5mNfzykMkr8KBHJ25UoTsu8GyZ~f8d-JqfgCMfxpoyvXgZK6ZJyplt7CkXez~Ysxr1OZZKTCTOekmofloxAUVgqNrEEb1gBv-rH7szYCOOqXAODlNpU-LlK-fMBkAD1vVaNgPdfuH6FY6jK7bDPnUQ-BO2V0lEiImmm4Xf7s8QPkf2dPgvHcNLHUU2tYCqntBvR7w0lir7hLm97taIcugZ7pVMCzS3DSBAG9Qe9lb3LUKpRwHL2y2DA2IhVPbmopN5vUpcHsYraCl9S442AjQ__"
          alt="Logo"
          className="w-auto h-10 ml-10 mb-2"
        />
      </div>
      <h1 className="text-2xl text-center md:text-left" style={{ fontFamily: 'Outfit', fontSize: '32px', fontWeight: 700, lineHeight: '31.68px', textAlign: 'center' }}>Student Portal</h1>
      <div className="hidden md:block text-right w-full md:w-auto text-lg" style={{ fontFamily: 'Outfit', fontSize: '23.33px', fontWeight: 600, lineHeight: '29.4px', textAlign: 'right' }}>Hello, Gabrisa!
      <p className='text-right' style={{ fontFamily: 'Outfit', fontSize: '12px', fontWeight: 400, lineHeight: '15.12px', textAlign: 'right' }}>Class 7, Math + Science</p>
      </div>
    </header>
  );
};

export default Navbar;
