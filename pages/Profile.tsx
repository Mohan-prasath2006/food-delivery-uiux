import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../store';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useApp();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-24">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-background-light dark:bg-background-dark p-4 pb-2">
        <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center text-text-main dark:text-text-light">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight text-text-main dark:text-text-light">My Profile</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex h-12 min-w-0 cursor-pointer items-center justify-center gap-2 text-text-main dark:text-text-light">
            <span className="material-symbols-outlined text-2xl">edit</span>
          </button>
        </div>
      </div>

      <main className="flex-1 px-4 py-4">
        <div className="flex w-full flex-col items-center gap-4 text-center mb-8">
          <div className="relative">
            <div className="h-32 w-32 aspect-square rounded-full bg-cover bg-center bg-no-repeat shadow-xl border-4 border-white dark:border-surface-dark" style={{ backgroundImage: `url("${user.avatar}")` }}></div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md">
                <span className="material-symbols-outlined text-lg">camera_alt</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[22px] font-bold leading-tight text-text-main dark:text-text-light">{user.name}</p>
            <p className="text-base font-normal text-text-muted">{user.email}</p>
            <p className="text-sm font-normal text-text-muted mt-1">{user.phone}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 rounded-2xl bg-white dark:bg-surface-dark p-2 shadow-sm">
            {[
                { icon: 'receipt_long', label: 'Order History' },
                { icon: 'local_shipping', label: 'Track Current Order', action: () => navigate('/track-order') }
            ].map((item, i) => (
                <button key={i} onClick={item.action} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-black/20 rounded-xl transition-colors w-full text-left">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className="flex-1 text-base font-medium text-text-main dark:text-text-light">{item.label}</p>
                    <span className="material-symbols-outlined text-text-muted">chevron_right</span>
                </button>
            ))}
          </div>

          <div className="flex flex-col gap-1 rounded-2xl bg-white dark:bg-surface-dark p-2 shadow-sm">
            {[
                { icon: 'home_pin', label: 'Saved Addresses' },
                { icon: 'credit_card', label: 'Payment Methods' },
                { icon: 'favorite', label: 'Favorites' }
            ].map((item, i) => (
                <button key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-black/20 rounded-xl transition-colors w-full text-left">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className="flex-1 text-base font-medium text-text-main dark:text-text-light">{item.label}</p>
                    <span className="material-symbols-outlined text-text-muted">chevron_right</span>
                </button>
            ))}
          </div>

           <div className="flex flex-col gap-1 rounded-2xl bg-white dark:bg-surface-dark p-2 shadow-sm">
            {[
                { icon: 'notifications', label: 'Notifications' },
                { icon: 'settings', label: 'Settings' },
                { icon: 'help', label: 'Help & Support' }
            ].map((item, i) => (
                <button key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-black/20 rounded-xl transition-colors w-full text-left">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className="flex-1 text-base font-medium text-text-main dark:text-text-light">{item.label}</p>
                    <span className="material-symbols-outlined text-text-muted">chevron_right</span>
                </button>
            ))}
          </div>

          <button onClick={() => navigate('/')} className="mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span>Log Out</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;