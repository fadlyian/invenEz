import { Link } from "@inertiajs/react";

export default function ButtonCreate({className='', children, ...props}){

    return(
        <Link className={"btn btn-success border-none hover:bg-emerald-300 hover:border-none " + className}
            {...props}
            type="button"
            >
            {children}
        </Link>
    )
}
