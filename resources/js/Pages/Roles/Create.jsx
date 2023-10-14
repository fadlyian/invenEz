import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react'

export default function Create({ auth, permissions }) {
    // console.log(roles);
    // console.log("heloo semua");

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        permission: [],
    })

    // const {state, setState} = useState(false)
    // console.log(data);
    const handleChange = (e) => {

        const selectedPermission = e.target.value;

        // Periksa apakah kotak centang dicentang
        if (e.target.checked) {
            // Jika dicentang, tambahkan izin ke dalam array
            setData('permission', [...data.permission, selectedPermission]);
        } else {
            // Jika tidak dicentang, hapus izin dari array
            setData('permission', data.permission.filter(item => item !== selectedPermission));
        }
    };

    function submit(e) {
        e.preventDefault()
        post(route('role.store'))
    }

    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2>Roles</h2>}
            >

            <Head title="Users Create" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a href={route('role.view')}>Roles</a>
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
                                            return (
                                                <tr key={index}>
                                                    <th>{p.name}</th>
                                                    <td className="flex items-center justify-center">
                                                        <input type="checkbox" className="checkbox" value={p.name} onChange={(e) => handleChange(e)}/>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            {errors.role && <div className="text-red-500">{errors.role}</div>}
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
