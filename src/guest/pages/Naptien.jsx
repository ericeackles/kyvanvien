// src/guest/pages/NapTien.jsx

import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { addTransaction } from '../services/WalletService';
import { jwtDecode } from 'jwt-decode';
import { toast } from "react-toastify";

const initialOptions = {
    clientId: 'AR4ZKzp16FxDcpoBbwDkYLiC49-uNhcpOB8DAHuXqeOhecJARucFmfeHgGc-IJ4Di5ifUnoLvL3RoytK',
    currency: 'USD',
};

const NapTien = ({ onSuccess, onError }) => {
    const [amountVND, setAmountVND] = useState('10000');
    const [amountUSD, setAmountUSD] = useState((10000 / 23500).toFixed(2));
    const [notification, setNotification] = useState('');

    const token = localStorage.getItem('authToken');
    const userId = token ? jwtDecode(token).userId : null;

    useEffect(() => {
        const vnd = parseFloat(amountVND);
        if (!isNaN(vnd) && vnd >= 10000) {
            const usdAmount = (vnd / 23500).toFixed(2);
            setAmountUSD(usdAmount);
            setNotification('');
        }
    }, [amountVND]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setAmountVND(value);
    };

    const handleBlur = () => {
        let vnd = parseFloat(amountVND);

        if (isNaN(vnd) || vnd < 10000) {
            vnd = 10000;
        } else {
            vnd = Math.round(vnd / 1000) * 1000;
        }

        setAmountVND(vnd.toString());

        const usdAmount = (vnd / 23500).toFixed(2);
        setAmountUSD(usdAmount);

        if (vnd < 10000) {
            setNotification('Số tiền phải lớn hơn hoặc bằng 10.000 VND.');
        } else {
            setNotification('');
        }
    };

    const handleSuccess = async (details) => {
        try {
            await addTransaction(userId, amountVND / 1000);
            toast.success('Giao dịch thành công!');
            if (onSuccess) onSuccess(details);
        } catch (error) {
            console.error('Error adding transaction:', error);
            toast.error('Đã xảy ra lỗi khi lưu giao dịch.');
        }
    };

    return (
            <div className='chapter-wrapper container' style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff', maxWidth: '500px', width: '100%' }}>
                <h3 className='chapter-content' style={{ marginBottom: '20px', fontFamily:"'Roboto',sans-serif" }}>Nạp tiền vào ví</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                    <input
                        type="text"
                        value={amountVND}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Nhập số tiền VND"
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <p> 1.000 VND = 1 CREDIT</p>
                    {notification && <p style={{ color: 'red', textAlign: 'center' }}>{notification}</p>}
                    {amountUSD && (
                        <PayPalScriptProvider options={initialOptions}>
                            <PayPalButtons
                                forceReRender={[amountUSD]}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    currency_code: 'USD',
                                                    value: amountUSD,
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={async (data, actions) => {
                                    return actions.order.capture().then(async (details) => {
                                        console.log('Giao dịch hoàn tất bởi ', details.payer.name.given_name);
                                        await handleSuccess(details);
                                        if (onSuccess) onSuccess(details);
                                    });
                                }}
                                onError={(err) => {
                                    console.error('Lỗi khi thanh toán PayPal', err);
                                    setNotification('Đã xảy ra lỗi trong quá trình thanh toán.');
                                    if (onError) onError(err);
                                }}
                            />
                        </PayPalScriptProvider>
                    )}
                </div>
            </div>
    );
};

export default NapTien;