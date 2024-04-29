 "use client";


import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { IconType } from 'react-icons';

interface CategoryProps {
    label: string;
    icon: IconType;
    selected?: boolean;
}

const Category: React.FC<CategoryProps> = ({ label, icon: Icon, selected }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        if (label === 'All') {
            router.push('/');
        } else {
            let currentQuery = {};
            if (params) {
                currentQuery = queryString.parse(params.toString());
            }
            const updatedQuery = {
                ...currentQuery,
                category: label
            };
            const url = queryString.stringifyUrl({
                url: '/',
                query: updatedQuery
            }, {
                skipNull: true
            });
            router.push(url);
        }
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 transition rounded-lg cursor-pointer category-hover
     ${selected ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'bg-transparent text-gray-500'}
      `}
        >
            <Icon size={20}/>
            <div className="font-medium text-sm">{label}</div>
        </div>
    );
};

export default Category;
