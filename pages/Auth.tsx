import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfileSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-text-main dark:text-text-light flex size-12 items-center justify-start">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-text-main dark:text-text-light text-lg font-bold leading-tight flex-1 text-center">Complete Your Profile</h2>
        <div className="size-12"></div>
      </div>

      <main className="flex-grow flex flex-col px-6 pt-2">
        <p className="text-text-main dark:text-text-light text-base font-normal text-center mb-6">Let's get your profile set up so you can start ordering.</p>
        
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 bg-gray-200 dark:bg-gray-700 shadow-inner" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyakWG5Eu5HTc-6pU97p0_tzTpBXRKlbA08FrimStOqq_rAZf4SFiJQPHtlW2k_pBaC6_Td-UF9b9LgT003yKWHli8I-wKKT--f7DcI7aJfHsaB-uAcgTYa6foc-AQiWz2qU0hkIiR1Xhen0wHjqvlbB2QXVL1rYF9naoZeq4edgw1OHM6HJzOh7W44RR3edd9j7tM4Xp1LTRKRZu5OrtZMgFX6rQf9ORy1VjnZa3Tu5pxL3SAwl5dPMh5xWsuz9DRh7U_W03oa8Ve")' }}></div>
            <button className="absolute bottom-0 right-0 flex items-center justify-center h-10 w-10 bg-primary rounded-full text-white shadow-lg">
              <span className="material-symbols-outlined text-xl">add_a_photo</span>
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <label className="flex flex-col gap-2">
            <span className="text-text-main dark:text-text-light text-base font-medium">Full Name</span>
            <input className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark p-4 text-base focus:border-primary focus:ring-primary dark:text-white" placeholder="Enter your full name" />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-text-main dark:text-text-light text-base font-medium">Phone Number</span>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-main dark:text-text-light font-medium">+91</span>
                <input type="tel" className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark p-4 pl-14 text-base focus:border-primary focus:ring-primary dark:text-white" placeholder="98765 43210" />
            </div>
          </label>
        </div>
      </main>

      <div className="p-6 bg-background-light dark:bg-background-dark">
        <button onClick={() => navigate('/verify-email')} className="flex items-center justify-center h-14 w-full rounded-full bg-primary text-base font-bold text-white shadow-lg hover:bg-primary/90 transition-colors">Save & Continue</button>
        <button onClick={() => navigate('/home')} className="w-full mt-4 text-center text-primary text-sm font-semibold">Skip for now</button>
      </div>
    </div>
  );
};

export const EmailConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
            <div className="flex items-center p-4 pb-2">
                <button onClick={() => navigate(-1)} className="text-text-main dark:text-text-light flex size-12 items-center justify-start">
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                </button>
            </div>
            
            <main className="flex flex-1 flex-col items-center px-6 pt-8 pb-10 text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <span className="material-symbols-outlined text-4xl text-primary">mark_email_unread</span>
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-text-main dark:text-text-light mb-4">Verify Your Email</h1>
                <p className="max-w-sm text-base text-text-muted dark:text-gray-300 mb-6">
                    We've sent a confirmation link to <span className="font-semibold text-text-main dark:text-white">user@email.com</span>. Please click the link to complete your registration.
                </p>
                <p className="text-sm text-text-muted/80 dark:text-gray-400 mb-12">
                    If you don't see the email, please check your spam or junk folder.
                </p>
                
                <div className="mt-auto w-full max-w-sm space-y-4">
                    <button onClick={() => navigate('/home')} className="w-full rounded-full bg-primary py-4 text-base font-semibold text-white shadow-sm hover:opacity-90">
                        Open Mail App
                    </button>
                    <button className="w-full rounded-full py-4 text-base font-semibold text-primary hover:bg-primary/10 transition-colors">
                        Didn't receive it? Resend Email
                    </button>
                </div>
            </main>
        </div>
    );
};