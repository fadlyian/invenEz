import { Link } from "@inertiajs/react";

export default function ButtonEdit({className='', children, ...props}){

    return(
        <Link className={"btn btn-warning border-none hover:bg-amber-300 hover:border-none " + className}
            {...props}
            type="button"
            >
            {children}
        </Link>
    )
}
