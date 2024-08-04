"use client"

import React from 'react';
import CountUp from 'react-countup';
const ReusableCountUp = ({ separator, decimals ,decimal, start, end }) => {
   
    return (
         <CountUp separator={separator}  decimals={decimals} decimal={decimal} start={start} end={end} />
    )
};

export default ReusableCountUp;