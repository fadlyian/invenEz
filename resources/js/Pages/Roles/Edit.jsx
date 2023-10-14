import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'
import Select from "@/Components/Select";

export default function Edit({ auth, roles, permissions }) {
    const { data, setData, put, processing, errors } = useForm({
        name: roles.name,
        permission: roles.permissions.map(permission => permission.name),
    })

    // console.log(data)
    // console.log(roles.id)
    // console.log(permissionInRole)
    const handleChange = (e) => {
        const selectedPermission = e.target.value;
        if (e.target.checked) {
            // Jika kotak centang dicentang, tambahkan ID izin ke dalam array data.permission
            setData('permission', [...data.permission, selectedPermission]);
        } else {
            // Jika kotak centang tidak dicentang, hapus ID izin dari array data.permission
            setData('permission', data.permission.filter(permission => permission !== selectedPermission));
        }
    };


    function submit(e) {
        e.preventDefault()
        put(route('role.update', roles.id))
    }

    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2>Role</h2>}
            >

            <Head title="Roles Create" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a href={route('role.view')}>Roles</a>
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

                        {/* PERMISSION */}
                        <div>
                            {/* <label htmlFor="name">Permission</label><br /> */}
                            <div className="overflow-x-auto">
                                <table className="table table-zebra w-2/3">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Permission</th>
                                            <th className="text-center"></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {permissions.map((p,index) => {
                                            const isChecked = data.permission.includes(p.name);
                                            return (
                                                <tr key={index}>
                                                    <th>{p.name} {}</th>
                                                    <td className="flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        className="checkbox"
                                                        value={p.name}
                                                        onChange={(e) => handleChange(e)}
                                                        checked={isChecked} // Mengecek apakah izin saat ini ada dalam array data.permission
                                                    />
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            {errors.permission && <div className="text-red-500">{errors.permission}</div>}
                        </div>

                        {/* BUTTON CREATE */}
                        <div className="flex flex-row gap-x-36">
                            <button className="btn btn-success" type="submit">update</button>
                            <a className="btn btn-error" href={route('role.view')}>Cancel</a>
                        </div>
                    </form>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
