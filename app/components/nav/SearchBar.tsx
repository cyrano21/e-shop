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
        <div className="flex items-center w-full sm:w-56 md:w-64 lg:w-96">
            <input
                {...register('searchTerm')}
                autoComplete="off"
                type="text"
                placeholder="Explorer E~Shop"
                className="input-style flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button onClick={handleSubmit(onSubmit)}
                    className="bg-slate-700 hover:opacity-80 text-white px-3 py-2 rounded-r-md flex items-center h-10">

                <span
                    className="hidden sm:inline">Rechercher</span>
                <FiSearch className="text-lg sm:hidden"/>
            </button>
        </div>
    );
}

export default SearchBar;

