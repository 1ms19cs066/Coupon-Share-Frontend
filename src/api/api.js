import axios from 'axios';

const url = 'https://coupon-share.onrender.com';

export const registerUser = (user) => axios({
    method: 'post',
    url: url+'/register',
    data: user
})

export const loginUser = (user) => axios({
    method: 'post',
    url: url+'/login',
    data: user
})

export const shareCoupon = (coupon) => axios({
    method: 'post',
    url: url+'/shareCoupon',
    data: coupon
});

export const getPublicCoupons = () => axios({
    method: 'get',
    url: url+'/getPublicCoupons',
});

export const claimCoupon = (info) => axios({
    method: 'post',
    url: url+'/claimCoupon',
    data: info
})

export const getTickets = (user) => axios({
    method: 'post',
    url: url+'/getTickets',
    data: user
});

export const myCoupons = (user) => axios({
    method: 'post',
    url: url+'/getMyCoupons',
    data: user
})

export const myPC = (user) => axios({
    method: 'post',
    url: url+'/getMyPC',
    data: user
})