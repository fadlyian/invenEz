import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    // console.log(auth)
    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2>Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="grid grid-cols-2 justify-items-stretch gap-2">
                        <Link className='btn btn-neutral' href={route('supplier.view')}>
                            Supplier
                        </Link>
                        <Link className='btn btn-neutral' href={route('barang.view')}>
                            Barang
                        </Link>
                        <Link className='btn btn-neutral' href={route('category.view')}>
                            Category
                        </Link>
                        <Link className='btn btn-neutral' href={route('cabang.view')}>
                            Cabang
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
