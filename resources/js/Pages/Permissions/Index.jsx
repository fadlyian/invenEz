import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Index({ auth, permissions }) {

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
                        <button className="btn btn-success">
                            <a href={route("permission.create")}>
                                create new permission
                            </a>
                        </button>
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
                                {permissions.map((p, index) => {
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
                                                    <button className="btn btn-warning">
                                                        <a href={route('permission.edit', p.id)}>edit</a>
                                                    </button>
                                                    <button className="btn btn-error"
                                                        onClick={() => document.getElementById('my_modal_2').showModal()}
                                                        type="button"
                                                    >
                                                        delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* MODAL DELETE */}
                                        <dialog id="my_modal_2" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Are you sure you want to delete this permission "{p.name}"?</h3>
                                                {/* <p className="py-4">Are you sure you want to delete this permission?</p> */}
                                                <div className="modal-action flex gap-10 justify-end">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-success">cancel</button>
                                                    </form>
                                                    <form method="dialog">
                                                        <button className="btn btn-error"
                                                            onClick={() => router.delete(route('permission.destroy', p.id))}
                                                        >sure</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <form method="dialog" className="modal-backdrop">
                                                <button>close</button>
                                            </form>
                                        </dialog>
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
