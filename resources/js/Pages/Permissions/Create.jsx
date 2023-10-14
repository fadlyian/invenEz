import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'

export default function Create({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
    })
    console.log(data);

    function submit(e) {
        e.preventDefault()
        post(route('permission.store'))
    }

    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2>Permissions</h2>}
            >

            <Head title="Permissions Create" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a href={route('permission.view')}>Permission</a>
                        </li>
                        <li>
                            <a>Create</a>
                        </li>
                    </ul>
                </div>
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form onSubmit={submit} className="flex flex-col gap-3">
                        {/* NAME */}
                        <div>
                            <label htmlFor="name">Name</label><br />
                            <input type="text" placeholder="Type name permission here" className="input input-bordered w-full max-w-xs" value={data.name} onChange={e => setData('name', e.target.value)} required/>
                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                        </div>

                        {/* BUTTON CREATE */}
                        <div>
                            <button className="btn btn-success" type="submit">Create</button>
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
