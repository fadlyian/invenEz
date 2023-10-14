import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'

export default function Edit({ auth, permissions }) {
    const { data, setData, put, processing, errors } = useForm({
        name: permissions.name,
    })

    function submit(e) {
        e.preventDefault()
        put(route('permission.update', permissions.id))
    }

    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2>Permission</h2>}
            >

            <Head title="Permissions Create" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a href={route('permission.view')}>Permissions</a>
                        </li>
                        <li>
                            <a>Edit</a>
                        </li>
                    </ul>
                </div>
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="flex flex-col gap-3">
                        {/* NAME */}
                        <div>
                            <label htmlFor="name">Name</label><br />
                            <input type="text" placeholder="Type name here" className="input input-bordered w-full max-w-xs" value={data.name} onChange={e => setData('name', e.target.value)} required/>
                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                        </div>

                        {/* BUTTON CREATE */}
                        <div className="flex flex-row gap-x-36">
                            <button className="btn btn-success" type="submit">update</button>
                            <a className="btn btn-error" href={route('permission.view')}>Cancel</a>
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
