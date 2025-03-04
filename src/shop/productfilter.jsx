import React, { useState } from 'react';
export default function ProductFilter() {
        const [rangeValue, setRangeValue] = useState(50); // Initial value for the slider

        const minPrice = 250;
        const maxPrice = 1800;

        // Calculate the price based on the slider value
        const calculatePrice = (value) => {
            return minPrice + ((maxPrice - minPrice) * value) / 100;
        };

        const handleRangeChange = (e) => {
            setRangeValue(e.target.value);
        };
        return (
            <>
                <section className="border bg-neutral-50 rounded-xl ">
                    <div className="p-8">
                        <div className="pb-5 border-b border-red-600">
                            <p className="text-xl font-bold ">Product Filter</p>
                        </div>
                        <div className="pb-4">
                            <p className='pb-5 pt-3'>Filter By Size</p>
                            <input type="checkbox" value="All" />
                            <label htmlFor="" className="pl-2">All (65)</label><br />
                            <input type="checkbox" value="All" />
                            <label htmlFor="" className="pl-2">Small (15)</label><br />
                            <input type="checkbox" value="All" />
                            <label htmlFor="" className="pl-2">Medium (30)</label><br />
                            <input type="checkbox" value="All" />
                            <label htmlFor="" className="pl-2">Large (20)</label><br />
                        </div>
                        <div className="div">
                            <p>Filter by Price</p>
                            <input
                                id="small-range"
                                type="range"
                                value={rangeValue}
                                onChange={handleRangeChange}
                                className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                            />
                            <p className=''>Price:<span className='text-red-500 font-bold'>$250-${calculatePrice(rangeValue).toFixed(2)}</span></p>
                        </div>
                    </div>
                </section>
            </>
        )
    }