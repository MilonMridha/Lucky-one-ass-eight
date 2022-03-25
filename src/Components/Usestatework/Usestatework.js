import React from 'react';

const Usestatework = () => {
    return (
        <div className='container mt-4 shadow p-3 rounded'>
            <h4>How UseState work?</h4>
            <h6>Ans:</h6>
            <p>আমরা React এ কিছু স্পেশাল ফাংশন ব্যাবহার করে থাকি আমাদের অ্যাপকে ইন্টারেক্টিভ করার জন্যে। এই ফাংশন গুলোকেই আমরা “Hooks” বলি। React আমাদের এরকম কিছু কমন বিল্ট-ইন hooks দিয়ে দিয়েছে। UseState Nothing but a Function.এখানে  UseState একটি স্পেশাল ফাংশন | এ hook টি সবথেকে বেশি ব্যাবহার করে থাকি আমাদের অ্যাপে। কারণ আমরা এটির মাধ্যমেই আমরা আমাদের ইন্টারনাল স্টেট মেনেজ করে থাকি | এর মাধ্যমে আমাদের React কম্পোনেন্টে ডাটা স্টোর করতে পারি (যেমন স্টেট) অথবা আমরা বিভিন্ন অ্যাকশান পারফর্ম করতে পারি (সাইড ইফেক্ট)।</p>
        </div>
    );
};

export default Usestatework;