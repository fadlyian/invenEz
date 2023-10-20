import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    // console.log(active)
    return (
        <Link
            {...props}
            // className={
            //     'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
            //     (active
            //         ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
            //         : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
            //     className
            // }
            className={
                'btn border-none my-auto hover:bg-gray-200 hover:text-black border-black ' +
                (active ? 'bg-gray-100 ' : 'bg-gray-700 text-white  ' ) + className
            }
        >
            {children}
        </Link>
    );
}
