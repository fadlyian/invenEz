import ButtonCreate from "@/Components/ButtonCreate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function User({ auth, users, can }) {
    return (
        <AuthenticatedLayout user={auth} header={<h2>Users</h2>}>
            <Head title="Users" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {/* button create users */}
                    <div className="mb-4">
                        {can.edit && (
                            // <button className="btn btn-success border-none hover:bg-emerald-300 hover:border-none">
                            //     <a href={route("user.create")}>
                            //         create new user
                            //     </a>
                            // </button>
                            <ButtonCreate href={route('user.create')}>
                                create new user
                            </ButtonCreate>
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-center">No</th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    {(can.delete || can.edit) && (
                                        <th className="text-center">Action</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {users.map((user, index) => {
                                    return (
                                        <>
                                        <tr key={index}>
                                            <th className="text-center">
                                                {index + 1}
                                            </th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {/* <div className="flex gap-2 justify-center"> */}
                                                <div className={`flex gap-2 justify-center ${user.name == "Super-Admin" ? "hidden" : ""}`}>
                                                    {can.edit && (
                                                        <button className="btn btn-warning">
                                                            <a href={route('user.edit', user.id)}>edit</a>
                                                        </button>
                                                    )}
                                                    {can.delete && (
                                                        <button className="btn btn-error"
                                                            onClick={() => document.getElementById('my_modal_2').showModal()}
                                                            type="button"
                                                        >
                                                            delete
                                                        </button>
                                                    )}

                                                </div>
                                            </td>
                                        </tr>

                                        {/* MODAL DELETE */}
                                        <dialog id="my_modal_2" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Are you sure you want to delete this user "{user.name}"?</h3>
                                                {/* <p className="py-4">Are you sure you want to delete this user?</p> */}
                                                <div className="modal-action flex gap-10 justify-end">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-success">cancel</button>
                                                    </form>
                                                    <form method="dialog">
                                                        <button className="btn btn-error"
                                                            onClick={() => router.delete(route('user.destroy', user.id))}
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
