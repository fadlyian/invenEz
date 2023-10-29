import ButtonCreate from "@/Components/ButtonCreate";
import ButtonEdit from "@/Components/ButtonEdit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Cabang({ auth, cabangs, can }) {
    return (
        <AuthenticatedLayout user={auth} header={<h2>Cabang</h2>}>
            <Head title="Users" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {/* button create cabang */}
                    <div className="mb-4">
                        {can.edit && (
                            <ButtonCreate href={route('cabang.create')}>
                                create new cabang
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
                                    <th>Address</th>
                                    <th>Telp</th>
                                    {(can.delete || can.edit) && (
                                        <th className="text-center">Action</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {cabangs.map((cabang, index) => {
                                    return (
                                        <>
                                        <tr key={index}>
                                            <th className="text-center">
                                                {index + 1}
                                            </th>
                                            <td>{cabang.name}</td>
                                            <td>{cabang.address}</td>
                                            <td>{cabang.telp}</td>
                                            <td>
                                                <div className={`flex gap-2 justify-center ${cabang.name == "super-admin" ? "hidden" : ""}`}>
                                                    {can.edit && (
                                                        <ButtonEdit href={route('cabang.edit', cabang.id)}>
                                                            Edit
                                                        </ButtonEdit>
                                                    )}
                                                    {can.delete && (
                                                        <button className="btn btn-error border-none hover:bg-red-300 hover:border-none"
                                                            onClick={() => {
                                                                if(confirm(`Are you sure want to delete this cabang "${cabang.name}" ?`)){
                                                                    router.delete(route('cabang.destroy', cabang.id))
                                                                }
                                                            }}
                                                            type="button"
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
