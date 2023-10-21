import ButtonCreate from "@/Components/ButtonCreate";
import ButtonEdit from "@/Components/ButtonEdit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Index({ auth, permissions, can }) {
    return (
        <AuthenticatedLayout user={auth} header={<h2>Permission</h2>}>
            <Head title="Permission" />
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
                    {/* button create permission */}
                    <div className="mb-4">
                        {can.edit && (
                            <ButtonCreate href={route('permission.create')}>
                                create new permission
                            </ButtonCreate>
                        )}
                    </div>
                    <div className="overflow-x-auto w-2/3">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-center">No</th>
                                    <th>Permission</th>
                                    {/* <th className="text-center">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {permissions?.map((p, index) => {
                                    return (
                                        <>

                                        <tr key={index}>
                                            <th className="text-center">
                                                {index + 1}
                                            </th>
                                            <td>{p.name}</td>
                                            <td>{p.email}</td>
                                            <td>
                                                <div className="flex gap-2 justify-center">
                                                    {can.edit && (
                                                        <ButtonEdit href={route('permission.edit', p.id)}>
                                                            edit
                                                        </ButtonEdit>
                                                    )}
                                                    {can.delete && (
                                                        <button className="btn btn-error border-none hover:bg-red-300 hover:border-none"
                                                            type="button"
                                                            onClick={() => {
                                                                if(confirm(`Are you sure want to delete this permission "${p.name}" ?`)){
                                                                    router.delete(route('permission.destroy', p.id))
                                                                }
                                                            }}
                                                        >
                                                            delete
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                        </>
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
