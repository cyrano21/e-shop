
"use client"

// Categories.js
import React, { useState } from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { categories } from "@/utils/Categories";
import Container from "../Container";
import Category from "./Category";
import { Menu } from 'lucide-react';
import queryString from "query-string";

const Categories = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const params = useSearchParams();
    const router = useRouter();
    const categoryQuery = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    const handleCategorySelect = (category: { label: string; }) => {
        if (category.label === 'All') {
            // This assumes your default route fetches all products when no category parameter is present
            router.push('/');
        } else {
            let currentQuery = {};
            if (params) {
                currentQuery = queryString.parse(params.toString());
            }
            const updatedQuery = {
                ...currentQuery,
                category: category.label
            };
            const url = queryString.stringifyUrl({
                url: '/',
                query: updatedQuery
            }, { skipNull: true });
            router.push(url);
        }
        setMenuOpen(false); // Close the menu after selection
    };


    if (!isMainPage) return null;

    return (
        <div className="bg-white">
            <Container>
                <div className="lg:hidden">
                    <Menu
                        className="cursor-pointer text-gray-700 hover:text-gray-900"
                        size={24}
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    {menuOpen && (
                        <div
                            className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border p-2 z-50">
                            {categories.map((item) => (
                                <div
                                    key={item.label}
                                    onClick={() => handleCategorySelect(item)}
                                    className={`p-2 hover:bg-gray-100 cursor-pointer
                                    ${categoryQuery === item.label ? 'text-blue-700 font-bold' : 'text-gray-900'}
                                    `}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="hidden lg:flex pt-4 flex-row items-center justify-between overflow-x-auto">
                    {categories.map((item) => (
                        <Category
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={categoryQuery === item.label || (categoryQuery === null && item.label === 'All')}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Categories;
