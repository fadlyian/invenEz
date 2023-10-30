import ButtonCreate from "@/Components/ButtonCreate";
import ButtonEdit from "@/Components/ButtonEdit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Barang({ auth, barangs, can }) {
    return (
        <AuthenticatedLayout user={auth} header={<h2>Barang</h2>}>
            <Head title="Users" />
            <div className="max-w-7xl mx-auto my-3 sm:px-6 lg:px-8">
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {/* button create barang */}
                    <div className="mb-4">
                        {can.edit && (
                            <ButtonCreate href={route('barang.create')}>
                                create new barang
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
                                    <th>Price</th>
                                    <th>Satuan</th>
                                    <th>Stok</th>
                                    {(can.delete || can.edit) && (
                                        <th className="text-center">Action</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {barangs.map((barang, index) => {
                                    return (
                                        <>
                                        <tr key={index}>
                                            <th className="text-center">
                                                {index + 1}
                                            </th>
                                            <td>{barang.name}</td>
                                            <td>{barang.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</td>
                                            <td>{barang.satuan}</td>
                                            <td>{barang.stok}</td>
                                            <td>
                                                <div className={`flex gap-2 justify-center ${barang.name == "super-admin" ? "hidden" : ""}`}>
                                                    {can.edit && (
                                                        <ButtonEdit href={route('barang.edit', barang.id)}>
                                                            Edit
                                                        </ButtonEdit>
                                                    )}
                                                    {can.delete && (
                                                        <button className="btn btn-error border-none hover:bg-red-300 hover:border-none"
                                                            onClick={() => {
                                                                if(confirm(`Are you sure want to delete this barang "${barang.name}" ?`)){
                                                                    router.delete(route('barang.destroy', barang.id))
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
