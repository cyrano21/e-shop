'use client'
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
    const router = useRouter()

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
        <div className="flex items-center">
            <input
                {...register('searchTerm')}
                autoComplete="off"
                type="text"
                placeholder="Explorer E~Shop"
                className="input-style p-2 border border-gray-300 rounded-l-md w-80"
            />
            <button onClick={handleSubmit(onSubmit)} className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md">
                Rechercher
            </button>
        </div>
    );
}

export default SearchBar;
