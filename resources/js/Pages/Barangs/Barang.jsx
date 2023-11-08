import ButtonCreate from "@/Components/ButtonCreate";
import ButtonEdit from "@/Components/ButtonEdit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Barang({ auth, barangs, can }) {
    return (
        <AuthenticatedLayout user={auth} header={<h2>Barang</h2>}>
            <Head title="Barang" />
            <div className="">
                <div className="bg-white overflow-hidden">
                    {/* button create barang */}
                    <div className="mb-4">
                        {can.edit && (
                            <ButtonCreate href={route('barang.create')}>
                                create new barang
                            </ButtonCreate>
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-zebra table-fixed md:table md:table-zebra">
                            {/* head */}
                            <thead>
                                <tr className="border-2 md:border-none">
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
                                            <td>{barang.price.toLocaleString("id-ID", {currency:"IDR"})}</td>
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
