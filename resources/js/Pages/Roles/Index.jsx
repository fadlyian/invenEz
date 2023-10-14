import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Index({ auth, roles }) {

    return (
        <AuthenticatedLayout user={auth} header={<h2>Roles</h2>}>
            <Head title="Roles" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                {/* <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Documents</a>
                        </li>
                        <li>Add Document</li>
                    </ul>
                </div> */}
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {/* button create role */}
                    <div className="mb-4">
                        <button className="btn btn-success">
                            <a href={route("role.create")}>
                                create new Role
                            </a>
                        </button>
                    </div>
                    <div className="overflow-x-auto w-2/3">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-center">No</th>
                                    <th>Name</th>
                                    {/* <th className="text-center">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {roles.map((role, index) => {
                                    return (
                                        <tr key={index}>
                                            <th className="text-center">
                                                {index + 1}
                                            </th>
                                            <td>{role.name}</td>
                                            <td>{role.email}</td>
                                            <td>
                                                <div className="flex gap-2 justify-center">
                                                    <button className="btn btn-warning">
                                                        <a href={route('role.edit', role.id)}>edit</a>
                                                    </button>
                                                    <button className="btn btn-error"
                                                        onClick={() => router.delete(route('role.destroy', role.id))}
                                                        type="button"
                                                    >
                                                        delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div></div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
