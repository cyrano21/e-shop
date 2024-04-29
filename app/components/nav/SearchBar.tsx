
'use client'

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {FiSearch} from "react-icons/fi";

const SearchBar = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<FieldValues>({
        defaultValues: {
            searchTerm: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!data.searchTerm) return router.push('/');

        const url = queryString.stringifyUrl({
            url: '/',
            query: {
                searchTerm: data.searchTerm
            }
        }, { skipNull: true });

        router.push(url);
        reset();
    };

    return (
        <div className="flex items-center w-full min-w-0">
            <input  placeholder="Explorer E~Shop"
                    className="flex-grow input-style p-1 border border-gray-300 rounded-l-md focus:outline-none h-10 w-full max-w-xs"/>
            <button className="bg-slate-700 hover:opacity-80 text-white px-2 py-1 rounded-r-md h-10">
                <span className="hidden sm:inline">Rechercher</span>
                <FiSearch className="sm:hidden"/>
            </button>
        </div>
    );
}

export default SearchBar
